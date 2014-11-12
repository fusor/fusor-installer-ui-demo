import Ember from 'ember';

export default Ember.Controller.extend({

  showMainMenu: Ember.computed.and('isLoggedIn', 'isPasswordSet', 'dontHideMainMenu'),

  isLoggedIn: false,
  isPasswordSet: false,
  dontHideMainMenu: true,

  actions: {
    signIn: function() {
      this.controllerFor('application').set('isLoggedIn', true);
      var cp = this.controllerFor('application').get('isPasswordSet');
      if(cp) {
        this.transitionTo('rhci');
      } else {
        this.transitionTo('setpassword');
      }
    },
    signOut: function() {
      this.controllerFor('application').set('isLoggedIn', false);
      this.transitionTo('login');
    },

  }
});
