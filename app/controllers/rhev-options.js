import Ember from 'ember';

export default Ember.Controller.extend({
  applicationModes: ['Both', 'Virt', 'Gluster'],
  applicationModes2: [
       {
          id: 1,
          name: 'Both',
       },
       {
          id: 2,
          name: 'Virt',
       },
       {
          id: 3,
          name: 'Gluster',
       }
     ]
});
