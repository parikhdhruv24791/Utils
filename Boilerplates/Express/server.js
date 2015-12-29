var app = require("./app");
var config = require("./config");
 /*
	Donot keep any logic here, just the bootstrap of the express server
 */
var server = app.listen(config.port, config.ip, function (error) {
  if (error) {
    console.log("Some error occured starting server : ", error);
    process.exit(10);
  }
  console.log("Server Started on http://" + config.ip + ":" + config.port);
});
