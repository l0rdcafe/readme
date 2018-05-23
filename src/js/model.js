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
  const name = res[0].display_name;
  const { id } = res[0];
  const isPlaying = res[1].is_playing;

  resetState();

  if (isPlaying) {
    const song = res[1].item.name;
    const artist = res[1].item.artists[0].name;
    state.playing = {
      song,
      artist,
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
