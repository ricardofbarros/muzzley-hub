// Dependencies
var muzzleyHub = require('muzzley-hub');
var Model = muzzleyHub.Model;

var Credentials = Model.extend({
  name: 'credentials',
  props: {
    email: 'string',
    muzzleyId: 'string',
    providerId: 'string',
    accessToken: 'string',
    renewToken: 'string'
  },
  keys: ['muzzleyId', 'providerId']
});


module.exports = Credentials;
