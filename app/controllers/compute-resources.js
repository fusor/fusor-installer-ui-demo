import Ember from 'ember';

export default Ember.ObjectController.extend({
  foreman_compute_vmware: Ember.computed.alias("foreman::compute::vmware"),
  foreman_compute_ec2: Ember.computed.alias("foreman::compute::ec2"),
  foreman_compute_libvirt: Ember.computed.alias("foreman::compute::libvirt"),
  foreman_compute_rackspace: Ember.computed.alias("foreman::compute::rackspace"),
  foreman_compute_gce: Ember.computed.alias("foreman::compute::gce"),
  foreman_compute_ovirt: Ember.computed.alias("foreman::compute::ovirt"),
  foreman_compute_openstack: Ember.computed.alias("foreman::compute::openstack"),
});

