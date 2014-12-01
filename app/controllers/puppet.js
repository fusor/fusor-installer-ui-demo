import Ember from 'ember';

export default Ember.ObjectController.extend({
  puppetModes: ['cron', 'service'],
  apiVersions: ['v1', 'v2'],
  configTypes: ['active_record', 'puppetdb'],
  useStoreconfigs: false

});
