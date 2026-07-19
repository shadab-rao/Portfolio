const express = require("express");
const skillController = require("../controllers/skill.controller");

const router = express.Router();

router.post("/create",skillController.createSkill);
router.get("/all",skillController.getAllSkills);
router.put("/update/:id",skillController.updateSkills);
router.delete("/delete/:id",skillController.deleteSkill);

module.exports = router;



