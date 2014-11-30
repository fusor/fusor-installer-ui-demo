import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['side-menu', 'rhci'],

  nameRHCI: Ember.computed.alias("controllers.rhci.nameRHCI"),
  nameRhev: Ember.computed.alias("controllers.rhci.nameRhev"),
  nameOpenStack: Ember.computed.alias("controllers.rhci.nameOpenStack"),
  nameCloudForms: Ember.computed.alias("controllers.rhci.nameCloudForms"),
  nameSatellite: Ember.computed.alias("controllers.rhci.nameSatellite"),
  nameCapsule: Ember.computed.alias("controllers.rhci.nameCapsule"),
  nameKatello: Ember.computed.alias("controllers.rhci.nameKatello"),


});
