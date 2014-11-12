import Ember from 'ember';

export default Ember.Controller.extend({

  fields: {},
  labelName: function() {
    if(this.get('fields.name')) {
      return this.get('fields.name').underscore();
    }
  }.property('fields.name'),

  actions: {
    cancel: function() {
      this.transitionTo('configure');
    },
    createEnvironment: function() {
      var self = this;
      var environment = this.store.createRecord('environment', this.get('fields'));
      environment.save().then(function() {
        self.controllerFor('configure').set('selectedEnvironment', environment);
        self.transitionTo('configure');
      }, function() {
        alert('error');
      });
    }
  }
});
