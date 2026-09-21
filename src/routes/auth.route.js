const express = require("express");

const router = express.Router();


const validate = require("../middleware/validate");

const {register, login} = require("../controllers/user");
const { validateLogin } = require("../validators/login");
const {validateReg}  = require("../validators/auth.validator")

router.post("/register",validate(validateReg), register);
router.post("/login", validateLogin, login);


module.exports = router;
