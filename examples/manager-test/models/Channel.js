// Dependencies
var muzzleyHub = require('muzzley-hub');
var Model = muzzleyHub.Model;

var Channel = Model.extend({
  name: 'channel',
  props: {
    id: 'number',
    name: 'string',
    direction: 'string'
  },
  keys: ['id']
});


Channel.getAll = function(cb) {
  return Channel.mget({id: '*'}, cb);
};

module.exports = Channel;
