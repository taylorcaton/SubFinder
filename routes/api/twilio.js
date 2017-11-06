const router = require("express").Router();
const twilio = require("twilio");
const accountSid = "ACa0bc48acb99856f8f044e9e07bbefbef"; // Your Account SID from www.twilio.com/console
const authToken = "d50556ebf53bc91c3c0a83eb78c5a01d"; // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);

// Matches with "/api/twilio/"
router.route("/").post((req, res) => {
  
  client.messages
    .create({
      body: req.body.msg,
      to: req.body.phonenum, // Text this number
      from: "7043436525" // From a valid Twilio number
    })
    .then(message => {
      res.json(message);
    });

});

module.exports = router;
