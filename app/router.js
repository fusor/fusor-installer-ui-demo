import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  // log when Ember generates a controller or a route from a generic class
  LOG_ACTIVE_GENERATION: true,
  // log when Ember looks up a template or a view
  LOG_VIEW_LOOKUPS: true
});

Router.map(function() {
  this.route('login');
  this.route ('setpassword');

  this.route('rhci', { path: '/deployments/new' });
  this.route('deployments');

  this.resource('deployment', function() {

    this.resource('satellite', function() {
      this.resource('configure');
      this.resource('configure-organization');
      this.resource('configure-environment');
      this.route('subscriptions');
      this.route('products');
    });

    this.resource('rhev', function() {
      this.resource('rhev-setup', { path: 'setup' });
      this.resource('hypervisor', function() {
        this.route('discovered-host');
        this.route('existing-host');
        this.route('new-host');
      });
      this.resource('engine', function() {
        this.route('hypervisor');
        this.route('discovered-host');
        this.route('existing-host');
        this.route('new-host');
      });
      this.resource('networking');
      this.resource('storage');
      this.resource('rhev-options', { path: 'configuration' });
    });

    this.route('openstack');
    this.resource('cloudforms', function() {
      this.resource('where-install');
    });
    this.route('review');
  });


  this.resource('hostgroups', function() {
    this.resource('hostgroup', { path: '/:hostgroup_id' }, function() {
      this.route('edit');
    });
  });


  this.route('hostgroup/edit');
});

export default Router;
