'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function is issuing $.get request to retrieve the github repos of the specified user.
  // It is being called in aboutController.js (when the client clicks on the about link)
  // It would then call the callback function that is specified when repos.requestRepos is called.
  // In this case, it is calling app.repoView.index which lives in repoView.js (to display all the repos to the dom)
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
