const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1/me";

const getJSON = function(url, options = {}) {
  return fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error(err));
};

const getInfo = function(options) {
  return getJSON(SPOTIFY_ENDPOINT, options);
};

const getCurrentlyPlaying = function(options) {
  return getJSON(`${SPOTIFY_ENDPOINT}/player/currently-playing`, options);
};

export default { getInfo, getCurrentlyPlaying };
