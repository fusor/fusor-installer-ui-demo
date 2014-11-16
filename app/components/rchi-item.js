import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isChecked:rhci-item-selected:rhci-item-deselected'],

  click: function(event) {
    this.set('isChecked', this.toggleProperty('isChecked'));
  },


});
