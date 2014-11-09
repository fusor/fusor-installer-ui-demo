import Ember from 'ember';

export default Ember.ObjectController.extend({
  fields: {},
  actions: {
    cancel: function() {
      this.transitionToRoute('configure');
    },
    createOrganization: function() {
      var self = this;
      var organization = this.store.createRecord('organization', this.get('fields'));
      organization.save().then(function() {
        self.controllerFor('configure').set('selectedOrganization', organization)
        self.transitionToRoute('configure');
      }, function() {
        alert('error');
      });
    }
  }
});
