import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['side-menu', 'rhci'],

  nameRHCI: Ember.computed.alias("controllers.rhci.nameRHCI"),
  nameRhev: Ember.computed.alias("controllers.rhci.nameRhev"),
  nameOpenStack: Ember.computed.alias("controllers.rhci.nameOpenStack"),
  nameCloudForms: Ember.computed.alias("controllers.rhci.nameCloudForms"),
  nameSatellite: Ember.computed.alias("controllers.rhci.nameSatellite"),
  nameCapsule: Ember.computed.alias("controllers.rhci.nameCapsule"),
  nameKatello: Ember.computed.alias("controllers.rhci.nameKatello"),

  isForeman: true,
  isKatello: true,
  isDiscovery: true,
  foreman_plugin_bootdisk: false,
  foreman_plugin_pulp: true,

  imgForeman: function() {
    return "assets/foreman-640-210.png";
  }.property(),

  imgKatello: function() {
    return "assets/katello-640-210.png";
  }.property(),

  disableNext: function () {
    return (!(this.get('isKatello') || this.get('isKatello') ));
  }.property('isForeman', 'isKatello')




});
