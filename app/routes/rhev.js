import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    this.controllerFor('side-menu').set('uxNotes', 'RHEV notes');
  }
});
