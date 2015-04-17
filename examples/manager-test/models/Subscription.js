// Dependencies
var muzzleyHub = require('muzzley-hub');
var Model = muzzleyHub.Model;

var Subscription = new Model({
  name: 'subscription',
  props: {
    muzzleyId: 'string',
    channelId: 'string',
    providerId: 'string',
    alias: 'string'
  },
  keys: ['muzzleyId', 'channelId']
});

module.exports = Subscription;
