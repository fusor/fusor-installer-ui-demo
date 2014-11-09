import Ember from 'ember';

export default Ember.Controller.extend({
  needs:['configure/new-organization'],
  selectedOrganization: Ember.computed.alias("controllers.configure/new-organization.createdOrganization"),
  selectedEnvironment: Ember.computed.alias("controllers.configure/new-environment.createdEnvironment"),
});
