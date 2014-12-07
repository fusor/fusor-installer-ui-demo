import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',

  isChecked: function () {
    var net = this.get('net');
    var interface_name = net.get('interface_name');
    return (this.get('selectedNetwork') == interface_name);
  }.property('selectedNetwork', 'net'),

  showCheckMark: function () {
    if (this.get('isChecked')) {
      return '✔';
    }
  }.property('isChecked'),

  classNameBindings: ['bgColor', 'fontColor'],
  bgColor: function () {
    if (this.get('isChecked')) {
      return 'blue';
    } else {
      return null;
    }
  }.property('isChecked'),

  fontColor: function () {
    if (this.get('isChecked')) {
      return 'fontwhite';
    } else {
      return null;
    }
  }.property('isChecked'),

  click: function(event) {
    var net = this.get('net');
    var interface_name = net.get('interface_name');
    this.set('selectedNetwork', interface_name);
  },

});
