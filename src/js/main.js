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
  GeniusAPI.getSong(model.state)
    .then(resp => {
      const { response } = resp;
      console.log(response);

      if (response.hits.length > 0) {
        const isSameArtist =
          model.state.playing.artist.toLowerCase() === response.hits[0].result.primary_artist.name.toLowerCase();

        if (isSameArtist) {
          const { id } = response.hits[0].result;

          GeniusAPI.getSongInfo(id)
            .then(result => {
              console.log(result);
              const isValidAnnotation = result.response.song.description.html !== "<p>?</p>";
              const embed = result.response.song.embed_content;

              if (isValidAnnotation) {
                model.setSongInfo(result.response);
                const { annotationHTML } = model.state.playing;
                view.drawAnnotation(annotationHTML);
                view.drawGeniusLink(embed);
              } else {
                view.drawAnnotation("No annotations found.");
                view.drawGeniusLink(embed);
                console.log(model.state);
              }
            })
            .catch(err => console.error(err));
        } else {
          view.drawAnnotation("No annotations found.");
        }
      } else {
        view.drawAnnotation("No annotations found.");
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
      } else {
        model.setUserInfo(res);
        console.log(res);
        view.drawInfo(model.state);
        const { isPlaying } = model.state.playing;

        if (isPlaying) {
          const { id } = res[1].item;
          SpotifyAPI.getSongStats(id, options)
            .then(result => console.log(result))
            .catch(err => console.error(err));
          getSongInfo();
        }
      }
    })
    .catch(err => console.error(err));
};

const signIn = function() {
  const hasToken = /[#&]access_token=([^&]*)/.test(window.location.hash);
  const tokenInStorage = localStorage.getItem("ACCESS_TOKEN");
  if (hasToken) {
    const ACCESS_TOKEN = OAuth.getAccessToken();
    localStorage.setItem("ACCESS_TOKEN", `${ACCESS_TOKEN}`);
    getCurrentlyPlaying(ACCESS_TOKEN);
  } else if (tokenInStorage) {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    getCurrentlyPlaying(ACCESS_TOKEN);
  } else {
    accountSignIn();
  }
};

helpers.$on(document, "DOMContentLoaded", signIn);
