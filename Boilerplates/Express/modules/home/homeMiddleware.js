var middleware = {
	homeGETMiddleware: function(req, res, next){
		console.log("middleware :", req.method);
		next();
	}
}
module.exports = middleware;