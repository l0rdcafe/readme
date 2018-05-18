const state = {
  user: "",
  playing: "",
  userID: "",
  recentlyPlayed: []
};

const resetState = function() {
  state.user = "";
  state.playing = "";
  state.userID = "";
  state.recentlyPlayed = [];
};

const setUserInfo = function(user) {
  state.user = user.display_name;
  state.userID = user.id;
  console.log(user.display_name);
  console.log(user.id);
};

export default { state, resetState, setUserInfo };
