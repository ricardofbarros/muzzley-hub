// Dependencies
var muzzleyHub = require('muzzley-hub');
var Model = muzzleyHub.Model;

var Channel = new Model({
  name: 'channel',
  props: {
    id: 'number',
    name: 'string',
    direction: 'string'
  },
  keys: ['id']
});

module.exports = Channel;
