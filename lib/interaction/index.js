// Dependencies
var factory = require('./factory');
var utils = require('../utils');

function Interaction(config) {
  var self = this;

  // Muzzley client
  self.client = factory.muzzleyClient(config.core);

  // PubSub helper
  self.pubsub = factory.pubsub(config.app, self.client, utils.log);

  // Connect client to core
  self.client.initApp({
    token: config.app.token
  });

  // Event listener, on connect
  self.client.on('connect', function () {

    // Subscribe to all message directed to profile
    self.pubsub.subscribe(function (err, subscription) {
      if (err) {
        return utils.log.error(err, 'Subscription failed');
      }

      subscription.on('message', function (message, callback) {
        var payload = message.getPayload();
        var user = message.getUser();
        var property = payload.property;

        utils.log.debug(payload, 'Incoming message');
      });
    });
  });
}

module.exports = Interaction;
