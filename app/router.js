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
      this.resource('configure', function() {
        this.route('new-organization');
        this.route('new-environment');
      });
      this.route('subscriptions');
      this.route('products');
    });
    this.resource('rhev', function() {
      this.resource('hypervisor', function() {
        this.route('discovered-host');
        this.route('existing-host');
        this.route('new-host');
      });
      this.route('engine');
      this.route('networking');
      this.route('storage');
      this.route('rhev-options');
    });
    this.route('openstack');
    this.route('cloudforms');
    this.route('review');
  });

  this.route('rhevIndex');
});

export default Router;
