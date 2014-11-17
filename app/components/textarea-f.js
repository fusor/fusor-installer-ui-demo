import Ember from 'ember';

export default Ember.Component.extend({
  numRows: function () {
    return this.getWithDefault('rows', '');
  }.property(),
  numCols: function () {
    return this.getWithDefault('cols', '');
  }.property(),
});
