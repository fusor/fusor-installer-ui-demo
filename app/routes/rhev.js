import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
  },

  activate: function() {
    this.controllerFor('side-menu').set('uxNotes', 'RHEV notes 3333333');
  }

});
