import DS from 'ember-data';

var Host = DS.Model.extend({
  name: DS.attr('string'),
  hostgroup: DS.attr('string'),
  mac: DS.attr('string'),
  domain: DS.attr('string'),
  subnet: DS.attr('string'),
  operatingsystem: DS.attr('string'),
  environment: DS.attr('string'),
  model: DS.attr('string'),
  location: DS.attr('string'),
  organization: DS.attr('string')
});

Host.reopenClass({
    FIXTURES: [
       // {
       //    id: 1,
       //    name: 'dhcp-3-100.example.com',
       //    hostgroup: 'RHEV Self Hosted Engine',
       //    mac: 'aa:bb:cc:dd:ee',
       //    domain: 'example.com',
       //    subnet: '10.0.3.100',
       //    operatingsystem: 'Fedora 19',
       //    environment: 'Development',
       //    location: 'Tel Aviv',
       //    organization: 'Default_Organization',
       //    type: 'Host::Managed'
       // },
       // {
       //    id: 2,
       //    name: 'dhcp-3-102.example.com',
       //    hostgroup: 'RHEV Self Hosted Engine',
       //    mac: 'aa:bb:aa:dd:ee',
       //    domain: 'example.com',
       //    subnet: '10.0.3.102',
       //    operatingsystem: 'Fedora 19',
       //    environment: 'Development',
       //    location: 'Tel Aviv',
       //    organization: 'Default_Organization',
       //    type: 'Host::Managed'
       // },
       // {
       //    id: 3,
       //    name: 'dhcp-3-103.example.com',
       //    hostgroup: 'RHEV Host',
       //    mac: 'ee:bb:aa:dd:ee',
       //    domain: 'example.com',
       //    subnet: '10.0.3.103',
       //    operatingsystem: 'Fedora 19',
       //    environment: 'Development',
       //    location: 'Tel Aviv',
       //    organization: 'Default_Organization',
       //    type: 'Host::Managed'
       // },
       // {
       //    id: 4,
       //    name: 'dhcp-3-104.example.com',
       //    hostgroup: 'RHEV Host',
       //    mac: '22:bb:11:dd:aa',
       //    domain: 'example.com',
       //    subnet: '10.0.3.104',
       //    operatingsystem: 'Fedora 19',
       //    environment: 'Development',
       //    location: 'Tel Aviv',
       //    organization: 'Default_Organization',
       //    type: 'Host::Managed'
       // },
       {
          id: 5,
          name: 'dhcp-3-105.example.com',
          hostgroup: null,
          mac: 'dd:bb:dd:dd:aaa',
          domain: 'example.com',
          subnet: '10.0.3.105',
          operatingsystem: 'Fedora 19',
          environment: 'Development',
          location: 'Tel Aviv',
          organization: 'Default_Organization',
          type: 'Host::Managed'
       },
       {
          id: 6,
          name: 'dhcp-3-106.example.com',
          hostgroup: null,
          mac: 'bb:cc:ee:dd:aa',
          domain: 'example.com',
          subnet: '10.0.3.106',
          operatingsystem: 'Fedora 19',
          environment: 'Development',
          location: 'Tel Aviv',
          organization: 'Default_Organization',
          type: 'Host::Managed'
       },
       {
          id: 7,
          name: '3C:97:0E:16:A3:A3',
          hostgroup: null,
          mac: '3C:97:0E:16:A3:A3',
          domain: null,
          subnet: null,
          operatingsystem: null,
          environment: null,
          location: null,
          organization: null,
          type: 'Host::Discovered'
       },
       {
          id: 8,
          name: '2B:44:0A:34:B3:C1',
          hostgroup: null,
          mac: '2B:44:0A:34:B3:C1',
          domain: null,
          subnet: null,
          operatingsystem: null,
          environment: null,
          location: null,
          organization: null,
          type: 'Host::Discovered'
       }
  ]
});

export default Host;