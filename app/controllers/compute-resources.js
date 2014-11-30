import Ember from 'ember';

export default Ember.Controller.extend({
  foreman_compute_vmware: true,
  foreman_compute_ec2: true,
  foreman_compute_libvirt: true,
  foreman_compute_rackspace: true,
  foreman_compute_gce: true,
  foreman_compute_ovirt: true,
  foreman_compute_openstack: true,

});

