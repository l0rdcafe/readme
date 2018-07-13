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
  view.drawBg();
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
      Raven.captureException(err);
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
      if (res.missing) {
        return res.missing;
      } else if (res.status === 429) {
        Raven.captureException(new Error(res.message));
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
            .catch(err => {
              throw err;
            });
          getSongInfo();
        }
        view.drawInfo(model.state);
        view.removeBg();
        view.drawSpinner();
      }
    })
    .catch(err => {
      Raven.captureException(err);
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
  view.drawSpinner();

  if (localStorage) {
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
  } else {
    accountSignIn();
  }
};

helpers.$on(document, "DOMContentLoaded", signIn);
