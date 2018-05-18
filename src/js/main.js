import helpers from "./helpers";
import view from "./view";
import SpotifyAPI from "./spotify-api";
import OAuth from "./oauth";
import model from "./model";

const signIn = function() {
  const hasToken = /[#&]access_token=([^&]*)/.test(window.location.hash);
  if (hasToken) {
    const accessToken = OAuth.getAccessToken();
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };
    SpotifyAPI.getInfo(options)
      .then(res => {
        model.setUserInfo(res);
        console.log(res);
      })
      .catch(err => console.error(err));
  } else {
    const signBtn = view.drawSignInBtn();
    helpers.$on(signBtn, "click", OAuth.authSignIn);
  }
};

helpers.$on(document, "DOMContentLoaded", signIn);
