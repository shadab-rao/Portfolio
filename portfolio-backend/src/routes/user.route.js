const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

router.post("/create",userController.createProfile);
router.get("/",userController.getProfile);
router.put("/update",userController.updateProfile);



module.exports = router;