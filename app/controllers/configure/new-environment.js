import Ember from 'ember';

export default Ember.ObjectController.extend({
  fields: {},
  labelName: function() {
    return this.get('fields.name');
  }.property('fields.name'),

  actions: {
    cancel: function() {
      this.transitionToRoute('configure');
    },
    createEnvironment: function() {
      var self = this;
      var environment = this.store.createRecord('environment', this.get('fields'));
      environment.save().then(function() {
        self.controllerFor('configure').set('selectedEnvironment', environment);
        self.transitionToRoute('configure');
      }, function() {
        alert('error');
      });
    }
  }
});
