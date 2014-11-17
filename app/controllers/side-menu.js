import Ember from 'ember';

export default Ember.Controller.extend({
  showSideMenu: true,
  uxDefaultNote: 'NOTE: Please write notes on etherpad, since this pad will note save anything. Go to http://rhci.pad.engineering.redhat.com/wireframe-mtg-10-30-2014',
  uxNotes: null, //this should be overwritten by controller
  uxNotesDisplay: function () {
    return this.get('uxDefaultNote') + ' ' + this.get('uxNotes');
  }.property('uxNotes'),

  actions: {
    toggleSideMenu: function() {
      this.set('showSideMenu', this.toggleProperty('showSideMenu'));
    }
  }
});
