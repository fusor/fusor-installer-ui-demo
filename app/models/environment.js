import DS from 'ember-data';

var Environment = DS.Model.extend({
  name: DS.attr('string'),
  label: DS.attr('string'),
  description: DS.attr('string'),
});

Environment.reopenClass({
    FIXTURES: [
       {
          id: 1,
          name: 'Library',
       },
       {
          id: 2,
          name: 'development',
       },
       {
          id: 3,
          name: 'test',
       },
       {
          id: 4,
          name: 'production',
       }
  ]
});

export default Environment;