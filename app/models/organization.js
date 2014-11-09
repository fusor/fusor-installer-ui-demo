import DS from 'ember-data';

var Organization = DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string')
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