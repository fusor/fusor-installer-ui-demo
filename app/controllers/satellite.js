import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['subscriptions'],
  disableContentTab: Ember.computed.alias("controllers.subscriptions.disableNext"),
});
