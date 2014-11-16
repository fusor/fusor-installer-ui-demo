import Ember from 'ember';

export default Ember.ObjectController.extend({
  isRhev: true,
  isOpenStack: true,
  isCloudForms: true,

  disableNext: function () {
    return (!(this.get('isRhev') || this.get('isOpenStack') || this.get('isCloudForms')));
  }.property('isRhev', 'isOpenStack', 'isCloudForms')
});
