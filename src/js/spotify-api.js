import helpers from "./helpers";

const getInfo = function(options) {
  const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1/me";
  const info = helpers.getJSON(SPOTIFY_ENDPOINT, options);
  const currentlyPlaying = helpers.getJSON(`${SPOTIFY_ENDPOINT}/player/currently-playing`, options);

  return Promise.all([info, currentlyPlaying]);
};

const getSongStats = function(id, options) {
  const SPOTIFY_ENDPOINT = `https://api.spotify.com/v1/audio-features/${id}`;
  return helpers.getJSON(SPOTIFY_ENDPOINT, options);
};

export default { getInfo, getSongStats };
