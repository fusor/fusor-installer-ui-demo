import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  isChecked: function () {
    return (this.get('selectedOrganzation') === this.get('org.name'));
  }.property('selectedOrganzation', 'org.name'),

  showCheckMark: function () {
    if (this.get('isChecked')) {
      return '✔';
    }
  }.property('isChecked'),

  classNameBindings: ['color'],
  color: null,
  highlight: function() {
    return this.get('color');
  },

  mouseEnter: function(event) {
    //if (this.get('color')) {
    //} else {
      this.set('color', 'yellow');
    //}
  },

  mouseLeave: function(event) {
    //if (this.get('color') === 'red'){
    //} else {
      this.set('color', null);
    //alert("mouseLeave!");
    //}
  },
  click: function(event) {
    this.set('color', 'red');
    var org = this.get('org');
    var org_name = org.get('name');

    this.set('selectedOrganzation', org_name);
  },
});
