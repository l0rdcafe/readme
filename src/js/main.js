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
        console.log(res);
        model.setUserInfo(res);
        console.log(res);
        view.drawInfo(model.state);

        GeniusAPI.getSong(model.state)
          .then(resp => {
            const { response } = resp;
            console.log(response);
            const { isPlaying } = model.state.playing;
            const isSameArtist =
              model.state.playing.artist.toLowerCase() === response.hits[0].result.primary_artist.name.toLowerCase();
            const isSameSong = model.state.playing.song.toLowerCase() === response.hits[0].result.title.toLowerCase();
            if (isSameArtist && isSameSong && isPlaying) {
              const { id } = response.hits[0].result;

              GeniusAPI.getSongInfo(id)
                .then(result => {
                  console.log(result);
                  model.setSongInfo(result.response);
                })
                .catch(err => console.error(err));
            } else {
              model.state.playing.message = "No annotations found.";
            }
            view.drawAnnotation(model.state);
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
