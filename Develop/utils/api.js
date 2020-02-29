const axios = require("axios");

const api = {
  getUser(username) {
    axios
    .get(`https://api.github.com/users/${username}`)
    .then(function(res) {
      console.log(res.data.avatar_url);
      console.log(res.email);
      
    });
  }
};

module.exports = api;



 






// .then(({username}) => { //query Github API for user info and repos
//   const repoQueryUrl = `https://api.github.com/users/${username}/repos`;
//   const accQueryUrl = `https://api.github.com/users/${username}`;
//   console.log("API queried");