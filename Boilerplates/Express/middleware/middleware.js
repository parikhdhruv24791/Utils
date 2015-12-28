module.exports = function(req, res, next) {
    console.log("middleware Common");
    next();
}
