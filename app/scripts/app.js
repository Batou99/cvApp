define(function(require) {
  var Router = require('cs!routes/application-router');

  var startRouter = function() {
    Router.initialize()
  };
  return {
    initialize: startRouter
  }
});
