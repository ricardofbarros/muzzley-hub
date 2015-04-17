var constructors = require('./constructors');

module.exports = function ModelFactory(options) {

  /**
   * Constructor
   * @type {Prototype}
   */
  var Proto = constructors.proto(options);

  /**
  * Save the newly created Channel object
  *
  * @param {Function} callback
  * @access public
  * @returns {undefined}
  */
  Proto.prototype.save = function (callback) {
    var key = Proto.key(this);

    Proto.storage.client().set(key, JSON.stringify(this), callback);
  };


  /////////////// Methods ////////////////////

  // Important functions
  Proto.storage = options.storage;
  Proto.key = constructors.key(options.prefix, options.name, options.keys);


  /**
  * Get one specific object
  *
  * @param {number|string} channelId
  * @param {Channel~callback} callback
  * @access public
  * @returns {undefined}
  */
  Proto.get = function (keyObj, callback) {
    var key = Proto.key(keyObj);
    Proto.storage.client().get(key, function (err, propsJson) {
      if (err) {
        return callback(new Error('Error loading channel: ' + err));
      }
      // If empty return empty callback
      if(!propsJson) {
        return callback();
      }

      var properties = JSON.parse(propsJson);
      var channel = new Proto(properties, {strict: false, enforce: false});

      return callback(null, channel);
    });
  };


  /**
  * Get multiple objects
  * @param {[type]}   key [description]
  * @param {Function} cb  [description]
  */
  Proto.mget = function(keyObj, cb) {
    var key = Proto.key(keyObj);
    Proto.storage.client().keys(key, function (err, keys) {
      if(err || keys.length < 1) {
        return cb(err, []);
      }

      Proto.storage.client().mget(keys, function (err, subscriptions) {
        if(err) {
          return cb(err);
        }

        for(var s in subscriptions) {
          subscriptions[s] = new Proto(JSON.parse(subscriptions[s]), {strict: false, enforce: false});
        }

        return cb(null, subscriptions);
      });
    });
  };


  /**
  * Delete channel from Redis
  *
  * @param {number|string} channelId
  * @param {Channel~callback} callback
  * @access public
  * @returns {undefined}
  */
  Proto.del = function(keyObj, callback) {
    var key = Proto.key(keyObj);
    Proto.storage.client().del(key, callback);
  };

  return Proto;
};
