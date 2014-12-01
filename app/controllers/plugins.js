import Ember from 'ember';

export default Ember.ObjectController.extend({

  ovirt_provision: Ember.computed.alias("foreman::plugin::ovirt_provision"),
  discovery: Ember.computed.alias("foreman::plugin::discovery"),
  foreman_cli: Ember.computed.alias("foreman::plugin::foreman_cli"),
  chef: Ember.computed.alias("foreman::plugin::chef"),
  default_hostgroup: Ember.computed.alias("foreman::plugin::default_hostgroup"),
  tasks: Ember.computed.alias("foreman::plugin::tasks"),
  bootdisk: Ember.computed.alias("foreman::plugin::bootdisk"),
  templates: Ember.computed.alias("foreman::plugin::templates"),
  hooks: Ember.computed.alias("foreman::plugin::hooks"),
  puppetdb: Ember.computed.alias("foreman::plugin::puppetdb"),
  setup: Ember.computed.alias("foreman::plugin::setup"),
});
