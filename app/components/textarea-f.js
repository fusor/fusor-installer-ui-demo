import Ember from 'ember';

export default Ember.Component.extend({
  numRows: function () {
    return this.getWithDefault('rows', '3');
  }.property()
});
