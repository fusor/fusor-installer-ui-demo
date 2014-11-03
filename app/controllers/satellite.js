import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['satellite/subscriptions'],
  disableContentTab: Ember.computed.alias("controllers.satellite/subscriptions.disableNext"),
});
