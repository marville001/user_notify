const catchAsync = require("../utils/catchAsync");

module.exports = {
	sendEmail: catchAsync(async (req, res) => {
		res.send("Sending email")
	})
}