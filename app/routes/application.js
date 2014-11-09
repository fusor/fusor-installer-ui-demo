import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    // UNCOMMENT when deploying to openshift

    // if (this.controllerFor('application').get('showMainMenu')) {
    //   this.transitionTo('rhci');
    // } else if (!this.controllerFor('application').get('isLoggedIn')) {
    //   this.transitionTo('login');
    // } else {
    //   this.transitionTo('setpassword');
    // }
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    // change isLoggedIn and isLoggedIn back to FALSE when deploying to openshift
    controller.set('isLoggedIn', true);
    controller.set('isPasswordSet', true);
    controller.set('dontHideMainMenu', true);
  },

  actions: {
    notImplemented: function() {
      alert('This link is not implemented in the fusor-demo prototype');
    },
    willImplement: function() {
      alert('Check back soon. This will be implemented soon.');
    }
  }

});
