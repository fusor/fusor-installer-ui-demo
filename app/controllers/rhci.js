import Ember from 'ember';

export default Ember.ObjectController.extend({
  isRhev: true,
  isOpenStack: true,
  isCloudForms: true,

  doRhciModal: function() {
    this.send('showModal');
  }.on('init'),

  actions: {
    showModal: function() {
      alert('dddd');
      // this.render('new-rhci-modal', {
      //   into: 'application',
      //   outlet: 'modal'
      // });
    }
  }

});
