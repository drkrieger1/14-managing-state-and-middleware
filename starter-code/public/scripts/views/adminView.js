'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
      // COMMENT DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
      // This is just using our handlebars template to display how many words each author has written
      // and appending it to the .author-stats section.
      // It is being called below in the same file as a callback for app.Article.fetchAll
      // In the following lines, it calls the method app.Article.numWordsAll to count the total number of words from all articles -- this function lives in article.js
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
