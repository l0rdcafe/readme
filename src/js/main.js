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
        const { isPlaying } = model.state.playing;
        view.drawInfo(model.state);

        if (isPlaying) {
          GeniusAPI.getSong(model.state)
            .then(resp => {
              const { response } = resp;
              console.log(response);

              if (response.hits.length > 0) {
                const isSameArtist =
                  model.state.playing.artist.toLowerCase() ===
                  response.hits[0].result.primary_artist.name.toLowerCase();

                if (isSameArtist) {
                  const { id } = response.hits[0].result;

                  GeniusAPI.getSongInfo(id)
                    .then(result => {
                      console.log(result);
                      const isValidAnnotation = result.response.song.description.html !== "<p>?</p>";

                      if (isValidAnnotation) {
                        model.setSongInfo(result.response);
                        const { annotationHTML } = model.state.playing;
                        view.drawAnnotation(annotationHTML);
                      } else {
                        view.drawAnnotation("No annotations found.");
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
        }
      })
      .catch(err => console.error(err));
  } else {
    const signBtn = view.drawSignInBtn();
    helpers.$on(signBtn, "click", OAuth.authSignIn);
  }
};

helpers.$on(document, "DOMContentLoaded", signIn);
