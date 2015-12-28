var config = require('./config')
var express = require('express');
var bodyParser = require('body-parser')
var app = module.exports = express();
app.listen(config.port, null);


process.addListener('uncaughtException', function(err, stack) {
    console.log('Caught exception: ' + err + '\n' + err.stack);
    console.log('\u0007'); // Terminal bell
});


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json 
app.use(bodyParser.json());

// common middleware - if required add route as first parameter
app.use(require('./middleware/middleware'));

// Setup router that contains all the modules route files
require('./router')(app);

// If all fails, hit em with the 404
app.all('*', function(req, res) {
    console.log("No Route");
    res.send({error: "No Route Defined"});
});


console.log('Running in ' + (process.env.NODE_ENV || 'development') + ' mode @ ' + config.uri + ":" + config.port);
