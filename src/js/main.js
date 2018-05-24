import helpers from "./helpers";
import view from "./view";
import SpotifyAPI from "./spotify-api";
import OAuth from "./oauth";
import model from "./model";
import GeniusAPI from "./genius-api";

const accountSignIn = function() {
  const tokenInStorage = localStorage.getItem("ACCESS_TOKEN");
  if (tokenInStorage) {
    localStorage.removeItem("ACCESS_TOKEN");
  }
  const signBtn = view.drawSignInBtn();
  helpers.$on(signBtn, "click", OAuth.authSignIn);
};

const getSongInfo = function() {
  GeniusAPI.getSongInfo(model.state, view.drawAnnotation)
    .then(result => {
      function isValidAnnotation(res) {
        return res.response.song.description.html !== "<p>?</p>";
      }

      if (result) {
        const embed = result.response.song.embed_content;

        if (isValidAnnotation(result)) {
          model.setSongInfo(result.response);
          const { annotationHTML } = model.state.playing;
          view.drawAnnotation(annotationHTML);
          view.drawGeniusLink(embed);
        } else {
          view.drawAnnotation("No annotations found.");
          view.drawGeniusLink(embed);
        }
      }
    })
    .catch(err => console.error(err));
};

const getCurrentlyPlaying = function(token) {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  SpotifyAPI.getInfo(options)
    .then(res => {
      if (res[0].error) {
        accountSignIn();
      } else if (model.state.playing === {} || model.state.playing.song !== res[1].item.name) {
        model.setUserInfo(res);
        const isPlaying = res[1].is_playing;

        if (isPlaying) {
          const { id } = res[1].item;
          SpotifyAPI.getSongStats(id, options)
            .then(result => {
              model.setSongStats(result);
              view.drawStats(model.state.playing);
            })
            .catch(err => console.error(err));
          getSongInfo();
        }
        view.drawInfo(model.state);
        view.drawSpinner();
      }
    })
    .catch(err => console.error(err));
};

const pollSongPlaying = function(token) {
  setInterval(() => {
    getCurrentlyPlaying(token);
  }, 5000);
};

const signIn = function() {
  const hasToken = /[#&]access_token=([^&]*)/.test(window.location.hash);
  const tokenInStorage = localStorage.getItem("ACCESS_TOKEN");
  if (hasToken) {
    const ACCESS_TOKEN = OAuth.getAccessToken();
    localStorage.setItem("ACCESS_TOKEN", `${ACCESS_TOKEN}`);
    pollSongPlaying(ACCESS_TOKEN);
  } else if (tokenInStorage) {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    pollSongPlaying(ACCESS_TOKEN);
  } else {
    accountSignIn();
  }
};

helpers.$on(document, "DOMContentLoaded", signIn);
