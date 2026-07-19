const adminAuthController = require("../controllers/admin.controller");

const express = require("express");
const router = express.Router();

router.post("/create", adminAuthController.createAdmin);
router.post("/login", adminAuthController.loginAdmin);
router.post("/logout", adminAuthController.logOutAdmin);
router.get("/details", adminAuthController.getAdmin);

module.exports = router;
