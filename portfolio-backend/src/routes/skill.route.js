const express = require("express");
const skillController = require("../controllers/skill.controller");
const upload = require("../middlewares/multer");


const router = express.Router();

router.post("/create",upload.single("icon") ,skillController.createSkill);
router.get("/all",skillController.getAllSkills);
router.put("/update/:id",upload.single("icon"),skillController.updateSkills);
router.delete("/delete/:id",skillController.deleteSkill);
router.get("/view/:id",skillController.getSkillById);

module.exports = router;



