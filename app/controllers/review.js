import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['subscriptions'],

  disableTabInstallation: Ember.computed.alias("controllers.subscriptions.disableNext"),
  disableTabProgress: true

});
