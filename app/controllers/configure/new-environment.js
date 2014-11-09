import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs:['configure'],
  createdEnvironment: {},
  fields: {},
  actions: {
    cancel: function() {
      alert('cancel');
    },
    createOrganization: function() {
      var self = this;
      var environment = this.store.createRecord('environment', this.get('fields'));
      environment.save().then(function() {
        self.set('createdEnvironment', environment)
        self.transitionToRoute('configure');
      }, function() {
        alert('error');
      });
    }
  }
});
