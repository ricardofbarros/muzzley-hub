// Allowed Discovery processes
var allowedDiscoveryProcesses = [
  'oauth',
  'webview',
  'recipe'
];

/**
 * Constructor of Discovery Process
 * @param {String} type allowedDiscoveryProcesses
 */
function Discovery(type) {
  if (allowedDiscoveryProcesses.indexOf(type) < 0) {
    var err = new Error('Discovery process not allowed -> ' + type);
    throw err;
  }

  switch (type) {
    case 'oauth':

    break;
    case 'webview':

    break;
    case 'recipe':

    break;
  }
}


module.exports = Discovery;
