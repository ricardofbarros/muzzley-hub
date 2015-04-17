// Dependencies
var factory = require('./factory');

function Interaction(config) {

  // Muzzley client
  this.client = factory(config.core);

  // Connect client to core
  this.client.initApp({
    token: config.app.token
  });

  // Event listener, on connect
  this.client.on('connect', function () {

    // Subscribe to all message directed to profile
    pubsub.subscribe(function (err, subscription) {
      if (err) {
        return log.error(err, 'Subscription failed');
      }

      subscription.on('message', function (message, callback) {
        var payload = message.getPayload();
        var user = message.getUser();
        var property = payload.property;

        log.debug(payload, 'Incoming message');
      });
    });
  });
}
