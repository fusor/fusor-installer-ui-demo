import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('organizations', this.store.find('organization'));
  },
  activate: function() {
    this.controllerFor('side-menu').set('etherpadName', '41'); //route-satellite
  },

  deactivate: function() {
    this.controllerFor('side-menu').set('etherpadName', '');
  }
});
