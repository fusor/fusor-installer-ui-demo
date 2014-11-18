import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('side-menu').set('etherpadName', '54');
  },

  deactivate: function() {
    this.controllerFor('side-menu').set('etherpadName', '');
  }
});
