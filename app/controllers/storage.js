import Ember from 'ember';

export default Ember.Controller.extend({
  storageType: 'NFS',
  isNFS: function() {
    return (this.storageType === 'NFS');
  }.property('storageType')
});
