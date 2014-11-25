import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['side-menu', 'rhci'],

  isUpstream: true,
  emberCliMode: true,

  showMainMenu: Ember.computed.and('isLoggedIn', 'isPasswordSet', 'dontHideMainMenu'),
  showSideMenu: Ember.computed.alias("controllers.side-menu.showSideMenu"),

  isLoggedIn: false,
  isPasswordSet: false,
  dontHideMainMenu: true,

  myModalButtons: [
      Ember.Object.create({title: 'Submit', type: 'primary', clicked:"submit"}),
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'})
  ],

  nameRHCI: Ember.computed.alias("controllers.rhci.nameRHCI"),
  nameRhev: Ember.computed.alias("controllers.rhci.nameRhev"),
  nameOpenStack: Ember.computed.alias("controllers.rhci.nameOpenStack"),
  nameCloudForms: Ember.computed.alias("controllers.rhci.nameCloudForms"),
  nameSatellite: Ember.computed.alias("controllers.rhci.nameSatellite"),

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

    //Submit the modal
    submit: function() {
      Bootstrap.NM.push('Successfully submitted modal', 'success');
      return Bootstrap.ModalManager.hide('myModal');
    },

    //Cancel the modal, we don't need to hide the model manually because we set {..., dismiss: 'modal'} on the button meta data
    cancel: function() {
      return Bootstrap.NM.push('Modal was cancelled', 'info');
    },

    //Show the modal
    show: function() {
      return Bootstrap.ModalManager.show('myModal');
    },

    // show side menu
    toggleSideMenu: function() {
      this.set('showSideMenu', this.toggleProperty('showSideMenu'));
    }

  }
});
