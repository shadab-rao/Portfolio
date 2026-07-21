const express = require("express");
const skillController = require("../controllers/skill.controller");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/create",upload.single("icon") ,skillController.createSkill);
router.get("/all",skillController.getAllSkills);
router.put("/update/:id",upload.single("icon"),skillController.updateSkills);
router.delete("/delete/:id",skillController.deleteSkill);
router.get("/view/:id",skillController.getSkillById);
router.put("/status/:id",skillController.skillStatus);

module.exports = router;



