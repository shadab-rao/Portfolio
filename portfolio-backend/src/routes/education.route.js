const express = require("express");

const router = express.Router();

const educationController = require("../controllers/education.controller");
router.post("/create",educationController.createEducation);
router.get("/all",educationController.getAllEducation);
router.get("/details/:id",educationController.educationById);
router.put("/update/:id",educationController.updateEducation);
router.delete("/delete/:id",educationController.deleteEducation);

module.exports = router;