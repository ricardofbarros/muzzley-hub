// Dependencies
var muzzleyHub = require('muzzley-hub');
var Manager = muzzleyHub.Manager;
var requestHandler = require('./server/requestHandler');
var providerBridge = require('./provider/bridge');
var config = require('./config');

// Create a manager and pass the configurations of the manager
var manager = new Manager(config);

// Register methods from the discovery process
manager.method('channels', requestHandler.channels);
manager.method('authenticate', requestHandler.authenticate);
manager.method('authorization', requestHandler.authorization);
manager.method('subscriptions', requestHandler.subscriptions);

manager.method('write', fu
)

// Start the manager!
manager.start();
