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

const setUserInfo = function([name, id, isPlaying, song, artist, duration]) {
  resetState();

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
  state.playing.annotationHTML = data;
};

const setSongStats = function([tempo, key, danceability]) {
  state.playing.tempo = tempo;
  state.playing.key = key;
  state.playing.danceability = danceability;
};

export default { state, setUserInfo, setSongInfo, setSongStats };
