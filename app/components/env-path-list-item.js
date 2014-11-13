import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['path-list-item', 'list_item_active'],

  isChecked: function () {
    var env_name = this.get('name');
    return (this.get('selectedEnvironment') === env_name);
  }.property('selectedEnvironment', 'name'),

  showCheckMark: function () {
    if (this.get('isChecked')) {
      return '✔';
    }
  }.property('isChecked'),

  classNameBindings: ['bgColor'],
  bgColor: function () {
    if (this.get('isChecked')) {
      return 'blue';
    } else {
      return null;
    }
  }.property('isChecked'),


});
