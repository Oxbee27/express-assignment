const express = require("express");
const router = express.Router();

const {admin, user} = require("../controllers/adminControllers");
const authenticate = require("../middleware/auth");
const {authorization} = require("../middleware/authorization");

router.get("/admin", authenticate, authorization, admin);
router.get("/user", authenticate, user);

module.exports = router;


