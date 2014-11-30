import Ember from 'ember';

export default Ember.ObjectController.extend({

  app_root: Ember.computed.alias("this.foreman.app_root"),
  authentication: Ember.computed.alias("this.foreman.authentication"),
  configure_epel_repo: Ember.computed.alias("this.foreman.configure_epel_repo"),
  db_adapter: Ember.computed.alias("this.foreman.db_adapter"),
  db_username: Ember.computed.alias("this.foreman.db_username"),

});
