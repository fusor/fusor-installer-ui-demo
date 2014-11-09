import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
});
var Environment = DS.Model.extend({
  name: DS.attr('string'),
});

Environment.reopenClass({
    FIXTURES: [
        {
          id: 1,
          name: 'development',
       },
       {
          id: 2,
          name: 'test',
       },
       {
          id: 3,
          name: 'production',
       }
  ]
});

export default Environment;