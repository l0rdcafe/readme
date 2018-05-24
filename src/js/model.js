const state = {
  user: "",
  playing: {},
  userID: ""
};

const resetState = function() {
  state.user = "";
  state.playing = {};
  state.userID = "";
};

const setUserInfo = function(res) {
  function convertMillisToMinsSecs(millis) {
    const mins = Math.floor(millis / 60000);
    const secs = ((millis % 60000) / 1000).toFixed(0);
    const duration = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    return duration;
  }

  function parseResponse(resp) {
    const name = resp[0].display_name;
    const { id } = resp[0];
    const isPlaying = resp[1].is_playing;
    const artist = resp[1].item.artists[0].name;
    const song = resp[1].item.name;
    const duration = convertMillisToMinsSecs(resp[1].item.duration_ms);
    return [name, id, isPlaying, song, artist, duration];
  }

  resetState();

  const [name, id, isPlaying, song, artist, duration] = parseResponse(res);

  if (isPlaying) {
    state.playing = {
      song,
      artist,
      duration,
      isPlaying: true
    };
  } else {
    state.playing.isPlaying = false;
  }

  state.user = name;
  state.userID = id;
};

const setSongInfo = function(data) {
  state.playing.annotationHTML = data.song.description.html;
};

const setSongStats = function(stats) {
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

    const key = keyDict[stats.key];
    const tempo = Math.floor(data.tempo);
    const danceability = parseDance(stats.danceability);
    return [tempo, key, danceability];
  }

  const [tempo, key, danceability] = parseStats(stats);

  state.playing.tempo = tempo;
  state.playing.key = key;
  state.playing.danceability = danceability;
};

export default { state, setUserInfo, setSongInfo, setSongStats };
