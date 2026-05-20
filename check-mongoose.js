const mongooseRoot = require('mongoose');
const mongooseFunctions = require('./functions/node_modules/mongoose');

console.log('Mongoose Root Version:', mongooseRoot.version);
console.log('Mongoose Functions Version:', mongooseFunctions.version);
console.log('Are they the same instance?', mongooseRoot === mongooseFunctions);
