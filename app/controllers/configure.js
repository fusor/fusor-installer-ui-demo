import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['new-organization', 'organization', 'organizations', 'configure/new-environment'],

  fields: Ember.computed.alias("controllers.new-organization.fields"),

  selectedEnvironment: "development",
  selectedOrganzation: "Default_Organization",

  rhciModalButtons: [
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'}),
      Ember.Object.create({title: 'Create', clicked:"createOrganization", type: 'primary'})
  ],

  rhciNewEnvButtons: [
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'}),
      Ember.Object.create({title: 'Create', clicked:"createEnvironment", type: 'primary'})
  ],
  // init: function() {
  //   this.set('selectedOrganization', this.get('defaultOrganization'));
  //   this._super();
  // },

  actions: {
    // cancel: function() {
    //   //nothing needed here alert('cancel');
    // },
    createOrganization: function() {
      //if (this.get('fields.isDirty')) {
        var organization = this.store.createRecord('organization', this.get('fields'));
        this.set('selectedOrganzation', organization.get('name'));
        this.set('fields',{});
      //}
      return Bootstrap.ModalManager.hide('newOrganizationModal');
    },
    createEnvironment: function() {
      //if (this.get('fields.isDirty')) {
        var environment = this.store.createRecord('environment', this.get('fields'));
        this.set('selectedEnvironment', environment.get('name'));
        this.set('fields',{});
      //}
      return Bootstrap.ModalManager.hide('newEnvironmentModal');
    }

  }

});
