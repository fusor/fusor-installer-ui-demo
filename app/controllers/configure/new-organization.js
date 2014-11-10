import Ember from 'ember';

export default Ember.ObjectController.extend({
  fields: {},
  actions: {
    cancel: function() {
      this.transitionTo('configure');
    },
    createOrganization: function() {
      var self = this;
      var organization = this.store.createRecord('organization', this.get('fields'));
      organization.save().then(function() {
        self.controllerFor('configure').set('selectedOrganization', organization);
        self.transitionTo('configure');
      }, function() {
        alert('error');
      });
    }
  }
});
