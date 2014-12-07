import DS from 'ember-data';

var Network = DS.Model.extend({
  interface_name: DS.attr('string'),
  ip_address: DS.attr('string'),
  network_mask: DS.attr('string'),
  network_address: DS.attr('string'),
  host_gateway: DS.attr('string'),
  dhcp_range_start: DS.attr('string'),
  dhcp_range_end: DS.attr('string'),
  dhcp_gateway: DS.attr('string'),
  dns_forwarder: DS.attr('string'),
  domain_name: DS.attr('string'),
  foreman_url: DS.attr('string'),
  ntp_sync_host: DS.attr('string'),
  timezone: DS.attr('string'),
});

Network.reopenClass({
    FIXTURES: [
        {
          id: 1,
          interface_name: 'eth0',
          ip_address: '10.35.4.96',
          network_mask: '255.255.254.0',
          network_address: '10.35.4.0',
          host_gateway: '10.35.5.254',
          dhcp_range_start: '10.35.4.97',
          dhcp_range_end: '10.35.5.254',
          dhcp_gateway: '10.35.4.96',
          dns_forwarder: '10.35.255.14',
          domain_name: 'csb',
          foreman_url: 'https://jmagen.csb',
          ntp_sync_host: '1.centos.pool.ntp.org',
          timezone: 'Asia/Jerusalem',
       },
       {
          id: 2,
          interface_name: 'virbr0',
          ip_address: '192.168.122.1',
          network_mask: '255.255.255.0',
          network_address: '192.168.122.0',
          host_gateway: '10.35.5.254',
          dhcp_range_start: '192.168.122.2',
          dhcp_range_end: '192.168.122.254',
          dhcp_gateway: '192.168.122.1',
          dns_forwarder: '10.35.255.14',
          domain_name: 'csb',
          foreman_url: 'https://jmagen.csb',
          ntp_sync_host: '1.centos.pool.ntp.org',
          timezone: 'Asia/Jerusalem',
       },
       {
          id: 3,
          interface_name: 'virbr0:nic',
          ip_address: '',
          network_mask: '',
          network_address: '',
          host_gateway: '10.35.5.254',
          dhcp_range_start: '',
          dhcp_range_end: '',
          dhcp_gateway: '',
          dns_forwarder: '10.35.255.14',
          domain_name: 'csb',
          foreman_url: 'https://jmagen.csb',
          ntp_sync_host: '1.centos.pool.ntp.org',
          timezone: 'Asia/Jerusalem',
       },
       {
          id: 4,
          interface_name: 'virbr1',
          ip_address: '192.168.121.1',
          network_mask: '255.255.255.0',
          network_address: '192.168.121.0',
          host_gateway: '10.35.5.254',
          dhcp_range_start: '192.168.121.2',
          dhcp_range_end: '192.168.121.254',
          dhcp_gateway: '192.168.121.1',
          dns_forwarder: '10.35.255.14',
          domain_name: 'csb',
          foreman_url: 'https://jmagen.csb',
          ntp_sync_host: '1.centos.pool.ntp.org',
          timezone: 'Asia/Jerusalem',
       },
       {
          id: 5,
          interface_name: 'virbr1:nic',
          ip_address: '',
          network_mask: '',
          network_address: '',
          host_gateway: '10.35.5.254',
          dhcp_range_start: '',
          dhcp_range_end: '',
          dhcp_gateway: '',
          dns_forwarder: '10.35.255.14',
          domain_name: 'csb',
          foreman_url: 'https://jmagen.csb',
          ntp_sync_host: '1.centos.pool.ntp.org',
          timezone: 'Asia/Jerusalem',
       },
       {
          id: 6,
          interface_name: 'wlan0',
          ip_address: '10.201.132.146',
          network_mask: '255.255.252.0',
          network_address: '10.201.132.147',
          host_gateway: '10.201.132.146',
          dhcp_range_start: '10.201.132.147',
          dhcp_range_end: '10.201.135.254',
          dhcp_gateway: '10.201.132.146',
          dns_forwarder: '10.35.255.14',
          domain_name: 'csb',
          foreman_url: 'https://jmagen.csb',
          ntp_sync_host: '1.centos.pool.ntp.org',
          timezone: 'Asia/Jerusalem',
       },

    ]
});

export default Network;
