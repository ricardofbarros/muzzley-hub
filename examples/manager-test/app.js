// Dependencies
var muzzleyHub = require('muzzley-hub');
var Manager = muzzleyHub.Manager;
var providerBridge = require('./provider/bridge');
var config = require('./config');
var Channels = require('./models/Channels');
var Credentials = require('./models/Credentials');
var Subscription = require('./models/Subscription');

// Create a manager and pass the configurations of the manager
var manager = new Manager(config);

// Register methods for the discovery process
manager.discovery.getAuth(providerBridge.getAuth);
manager.discovery.getChannels(providerBridge.getChannels);

// Register methods for the interaction
manager.interaction.write(providerBridge.write);
manager.interaction.read(providerBridge.read);

// Register models
manager.model(Channels);
manager.model(Credentials);
manager.model(Subscription);

// Start the manager!
manager.start();
