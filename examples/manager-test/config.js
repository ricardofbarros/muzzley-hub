var config = {};

/**
 * Manager configuration
 * @type {Object}
 */
config.manager = {
  name: 'test',
  discoveryProcess: 'webview'
};


/**
 * HTTP server configuration
 */
config.server = {
  host: process.env.TEST_SERVER_HOST || 'http://test-manager.office.muzzley.com',
  port: process.env.TEST_SERVER_PORT || 7124,
  options: {
    location: process.env.TEST_SERVER_HOST || 'http://test-manager.office.muzzley.com'
  }
};


/**
 * Logger configuration
 * see https://github.com/trentm/node-bunyan
 * for more info
 *
 * default level: trace
 */
config.logger = {
  name: require('./package.json').name,
  level: 'debug'
};


/**
* Redis client connector configuration
* @type {Object}
*/
config.redis = {
  host: process.env.TEST_REDIS_HOST || 'localhost',
  port: process.env.TEST_REDIS_PORT || 6379
};


/**
 * muzzley ecosystem configuration
 */
config.muzzley = {
  app: {
    profile: process.env.TEST_APP_PROFILE,
    token: process.env.TEST_APP_TOKEN
  },
  api: {
    credential: process.env.TEST_API_KEY,
    url: process.env.TEST_API_URL || 'http://channel-api.office.muzzley.com'
  },
  core: {
    host: process.env.TEST_CORE_URL || '' ,
    port: ''
  }
};

module.exports = config;
