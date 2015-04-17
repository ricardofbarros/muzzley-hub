// Dependencies
var muzzleyIDK = require('muzzley-idk');
var utils = require('./utils');
var Discovery = {
  oauth: require('./discovery/oauth'),
  webview: require('./discovery/webview'),
  recipe: require('./discovery/recipe')
};

// Required config object structure
var requiredCfgObj = {
  manager: {
    name: '',
    discoveryProcess: ''
  },
  server: {
    host: '',
    port: '',
    options: {
      location: ''
    }
  },
  logger: {
    name: '',
    level: ''
  },
  redis: {
    host: '',
    port: ''
  },
  muzzley: {
    app: {
      profile: '',
      token: ''
    },
    api: {
      credential: '',
      url: ''
    },
    core: {
      host: '',
      port: ''
    }
  }
};


/**
 * Manager constructor
 *
 * @param {Object} options config.js object
 */
function Manager(options) {
  options = options || {};

  // Check required configs
  if (!utils.objStructure(requiredCfgObj, options)) {
    // #TO-DO List properties
    var err = new Error('Missing required properties in config file -> ' + props);
    throw err;
  }

  this.config = options;
  this.methods = {
    discovery: {},
    interaction: {}
  };

  var discoveryProcess = this.config.manager.discoveryProcess.toLowerCase();

  // Check if it is a valid discovery
  if (typeof Discovery[discoveryProcess] !== 'undefined') {
    var err = new Error('Discovery process not allowed -> ' + type);
    throw err;
  }

  var discovery = new Discovery[discoveryProcess]();




}

/**
 * Register a method
 * @param  {String}   name Name of the method
 * @param  {Function} fn   Function that handles this method
 */
Manager.prototype.__method = function (type, name, fn) {
  if (type !== 'discovery' && type !== 'interaction') {
    var err = new Error('Method type not allowed -> ', type);
    throw err;
  }

  this.methods[type][name] = fn;
};


/**
 * Start the services of the manager
 * @return {null}
 */
Manager.prototype.start = function () {

};

//
// /**
//  * HTTP server configuration
//  */
// config.server = {
//   host: process.env.TEST_SERVER_HOST || 'http://test-manager.office.muzzley.com',
//   port: process.env.TEST_SERVER_PORT || 7124,
//   options: {
//     location: process.env.TEST_SERVER_HOST || 'http://test-manager.office.muzzley.com'
//   }
// };
//
//
// /**
//  * Logger configuration
//  * see https://github.com/trentm/node-bunyan
//  * for more info
//  *
//  * default level: trace
//  */
// config.logger = {
//   name: require('./package.json').name,
//   level: 'debug'
// };
//
//
// /**
// * Redis client connector configuration
// * @type {Object}
// */
// config.redis = {
//   host: process.env.TEST_REDIS_HOST || 'localhost',
//   port: process.env.TEST_REDIS_PORT || 6379
// };
//
//
// /**
//  * muzzley ecosystem configuration
//  */
// config.muzzley = {
//   app: {
//     profile: process.env.TEST_APP_PROFILE,
//     token: process.env.TEST_APP_TOKEN
//   },
//   api: {
//     credential: process.env.TEST_API_KEY,
//     url: process.env.TEST_API_URL || 'http://channel-api.office.muzzley.com'
//   },
//   core: {
//     host: process.env.TEST_CORE_URL || '' ,
//     port: ''
//   }
// };



// Public API
exports.Manager = Manager;
exports.Model = muzzleyIDK.helpers.Model;

// just to be sure..
module.exports = exports;
