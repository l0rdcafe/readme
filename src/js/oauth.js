const authSignIn = function() {
  const CLIENT_ID = "f8df77a3e85c4e49b6e702e8be74f262";
  const scopes = encodeURIComponent("user-read-currently-playing user-read-recently-played");
  const redirectURI = encodeURIComponent("http://localhost:8080");
  const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=${scopes}&redirect_uri=${redirectURI}&show_dialog=true`;
  window.location = url;
};

export default { authSignIn };
