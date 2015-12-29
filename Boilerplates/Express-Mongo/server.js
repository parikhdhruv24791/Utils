/*
 	Donot keep any logic here, just the bootstrap of the express server
*/

var app = require("./app");
var config = require("./config");

var server = app.listen(config.EXPRESS.port, config.EXPRESS.ip, function(error) {
    if (error) {
        console.log("Some error occured starting server : ", error);
        process.exit(10);
    }
    console.log("Server Started on http://" + config.EXPRESS.ip + ":" + config.EXPRESS.port);
});
