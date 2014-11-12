import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  showCheckMark: function () {
    return '✔';
  }.property(),

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
  },
});
