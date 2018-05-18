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

const drawInfo = function(state) {
  const section = drawInfoDiv();
  section.innerHTML = state.user;
};

export default { drawSignInBtn, drawInfo };
