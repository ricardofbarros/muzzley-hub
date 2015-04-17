/**
 * Constructor of Discovery Process
 * @constructor
 */
function Discovery() {}

/**
 * Get methods of the discovery process
 * @abstract
 * @return {Object}
 */
Discovery.prototype.getMethods = function() {};

module.exports = Discovery;
