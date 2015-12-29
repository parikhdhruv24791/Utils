var middleware = require('./homeMiddleware'),
    express = require('express'),
    router = express.Router(),
    controller = require('./homeController');

router.get('/home', middleware.homeGETMiddleware, function(req, res) {
    controller.handleGET(req, res);
});

router.post('/home', function(req, res) {
    res.send("home" + req.method);
});

module.exports = router;
