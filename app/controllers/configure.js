import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['new-organization', 'organization', 'organizations'],

  fields: Ember.computed.alias("controllers.new-organization.fields"),

  selectedEnvironment: null,
  selectedOrganzation: "Default_Organization",

  rhciModalButtons: [
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'}),
      Ember.Object.create({title: 'Create', clicked:"createOrganization", type: 'primary'})
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
    }
  }

});
