import Ember from 'ember';

export default Ember.Component.extend({
  labelSize: 'col-md-2',
  inputSize: 'col-md-4',
  labelClassSize: function () {
    return this.getWithDefault('labelSize', 'col-md-2');
  }.property(),
  inputClassSize: function () {
    return this.getWithDefault('inputSize', 'col-md-4');
  }.property()
});
