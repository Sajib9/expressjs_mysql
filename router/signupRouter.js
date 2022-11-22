const express = require("express");
const multer = require("multer");
const upload = multer({ dest: './public/data/uploads/' });
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const {addUser} = require("../controller/signupController");
const {addUserValidators,addUserValidationHandler} = require("../middleware/user/userValidators");

const router = express.Router();

const page_title = "Signup";

router.post('/registration',addUserValidators,addUserValidationHandler,addUser)

module.exports = router;