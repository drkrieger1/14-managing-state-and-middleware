'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  // its called when the user clicks the about link and that gets intersepted by routs.js which calls on thois ->then the aboutController.index is run and it will select the about element in the dom, then it will show the repoview.index and hid the siblings. request repo is in repos.js and the call back of repoView is repoview.js
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
