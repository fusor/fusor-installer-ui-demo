import Ember from 'ember';

export default Ember.ObjectController.extend({

  dbTypes: ["postgresql", "mysql", 'sqlite3'],
  repoTypes: ["stable", "rc", "nightly"],

  // app_root: Ember.computed.alias("this.foreman.app_root"),
  // authentication: Ember.computed.alias("this.foreman.authentication"),
  // configure_epel_repo: Ember.computed.alias("this.foreman.configure_epel_repo"),
  // configure_scl_repo: Ember.computed.alias("this.foreman.configure_scl_repo"),
  // db_adapter: Ember.computed.alias("this.foreman.db_adapter"),
  // db_username: Ember.computed.alias("this.foreman.db_username"),
  // custom_repo: Ember.computed.alias("this.foreman.custom_repo"),

});
