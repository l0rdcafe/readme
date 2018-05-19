import helpers from "./helpers";
import view from "./view";
import SpotifyAPI from "./spotify-api";
import OAuth from "./oauth";
import model from "./model";
import GeniusAPI from "./genius-api";

const signIn = function() {
  const hasToken = /[#&]access_token=([^&]*)/.test(window.location.hash);
  if (hasToken) {
    const ACCESS_TOKEN = OAuth.getAccessToken();
    const options = {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    };
    SpotifyAPI.getInfo(options)
      .then(res => {
        model.setUserInfo(res);
        console.log(res);
        view.drawInfo(model.state);

        GeniusAPI.getLyrics(model.state)
          .then(resp => {
            const { response } = resp;
            console.log(response);
            const { id } = response.hits[0].result;

            GeniusAPI.getAnnotations(id)
              .then(result => console.log(result))
              .catch(err => console.error(err));
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  } else {
    const signBtn = view.drawSignInBtn();
    helpers.$on(signBtn, "click", OAuth.authSignIn);
  }
};

helpers.$on(document, "DOMContentLoaded", signIn);
