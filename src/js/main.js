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
  helpers.qs(".section").innerHTML = "";
  const signBtn = view.drawSignIn();
  helpers.$on(signBtn, "click", OAuth.authSignIn);
};

const getSongInfo = function() {
  GeniusAPI.getSongInfo(model.state)
    .then(result => {
      if (result.error) {
        const { embed } = result;
        view.drawAnnotation("No annotations found.");
        view.drawGeniusLink(embed);
      } else {
        model.setSongInfo(result.annot);
        const { annotationHTML } = model.state.playing;
        view.drawAnnotation(annotationHTML);
        view.drawGeniusLink(result.embed);
      }
    })
    .catch(err => {
      view.drawNotif("Sorry there's a network error. Please try again later.");
    });
};

const getCurrentlyPlaying = function(token) {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  view.removeNotifs();
  SpotifyAPI.getInfo(options)
    .then(res => {
      if (res.error) {
        accountSignIn();
      } else if (res.status === 429) {
        view.drawNotif(res.message);
      } else if (model.state.playing.song !== res.data[3]) {
        const { data } = res;
        model.setUserInfo(data);
        const isPlaying = data[2];
        const id = data[1];

        if (isPlaying) {
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
    .catch(err => {
      view.drawNotif("Sorry there's a network error. Please try again later.");
    });
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
