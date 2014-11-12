import Ember from 'ember';

export default Ember.View.extend({
  doRhciModal: function() {
    this.send('showModal', 'new-rhci-modal');
  }.on('didInsertElement'),

  actions: {
    showModal: function() {
      //alert('dddd'); ///
      this.render('new-rhci-modal', {
        into: 'application',
        outlet: 'modal'
      });
    }
  }

});
