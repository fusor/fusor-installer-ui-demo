import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('side-menu').set('uxNotes', 'where install \
    adfadf \
    **dfadf** notes');
  }
});
