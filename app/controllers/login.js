import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  actions: {
    signIn: function() {
      this.controllerFor('application').set('isLoggedIn', true);
      if(this.controllerFor('application').get('isPasswordSet')) {
        this.transitionTo('rhci');
      } else {
         this.transitionTo('setpassword');
      }
    },
    signOut: function() {
      this.controllerFor('application').set('isLoggedIn', false);
      this.transitionTo('login');
    }
  }
});
