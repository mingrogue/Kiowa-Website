'use strict';


var Mongoose = require('mongoose');

// Connect to the database
//Temporarily hardcoded import from config
//Mongoose.connect("mongodb://127.0.0.1:27017/local");

// Throw an error if the connection fails
//Mongoose.connection.on('error', function(err) {
//  if (err) throw err;
//});

// mpromise (mongoose's default promise library) is deprecated, 
// Plug-in your own promise library instead.
// Use native promises
//Mongoose.Promise = global.Promise;

module.exports = {
  Mongoose,
  models: {
    //admin: require('./schemas/admin.js'),
    event: require('./schemas/event.js'),
    course: require('./schemas/course.js'),
    //arena: require('./schemas/arena.js'),
    //chatsession: require('./schemas/chatsession.js')
  }
};