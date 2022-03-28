const router = require("express").Router();

const { sendEmail } = require("../controllers/email");

router.post("/", sendEmail);

module.exports = router;
