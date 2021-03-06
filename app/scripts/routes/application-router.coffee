define (require) ->
  Backbone = require('backbone')
  HeaderView = require('views/header-view')
  PersonView = require('views/person-view')
  SkillsetView = require('views/skillset-view')
  SkillsView = require('views/skills-view')
  CvModel = require('models/cv-model')
  PersonModel = require('models/person-model')
    
  class ApplicationRouter extends Backbone.Router
    router:
      '': 'home'
    start: ->
      Backbone.history.start()

    initialize: ->
      cv= new CvModel({_id: 1})
      cv.on('change', this.loadCv)
      cv.fetch()
    loadCv: (model,options) ->
      headerView = new HeaderView({model: model})
      personModel = new PersonModel(model.get('person'))
      personView = new PersonView({model: personModel})
      skillsetView = new SkillsetView({model: model})
      skillsView = new SkillsView({model: model})
      $('#header').html(headerView.render().el)
      $('#header').append(personView.render().el)
      $('.marketing').html(skillsetView.render().el)
      $('.skills').html(skillsView.render().el)
