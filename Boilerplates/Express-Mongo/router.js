var customErrorHandler = require("./middleware/errorHandler");

module.exports = function(app) {
    app.use(require('./modules/home/homeRouter'));
    app.use(require('./modules/User/userRouter'));

    //Error Handling Middleware
    app.use(customErrorHandler.errorHandler);
    app.use(customErrorHandler.notFound404Handler);
};
