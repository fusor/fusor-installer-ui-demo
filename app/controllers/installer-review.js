import Ember from 'ember';

export default Ember.ObjectController.extend({

  keys: function() {
    return Object.keys(this.model);
  }.property(),

  keyvalues: function(){
    var oArray = [];
    var keys = this.get('keys');

    for (var k in keys) {
      oArray.push({
        key: k,
        value: this.get(k)
      });
    }
    return oArray;
  }.property('keys', 'model')

  //   return oArrayl

  //   var keys = this.get('keys');

  //   for(var key in keys) {
  //     if(keys.hasOwnProperty(key) && key !== "toString"){
  //       a.push({key: key, value: model.get(key)});
  //     }
  //   }

  //   return a;
  // }.property()


});
