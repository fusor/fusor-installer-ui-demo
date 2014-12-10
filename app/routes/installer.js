import Ember from 'ember';
import InstallerAdapter from 'fusor-demo/adapters/installer';

export default Ember.Route.extend({


  model: function() {
    //return {id: params.subreddit_id, hello: 'world'};
    var adapter = InstallerAdapter.create();
    return adapter.find('installer');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    this.controllerFor('application').set('dontHideMainMenu', false);
    this.controllerFor('application').set('hideUserMenu', true);
  }

});
