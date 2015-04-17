// Dependencies
var chalk = require('chalk');
var bunyan = require('bunyan');

var utils = {};

/**
 * Check obj structure against another
 * @param {Object} reqObj Required object structure
 * @param {Object} obj
 */
utils.objStructure = function loopObjStructure(reqObj, obj) {
  return Object.keys(reqObj).every(function (prop) {
    // Check early
    if (!obj.hasOwnProperty(prop)) {
      return false;
    }

    // If the value of this key is a v8 object, start recursive check
    if (Object.prototype.toString.call(reqObj[prop]) === '[object Object]') {
      return loopObjStructure(reqObj[prop], obj[prop]);
    }

    // Fallback
    return true;
  });
};

/**
 * Extend prototypes classes
 *
 * Taken from http://stackoverflow.com/a/4389429/2862991
 * with a slight change
 * @param  {Object} base Parent class
 * @param  {Object} sub  Class to be extended
 */
utils.extend = function (base, sub) {
  // Avoid instantiating the base class just to setup inheritance
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
  // for a polyfill
  // Also, do a recursive merge of two prototypes, so we don't overwrite
  // the existing prototype, but still maintain the inheritance chain
  // Thanks to @ccnokes
  var origProto = sub.prototype;
  sub.prototype = Object.create(base.prototype);

  for (var key in origProto)  {
    if (origProto.hasOwnProperty(key)) {
      sub.prototype[key] = origProto[key];
    }
  }
  // Remember the constructor property was set wrong, let's fix it
  sub.prototype.constructor = sub;
  // In ECMAScript5+ (all modern browsers), you can make the constructor property
  // non-enumerable if you define it like this instead
  Object.defineProperty(sub.prototype, 'constructor', {
    enumerable: false,
    value: sub
  });
};


/**
 * Throw a cool red error
 *
 * @param {String} error
 */
utils.throwError = function (error) {
  throw new Error(chalk.red.bold(error));
};


/**
 * bunyan constructor
 *
 * Note: this function is overriden in
 * the Manager constructor
 * @return {Object}
 */
utils.log = function(config) {
  return bunyan.createLogger(config);
};

/**
 * Helper to create and lock internal API's
 */
utils.lockAPI = function(obj, key, api) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    value: api
  });
};

module.exports = utils;
