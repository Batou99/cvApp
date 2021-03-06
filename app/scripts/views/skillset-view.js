define(function(require) {
  var  Backbone = require('backbone'),
       template = require('text!templates/skillset.html');
  var SkillsetView = Backbone.View.extend({

    template: _.template(template),

    initialize: function() {
      _.bindAll(this,"render");
      this.model.bind("change", this.render)
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return SkillsetView;
});
