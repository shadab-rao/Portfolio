const express = require("express");

const router = express.Router();

const experienceController = require("../controllers/experience.controller");

router.post("/create",experienceController.createExperience);
router.get("/all",experienceController.getAllExperience);
router.get("/experience/:id",experienceController.experienceById);
router.put("/update/:id",experienceController.updateExperience);
router.delete("/delete/:id",experienceController.deleteExperience);

module.exports = router;