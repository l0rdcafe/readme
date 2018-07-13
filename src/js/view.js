import helpers from "./helpers";

const removeBg = function() {
  const bg1 = helpers.qs(".bg1");
  const bg2 = helpers.qs(".bg2");

  if (!bg1 || !bg2) {
    return;
  }

  bg1.parentNode.removeChild(bg1);
  bg2.parentNode.removeChild(bg2);
};

const drawBg = function() {
  const section = helpers.qs(".section");
  const bg1 = helpers.newEl("div");
  const bg2 = helpers.newEl("div");
  bg1.className = "bg1";
  bg2.className = "bg2";
  section.parentNode.insertBefore(bg1, section);
  section.parentNode.insertBefore(bg2, section);
};

const drawNotif = function(msg, type = "error") {
  const div = helpers.newEl("div");
  const section = helpers.qs(".section");
  div.innerHTML = msg;
  div.className = `notif animated fadeInDown text-c ${type}`;
  section.parentNode.insertBefore(div, section.nextSibling);
  const notif = helpers.qs(".notif");

  setTimeout(() => {
    notif.classList.remove("fadeInDown");
    notif.classList.add("fadeOutUp");
  }, 2500);
};

const removeNotifs = function() {
  const notifs = helpers.qsa(".notif");
  for (let i = 0; i < notifs.length; i += 1) {
    notifs[i].parentNode.removeChild(notifs[i]);
  }
};

const drawSpinner = function() {
  const spinner = helpers.newEl("i");
  const section = helpers.qs(".section");
  spinner.className = "fas fa-spinner fa-spin x-centered fa-lg";
  section.appendChild(spinner);
};

const removeSpinner = function() {
  const spinner = helpers.qs(".fa-spinner");
  if (!spinner) {
    return;
  }
  spinner.parentNode.removeChild(spinner);
};

const drawSignInBtn = function() {
  const signBtn = helpers.newEl("button");
  signBtn.textContent = "Sign In";
  signBtn.className = "button x-centered info";
  return signBtn;
};

const drawSignIn = function() {
  const signBtn = drawSignInBtn();
  const section = helpers.qs(".section");
  const title = helpers.newEl("h4");
  title.className = "title";
  title.innerHTML = "Sign in with your Spotify account to get annotations about your currently playing track.";
  section.appendChild(title);
  section.appendChild(signBtn);
  return signBtn;
};

const drawUserTitle = function(state) {
  const { user } = state;
  const { isPlaying } = state.playing;
  const userTitle = helpers.newEl("h4");
  userTitle.className = "title";

  if (!isPlaying) {
    userTitle.innerHTML = "You are currently not playing anything. Please play a song on your Spotify.";
  } else if (user === null) {
    const { song, artist } = state.playing;
    userTitle.innerHTML = `Welcome, Stranger. You are currently listening to <span class="title__item">${song}</span> by <span class="title__item">${artist}</span>`;
  } else {
    const { song, artist } = state.playing;
    userTitle.innerHTML = `Welcome, <span class="title__user">${user}.</span> You are currently listening to <span class="title__item">${song}</span> by <span class="title__item">${artist}</span>`;
  }

  return userTitle;
};

const drawInfo = function(state) {
  const section = helpers.qs(".section");
  const userTitle = drawUserTitle(state);
  const footer = helpers.qs(".footer");
  section.innerHTML = "";
  footer.style.position = "absolute";

  section.appendChild(userTitle);
};

const drawAnnotation = function(message) {
  const section = helpers.qs(".section");
  const annotation = helpers.newEl("div");
  annotation.className = "annot";
  annotation.insertAdjacentHTML("beforeend", `${message}`);
  removeSpinner();
  section.appendChild(annotation);

  const pxFromBottom = window.innerHeight - document.body.scrollHeight;
  const footer = helpers.qs(".footer");

  if (pxFromBottom < 120) {
    footer.style.position = "static";
  } else {
    footer.style.position = "absolute";
  }
};

const drawGeniusLink = function(text) {
  const section = helpers.qs(".section");
  const link = helpers.newEl("div");
  link.className = "link";
  link.insertAdjacentHTML("beforeend", `${text}`);
  section.appendChild(link);
};

const drawStats = function(data) {
  const list = helpers.newEl("ol");
  const title = helpers.qs(".title");
  list.className = "stats";

  const keyLi = helpers.newEl("li");
  const tempoLi = helpers.newEl("li");
  const durationLi = helpers.newEl("li");
  const danceabilityLi = helpers.newEl("li");

  keyLi.className = "stats__item";
  tempoLi.className = "stats__item";
  durationLi.className = "stats__item";
  danceabilityLi.className = "stats__item";

  keyLi.innerHTML = `Key: <span class="stats__item__text">${data.key}</span>`;
  tempoLi.innerHTML = `Tempo: <span class="stats__item__text">${data.tempo} BPM</span>`;
  durationLi.innerHTML = `Duration: <span class="stats__item__text">${data.duration}</span>`;
  danceabilityLi.innerHTML = `Danceability: <div class="${data.danceability} dance"></div>`;

  list.appendChild(keyLi);
  list.appendChild(durationLi);
  list.appendChild(tempoLi);
  list.appendChild(danceabilityLi);

  title.parentNode.insertBefore(list, title.nextSibling);
};

export default {
  drawSignIn,
  drawInfo,
  drawAnnotation,
  drawGeniusLink,
  drawSpinner,
  drawStats,
  drawNotif,
  removeNotifs,
  removeBg,
  drawBg
};
