import helpers from "./helpers";
import view from "./view";
import SpotifyAPI from "./spotify-api";
import OAuth from "./oauth";

const signIn = function() {
  const tokenRegex = /[#&]access_token=([^&]*)/;
  const getAccessToken = function() {
    const match = tokenRegex.exec(window.location.hash);
    const accessToken = decodeURIComponent(match[1].replace(/\+g/, " "));
    window.location.hash = "";
    return accessToken;
  };
  const hasToken = tokenRegex.test(window.location.hash);
  if (hasToken) {
    const accessToken = getAccessToken();
    console.log(accessToken);
    SpotifyAPI.getInfo(accessToken)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  } else {
    const signBtn = view.drawSignInBtn();
    helpers.$on(signBtn, "click", OAuth.authSignIn);
  }
};

helpers.$on(document, "DOMContentLoaded", signIn);
