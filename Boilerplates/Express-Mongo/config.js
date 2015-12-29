/*
	Donot keep any logic here, just the bootstrap of the express server and connection to mongo.
*/

var config = {
    'MONGO': {
        'port': process.env.MONGODB_PORT || 27017,
        'host': process.env.MONGODB_HOST || "localhost",
        'dbname': 'DemoDB',
        'username': '',
        'password': ''
    },
    'EXPRESS': {
        'ip': process.env.IP || "localhost",
        'port': process.env.PORT || 8080
    }
}

config.mongoose = require('mongoose');
config.mongoose.connect('mongodb://' + config.MONGO.host + ':' + config.MONGO.port + '/' + config.MONGO.dbname);
config.db = config.mongoose.connection;
config.db.on('error', console.error.bind(console, 'connection error:'));
config.db.once('open', function(callback) {
    console.log("Connection Open");
});

// Common handler for all the response errors to be sent
config.handleError = function(str, callback) {
    callback.call(null, {
        "status": "Error",
        "errorDesc": str
    });
};

module.exports = config;
