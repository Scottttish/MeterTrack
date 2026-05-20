const mongooseRoot = require('mongoose');
const User = require('./functions/models/User');
const mongooseFromModel = require('mongoose'); // This will just be root again

console.log('Mongoose Root Version:', mongooseRoot.version);
// Check which mongoose the model is using
// In Mongoose, models have a reference to the mongoose instance they were created with
const modelMongoose = User.base; 

console.log('Are model mongoose and root mongoose the same?', modelMongoose === mongooseRoot);
console.log('Model Mongoose Version (via base):', modelMongoose.version);
