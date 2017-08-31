'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // COMMENT DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function first calls the ui function to clear out the ul items, and in its place, it is appending the repos from the user's github.
  // It is being called in aboutController, when the user clicks on the about link
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
