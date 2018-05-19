import helpers from "./helpers";

const getInfo = function(options) {
  const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1/me";
  const info = helpers.getJSON(SPOTIFY_ENDPOINT, options);
  const currentlyPlaying = helpers.getJSON(`${SPOTIFY_ENDPOINT}/player/currently-playing`, options);
  const recentlyPlayed = helpers.getJSON(`${SPOTIFY_ENDPOINT}/player/recently-played?&limit=10`, options);

  return Promise.all([info, currentlyPlaying, recentlyPlayed]);
};

export default { getInfo };
