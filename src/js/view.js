import helpers from "./helpers";

const drawSpinner = function() {
  const spinner = helpers.newEl("i");
  const section = helpers.qs(".section");
  spinner.className = "fas fa-spinner fa-spin x-centered fa-lg";
  section.appendChild(spinner);
};

const removeSpinner = function() {
  const spinner = helpers.qs(".fa-spinner");
  spinner.parentNode.removeChild(spinner);
};

const drawSignInBtn = function() {
  const signBtn = helpers.newEl("button");
  const footer = helpers.qs(".footer");
  signBtn.textContent = "Sign In";
  signBtn.className = "button x-centered info";
  footer.parentNode.insertBefore(signBtn, footer);
  return signBtn;
};

const drawUserTitle = function(state) {
  const { user } = state;
  const { isPlaying } = state.playing;
  const userTitle = helpers.newEl("h4");
  userTitle.className = "title";

  if (!isPlaying) {
    userTitle.innerHTML = "You are currently not playing anything. Please play a song on your Spotify.";
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

  if (pxFromBottom < 125) {
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
  const stats = [data.key, data.duration, data.tempo, data.danceability];
  stats.forEach(stat => {
    const isDuration = /:/.test(stat);
    const isKey = /^([A-Z]+[#]*)/.test(stat);
    const isDanceability = /^([a-z]+)$/.test(stat);
    const statLi = helpers.newEl("li");
    statLi.className = `stats__item`;

    if (isDuration) {
      statLi.innerHTML = `Duration: <span class="stats__item__text">${stat}</span>`;
    } else if (isKey) {
      statLi.innerHTML = `Key: <span class="stats__item__text">${stat}</span>`;
    } else if (isDanceability) {
      statLi.innerHTML = `Danceability: <div class="${stat} dance"></div>`;
    } else {
      statLi.innerHTML = `Tempo: <span class="stats__item__text">${stat} BPM</span>`;
    }
    list.appendChild(statLi);
  });

  title.parentNode.insertBefore(list, title.nextSibling);
};

export default { drawSignInBtn, drawInfo, drawAnnotation, drawGeniusLink, drawSpinner, drawStats };
