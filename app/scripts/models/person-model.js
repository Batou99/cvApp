define(function(require) {
  var  Backbone = require('backbone');
                  require('backbone-relational');
  var PersonModel = Backbone.RelationalModel.extend({
    defaults: {
      _id: 0,
      name: 'Unknown',
      surname: 'Unknown',
      email: 'unknown@none.com',
      skills: {},
      languages: {},
      jobs: {}
    },

    url: function() { return '/api/people/' + this.get('_id') + '.json' },
    idAttribute: '_id'
  });
  return PersonModel;
});
