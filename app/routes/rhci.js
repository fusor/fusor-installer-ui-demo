import Ember from 'ember';

export default Ember.Route.extend({

  activate: function() {
    var note = "* This is the first screen displayed after user changes password. On subsequent logins, user goes to Foreman dashboard \n" +
               "* User checks the products she wants to install. All products are checked by default \n" +
               "* The Select button is enabled by default because all products are checked by default (meaning that the \
combination works). The Select button becomes \
disabled if the user doesn’t have at least RHEV or \
OpenStack and CloudForms checked. When the user \
clicks the Select button, she is taken to the first step \
in the installation wizard \n" +
               "* If the user unchecks a product, that product‘s \
screens will not show in the wizard workflow nor \
does the product show in the step indicator at the \
top of the wizard \n" +
               "* If the user cancels by clicking the Cancel button or \
the X in the upper right, she is taken to the RHCI In- \
staller > Deployments page. No deployment is creat- \
ed in the Deployments table \n";

    var todo = "* I change 'Select' to 'Next'. Is this OK?";

    this.controllerFor('side-menu').set('uxNotes', note);
    this.controllerFor('side-menu').set('uxTodos', todo);
  },

  deactivate: function() {
    this.controllerFor('side-menu').set('uxNotes', 'none');
  }

});
