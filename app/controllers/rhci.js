import Ember from 'ember';

export default Ember.ObjectController.extend({
    isSatellite: true,
    isRhev: true,
    isOpenStack: true,
    isCloudFormsOnRhev: true,
    isCloudFormsOnOpenstack: false,

    isCloudForms: function() {
      return (this.get('isCloudFormsOnOpenstack') || this.get('isCloudFormsOnRhev'));
    }.property('isCloudFormsOnOpenstack', 'isCloudFormsOnRhev'),

    toggleIfOnOpenstack: function(){
        if (this.get('isCloudFormsOnOpenstack')) {
          this.set('isCloudFormsOnRhev', false);
        }
    }.observes('isCloudFormsOnOpenstack'),

    toggleIfOnRhev: function(){
        if (this.get('isCloudFormsOnRhev')) {
          this.set('isCloudFormsOnOpenstack', false);
        }
    }.observes('isCloudFormsOnRhev')


});
