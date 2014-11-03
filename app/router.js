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

  this.route('rhci');
  this.route('deployments');

  this.resource('deployment', function() {
    this.resource('satellite', function() {
      this.route('configure');
      this.route('subscriptions');
      this.route('products');
    });
    this.route('rhev');
    this.route('openstack');
    this.route('cloudforms');
    this.route('review');
  });

});

export default Router;
