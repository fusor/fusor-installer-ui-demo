import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['network-config'],
  selectedNetwork:  null,
  net: Ember.computed.alias("controllers.network-config.net"),

  actions: {
    redirectToNetworkRoute: function(net) {
      this.transitionTo('network-config', net);
    }
  }

});
