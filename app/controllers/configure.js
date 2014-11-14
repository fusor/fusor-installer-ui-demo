import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['new-organization', 'organization', 'organizations', 'new-environment', 'satellite/index'],

  fields: Ember.computed.alias("controllers.new-organization.fields"),
  fields2: Ember.computed.alias("controllers.new-environment.fields2"),

  deploymentName: Ember.computed.alias("controllers.satellite/index.name"),
  defaultOrgName: function () {
    return this.getWithDefault('defaultOrg', this.get('deploymentName'));
  }.property(),

  selectedEnvironment: "Development",
  selectedOrganzation: "Default_Organization",

  rhciModalButtons: [
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'}),
      Ember.Object.create({title: 'Create', clicked:"createOrganization", type: 'primary'})
  ],

  rhciNewEnvButtons: [
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'}),
      Ember.Object.create({title: 'Create', clicked:"createEnvironment", type: 'primary'})
  ],

  labelName: function() {
    if(this.get('fields.name')) {
      return this.get('fields.name').underscore();
    }
  }.property('fields.name'),

  hasNewEnvs: function() {
    return (this.get('newenvs').get('length') > 0);
  }.property('newenvs.@each.[]'),

  actions: {
    // cancel: function() {
    //   //nothing needed here alert('cancel');
    // },
    createOrganization: function() {
      //if (this.get('fields.isDirty')) {
        this.set('fields.name', this.get('defaultOrgName'));
        var organization = this.store.createRecord('organization', this.get('fields'));
        this.set('selectedOrganzation', organization.get('name'));
        this.set('fields',{});
      //}
      return Bootstrap.ModalManager.hide('newOrganizationModal');
    },
    createEnvironment: function() {
      //if (this.get('fields.isDirty')) {
        var environment = this.store.createRecord('newenv', this.get('fields2'));
        this.set('selectedEnvironment', environment.get('name'));
        this.set('fields2',{});
      //}
      return Bootstrap.ModalManager.hide('newEnvironmentModal');
    }

  }

});
