import helpers from "./helpers";

const GENIUS_ENDPOINT = "https://api.genius.com";
const CLIENT_ID = "ctokZwUfFN3tRZvAF3508DuFP96uTHbzrUzO1qRr1afr_uHooGGpQpYyyPtctNXz";
const CLIENT_SECRET = "kHUtzfUEv40H27yPcM47aSyilIFmKEh7CRwKmsQs9u_l4gusJ9SqN4qAv8VK1pOYxFwPlrrXsteVa8JEEHWoxw";
const ACCESS_TOKEN = "EGD5O9WVYIyagmEQBfAgmp-WAt7VcMjME59wm4pM7BZ2fzwrii1vAIfOKZ31WK_0";

const getSong = function(state) {
  const { song } = state.playing;
  const { artist } = state.playing;
  const query = decodeURIComponent(`${artist} ${song}`);
  const url = `${GENIUS_ENDPOINT}/search?q=${query}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&access_token=${ACCESS_TOKEN}`;

  return helpers.getJSON(url);
};

const getSongInfo = function(state, cb) {
  return getSong(state)
    .then(res => {
      const { response } = res;
      const isSameArtist =
        state.playing.artist.toLowerCase() === response.hits[0].result.primary_artist.name.toLowerCase();

      if (!isSameArtist || response.hits.length === 0) {
        return cb("No annotations found.");
      }
      const { id } = response.hits[0].result;
      const url = `${GENIUS_ENDPOINT}/songs/${id}?access_token=${ACCESS_TOKEN}&text_format=html`;
      return helpers.getJSON(url);
    })
    .catch(err => console.error(err));
};

export default { getSongInfo };
