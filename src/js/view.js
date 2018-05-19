import helpers from "./helpers";

const drawSignInBtn = function() {
  const signBtn = helpers.newEl("button");
  const footer = helpers.qs(".footer");
  signBtn.textContent = "Sign In";
  signBtn.className = "button x-centered info";
  footer.parentNode.insertBefore(signBtn, footer);
  return signBtn;
};

const drawInfoDiv = function() {
  const section = helpers.newEl("div");
  const footer = helpers.qs(".footer");
  section.className = "section";
  footer.parentNode.insertBefore(section, footer);
  return section;
};

const drawRecentPlays = function(recents) {
  const recentList = helpers.newEl("ol");
  recentList.className = "list";

  recents.forEach(recent => {
    const item = helpers.newEl("li");
    const albumTitle = helpers.newEl("small");
    albumTitle.innerHTML = `${recent.track.album.name}`;
    item.className = "list__item";
    item.innerHTML = `${recent.track.artists[0].name} - ${recent.track.name}`;
    item.appendChild(albumTitle);
    recentList.appendChild(item);
  });
  return recentList;
};

const drawUserTitle = function(state) {
  const { user } = state;
  const { song } = state.playing;
  const { artist } = state.playing;
  const userTitle = helpers.newEl("h4");
  userTitle.className = "title";
  userTitle.innerHTML = `Welcome, ${user}. You are currently listening to ${song} by ${artist}`;
  return userTitle;
};

const drawInfo = function(state) {
  const section = drawInfoDiv();
  const userTitle = drawUserTitle(state);
  const recentList = drawRecentPlays(state.recentlyPlayed);

  section.appendChild(userTitle);
  section.appendChild(recentList);
};

export default { drawSignInBtn, drawInfo };
