import helpers from "./helpers";

const getInfo = function(options) {
  const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1/me";
  const info = helpers.getJSON(SPOTIFY_ENDPOINT, options);
  const currentlyPlaying = helpers.getJSON(`${SPOTIFY_ENDPOINT}/player/currently-playing`, options);

  function convertMillisToMinsSecs(millis) {
    const mins = Math.floor(millis / 60000);
    const secs = ((millis % 60000) / 1000).toFixed(0);
    const duration = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    return duration;
  }

  function parseResponse(resp) {
    if (!resp[0]) {
      return { missing: true };
    } else if (resp[0].status === 429) {
      return { message: `Sorry, you have exceeded the request limit. Please try again later.`, status: 429 };
    }
    const name = resp[0].display_name;
    const { id } = resp[1].item;
    const isPlaying = resp[1].is_playing;
    const artist = resp[1].item.artists[0].name;
    const song = resp[1].item.name;
    const duration = convertMillisToMinsSecs(resp[1].item.duration_ms);

    return { data: [name, id, isPlaying, song, artist, duration] };
  }

  return Promise.all([info, currentlyPlaying]).then(res => parseResponse(res));
};

const getSongStats = function(id, options) {
  const SPOTIFY_ENDPOINT = `https://api.spotify.com/v1/audio-features/${id}`;

  function parseStats(data) {
    const keyDict = {
      0: "C",
      1: "C# / Db",
      2: "D",
      3: "D# / Eb",
      4: "E",
      5: "F",
      6: "F# / Gb",
      7: "G",
      8: "G# / Ab",
      9: "A",
      10: "A# / Bb",
      11: "B"
    };

    const parseDance = function(danceIndex) {
      let danceability;
      const index = danceIndex.toFixed(2);

      if (index <= 0.25) {
        danceability = "info";
      } else if (index <= 0.5) {
        danceability = "primary";
      } else if (index <= 0.75) {
        danceability = "warning";
      } else if (index <= 1) {
        danceability = "error";
      }
      return danceability;
    };

    const key = keyDict[data.key];
    const tempo = Math.floor(data.tempo);
    const danceability = parseDance(data.danceability);
    return [tempo, key, danceability];
  }

  return helpers.getJSON(SPOTIFY_ENDPOINT, options).then(res => parseStats(res));
};

export default { getInfo, getSongStats };
