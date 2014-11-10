import Ember from 'ember';

export default Ember.ObjectController.extend({
    isSatellite: true,
    isRhev: true,
    isOpenStack: true,
    isCloudFormsOnRhev: true,
    isCloudFormsOnOpenstack: false,
    toggleCF: function(){
        if (this.get('isCloudFormsOnOpenstack')) {
          this.set('isCloudFormsOnRhev', false);
        }
    }.observes('isCloudFormsOnOpenstack'),
    watchFoo222: function(){
        if (this.get('isCloudFormsOnRhev')) {
          this.set('isCloudFormsOnOpenstack', false);
        }
    }.observes('isCloudFormsOnRhev'),


});
