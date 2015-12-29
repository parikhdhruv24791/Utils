function errorHandler(err, req, res, next) {

    if (!err) return next(); // you also need this line
    console.log("error!!!", err.status);
    res.status(500).send({
        "status": "false",
        "data": "Something Went Wrong : "
    });
}

function notFound404Handler(req, res, next) {
	console.log("404!!!");
    res.status(404).send({
        "status": "false",
        "data": "No Route Found"
    });


}
exports.notFound404Handler = notFound404Handler;
exports.errorHandler = errorHandler;


