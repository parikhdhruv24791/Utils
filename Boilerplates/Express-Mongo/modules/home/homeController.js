var controller = {
	handleGET: function (req, res) {
		res.json({text:"home" +  req.method});
		/*  
			//For sending file to user
			res.download('/report-12345.pdf', 'report.pdf', function(err){
			  if (err) {
			    // Handle error, but keep in mind the response may be partially-sent
			    // so check res.headersSent
			  } else {
			    // decrement a download credit, etc.
			  }
			});
		*/
	}
}
module.exports = controller;