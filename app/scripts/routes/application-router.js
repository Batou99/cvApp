define(function(require) {
  var Backbone = require('backbone'),
      HeaderView = require('views/header-view'),
      PersonView = require('views/person-view'),
      SkillsetView = require('views/skillset-view'),
      SkillsView = require('views/skills-view'),
      CvModel = require('models/cv-model'),
      PersonModel = require('models/person-model');
    
  var ApplicationRouter = Backbone.Router.extend({
    router: {
      '': 'home'
    },
    start: function() {
      Backbone.history.start();
    },

    initialize: function() {
      var cv= new CvModel({_id: 1});
      cv.on('change', this.loadCv);
      cv.fetch();
    },
    loadCv: function(model,options) {
      model.fetchRelated('person');
      var headerView = new HeaderView({model: model});
      var personView = new PersonView({model: model.get('person')});
      var skillsetView = new SkillsetView({model: model});
      var skillsView = new SkillsView({model: model});
      $('#header').html(headerView.render().el);
      $('#header').append(personView.render().el);
      $('.marketing').html(skillsetView.render().el);
      $('.skills').html(skillsView.render().el);
    },

    home: function() {

    }

  });
  
  var initialize = function() {
    var router = new ApplicationRouter();
    router.start();
  };
  return {
    initialize: initialize
  }
});
