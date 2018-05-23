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
    userTitle.innerHTML = `Welcome, <span class="title__user">${user}.</span> You are currently listening to <span class="title__item">${song}</span> by <span class="title__item">${artist}</span>`;
  }

  return userTitle;
};

const drawInfo = function(state) {
  const section = drawInfoDiv();
  const userTitle = drawUserTitle(state);

  section.appendChild(userTitle);
};

const drawAnnotation = function(message) {
  const section = helpers.qs(".section");
  const annotation = helpers.newEl("div");
  annotation.className = "annot";
  annotation.insertAdjacentHTML("beforeend", `${message}`);
  section.appendChild(annotation);
};

const drawGeniusLink = function(text) {
  const section = helpers.qs(".section");
  const link = helpers.newEl("div");
  link.className = "link";
  link.insertAdjacentHTML("beforeend", `${text}`);
  section.appendChild(link);
};

export default { drawSignInBtn, drawInfo, drawAnnotation, drawGeniusLink };
