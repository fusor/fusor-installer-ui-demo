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
    controller.set('fqdn', 'dhcp-22-172.tlv.redhat.com');
  },

  actions: {
    notImplemented: function() {
      alert('This link is not implemented in the fusor-demo prototype');
    },
    willImplement: function() {
      alert('Check back soon. This will be implemented soon.');
    },

    // OLD MODAL CODE MANUALLY NOT USING BS EMBER
    // showModal: function(controller_name) {
    //   this.render(controller_name, {
    //     into: 'application',
    //     outlet: 'modal'
    //   });
    // },
    // removeModal: function() {
    //   this.disconnectOutlet({
    //     outlet: 'modal',
    //     parentView: 'application'
    //   });
    // },

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
    showModal: function(name) {
      return Bootstrap.ModalManager.show(name);
    },

    //Show the modal
    showRHCIModal: function() {
      return Bootstrap.ModalManager.show('newRHCI');
    },

    //ddd
    ddd: function() {
      alert('ddd');
    },

  }
});
