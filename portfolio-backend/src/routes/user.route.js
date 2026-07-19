const express = require("express");
const upload = require("../middlewares/multer");

const router = express.Router();

const userController = require("../controllers/user.controller");

router.post("/create", upload.single("image") ,userController.createProfile);
router.get("/",userController.getProfile);
router.put("/update",upload.single("image"),userController.updateProfile);



module.exports = router;