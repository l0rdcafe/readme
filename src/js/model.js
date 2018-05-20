const state = {
  user: "",
  playing: {},
  userID: "",
  recentlyPlayed: []
};

const resetState = function() {
  state.user = "";
  state.playing = {};
  state.userID = "";
  state.recentlyPlayed = [];
};

const setUserInfo = function(res) {
  const name = res[0].display_name;
  const { id } = res[0];
  const tracks = res[2].items;
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
  state.recentlyPlayed = [...tracks];
};

const setSongInfo = function(data) {
  console.log(data);
  const { isPlaying } = state.playing;
  const isValidAnnotation = data.song.description.html !== "<p>?</p>";
  if (isPlaying && isValidAnnotation) {
    state.playing.annotationHTML = data.song.description.html;
  } else {
    state.playing.message = "No annotations available.";
  }
  console.log(state);
};

export default { state, setUserInfo, setSongInfo };
