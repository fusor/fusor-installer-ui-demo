import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('organizations', this.store.find('organization'));
    controller.set('environments', this.store.find('environment'));
  },

  actions: {
    cancel: function() {
      alert('cancel');
    },
    createOrganization: function() {
      var organization = this.controllerFor('configure/new-organization');
      var self = this;
//      var organization = this.store.createRecord('organization', organization.get('fields'));
      organization.save().then(function() {
        self.transitionTo('configure');
      }, function() {
        alert('error');
      });
    }
  }
});
