var controller = {
	handleGET: function (req, res) {
		res.json({text:"home" +  req.method});
	}
}
module.exports = controller;