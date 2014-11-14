import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('environments', this.store.find('environment'));
    controller.set('newenvs', this.store.find('newenv'));
  },

});
