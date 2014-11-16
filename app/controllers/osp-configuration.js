import Ember from 'ember';

export default Ember.Controller.extend({
  tenantType: 'vxlan',
  glanceBackend: 'local',
  corePlugin: 'ml2'
});
