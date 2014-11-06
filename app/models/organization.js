import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string')
});
var Organization = DS.Model.extend({
  name: DS.attr('string'),
  state_time: DS.attr('string'),
  duration: DS.attr('string'),
  size: DS.attr('string'),
  result: DS.attr('string'),
});

Organization.reopenClass({
    FIXTURES: [
        {
          id: 1,
          name: 'default_organization',
          title: 'default_organization',
       },
       {
          id: 2,
          name: 'engineering',
          title: 'engineering',
       },
       {
          id: 3,
          name: 'qa',
          title: 'qa',
       }
  ]
});

export default Organization;