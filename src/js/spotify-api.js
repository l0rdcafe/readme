const getJSON = function(url, options = {}) {
  return fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error(err));
};

const getInfo = function(token) {
  const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  return getJSON(SPOTIFY_ENDPOINT, options);
};

export default { getInfo };
