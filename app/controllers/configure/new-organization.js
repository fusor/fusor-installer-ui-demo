import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs:['configure'],
  createdOrganization: {},
  fields: {},
  actions: {
    cancel: function() {
      alert('cancel');
      // this.controllerFor('application').set('isLoggedIn', true);
      // if(this.controllerFor('application').get('isPasswordSet')) {
      //   this.transitionTo('rhci');
      // } else {
      //    this.transitionTo('setpassword');
      // }
    },
    createOrganization: function() {
      var self = this;
      //console.log(this);
      //debugger
      var organization = this.store.createRecord('organization', this.get('fields'));
      organization.save().then(function() {
        self.set('createdOrganization', organization)
        self.transitionToRoute('configure');
      }, function() {
        alert('error');
      });
    }
  }
});
