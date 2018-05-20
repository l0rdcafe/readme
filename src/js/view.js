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
    const albumTitle = helpers.newEl("h6");
    albumTitle.innerHTML = `${recent.track.album.name}`;
    item.className = "list__item";
    item.innerHTML = `<h5>${recent.track.artists[0].name} - ${recent.track.name}</h5>`;
    item.appendChild(albumTitle);
    recentList.appendChild(item);
  });
  return recentList;
};

const drawUserTitle = function(state) {
  const { user } = state;
  const { isPlaying } = state.playing;
  const userTitle = helpers.newEl("h4");
  userTitle.className = "title";

  if (!isPlaying) {
    userTitle.innerHTML = "You are currently not playing anything. Please play a song on your Spotify.";
  } else {
    const { song } = state.playing;
    const { artist } = state.playing;
    userTitle.innerHTML = `Welcome, ${user}. You are currently listening to ${song} by ${artist}`;
  }

  return userTitle;
};

const drawInfo = function(state) {
  const section = drawInfoDiv();
  const userTitle = drawUserTitle(state);
  const recentList = drawRecentPlays(state.recentlyPlayed);
  const footer = helpers.qs(".footer");

  section.appendChild(userTitle);
  section.appendChild(recentList);

  footer.style.position = "static";
};

const drawAnnotation = function(message) {
  const section = helpers.qs(".section");
  section.insertAdjacentHTML("beforeend", `${message}`);
};

export default { drawSignInBtn, drawInfo, drawAnnotation };
