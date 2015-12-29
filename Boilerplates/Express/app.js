var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = module.exports = express(),
    cors = require('cors');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json 
app.use(bodyParser.json());

//Allow localhost - remove for production
app.use(cors());

// common middleware - if required add route as first parameter
app.use(require('./middleware/middleware'));

// Setup router that contains all the modules route files
require('./router')(app);

// If all fails - just a precaution
app.all('*', function(req, res) {
    res.json({
        error: "No Route Defined"
    });
});


//Various Status Codes 
/*
200- OK; Standard response for successful HTTP requests
201- Created; Request has been fulfilled. New resource created
204- No Content; Request processed. No content returned
301- Moved Permanently; This and all future requests directed to the given URI
304- Not Modified; Resource has not been modified since last requested
400- Bad Request; Request cannot be fulfilled due to bad syntax
401- Unauthorized; Authentication is possible, but has failed
403- Forbidden; Server refuses to respond to request
404- Not Found; Requested resource could not be found
500- Internal Server Error; Generic error message when server fails
501- Not Implemented; Server does not recognize method or lacks ability to fulfill
503- Service Unavailable; Server is currently unavailable
 */