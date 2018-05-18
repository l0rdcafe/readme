const state = {
  user: "",
  playing: {},
  userID: "",
  recentlyPlayed: []
};

const resetState = function() {
  state.user = "";
  state.playing = "";
  state.userID = "";
  state.recentlyPlayed = [];
};

const setUserInfo = function(res) {
  const name = res[0].display_name;
  const { id } = res[0];
  const song = res[1].item.name;
  const artist = res[1].item.artists[0].name;
  const tracks = res[2].items;

  state.user = name;
  state.userID = id;
  state.playing = {
    song,
    artist
  };
  state.recentlyPlayed = [...tracks];

  console.log(state);
};

export default { state, resetState, setUserInfo };
