const getInfo = function(options) {
  function getJSON(url, opts = {}) {
    return fetch(url, opts)
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1/me";
  const info = getJSON(SPOTIFY_ENDPOINT, options);
  const currentlyPlaying = getJSON(`${SPOTIFY_ENDPOINT}/player/currently-playing`, options);
  const recentlyPlayed = getJSON(`${SPOTIFY_ENDPOINT}/player/recently-played?&limit=30`, options);

  return Promise.all([info, currentlyPlaying, recentlyPlayed]);
};

export default { getInfo };
