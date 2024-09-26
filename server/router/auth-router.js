const express = require("express");
const router = express.Router();
const authControllers= require("../controllers/auth-controllers")
const authC = require("../controllers/second")

router.route("/register").post(authControllers.register);
router.route("/create").post(authC.uploadDoc);
router.route("/getTable").get(authC.getAllUploads);


module.exports = router ;  