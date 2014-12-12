import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
  find: function(name, id) {
    // subreddit
    // aww
    //return ajax("http://jm.sat.lab.tlv.redhat.com:3001/api/v2/answers");
    return ajax("http://localhost:3001/api/v2/answers");
      // .then(function(result) {
      //   return result.data.children.map(function(c) {
      //     return {id: c.id,
      //             title: c.data.title,
      //             domain: c.data.domain,
      //             url: c.data.url};
      //   });
      // });
  }
});
