// Dependencies
var PubSub = require('../pubsub');

// Export factory function
module.exports = function PubSubFactory(config, client, log) {
  return new PubSub({
    muzzley: client,
    log: log,
    profile: config.profile
  });
};
