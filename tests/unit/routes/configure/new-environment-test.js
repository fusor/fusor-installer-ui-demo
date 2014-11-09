import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:configure/new-environment', 'ConfigureNewEnvironmentRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});
