// Dependencies
var Muzzley = require('muzzley-client');

/**
 * muzzley client factory
 * @param  {Object} config Optional.
 *                         Example:
 *                         		config = {
 *      						              host: 'platform.muzzley.com',
 *                          	    port: 1337
 *                            }
 * @return {Object}  muzzley-client
 */
module.exports = function MuzzleyClientFactory(config) {
  var options = {
    connection: {}
  };

  if (config.host) {
    options.connection.host = config.host;
  }

  if (config.port) {
    options.connection.port = config.port;
  }

  var muzzley = new Muzzley(options);

  return muzzley;
};
