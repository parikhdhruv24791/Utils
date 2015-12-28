var request = require('request');
var r = request.get({
    url: "",
    timeout: 8000,
    headers: {
        
    }
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        
    } else {
        
    }
});
