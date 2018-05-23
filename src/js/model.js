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

  const name = res[0].display_name;
  const { id } = res[0];
  const isPlaying = res[1].is_playing;

  resetState();

  if (isPlaying) {
    const song = res[1].item.name;
    const artist = res[1].item.artists[0].name;
    const duration = convertMillisToMinsSecs(res[1].item.duration_ms);

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

export default { state, setUserInfo, setSongInfo };
