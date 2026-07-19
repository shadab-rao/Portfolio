const express = require("express");
const projectController = require("../controllers/project.controller");
const router = express.Router();

router.post("/create", projectController.createproject);
router.put("/update/:id", projectController.updateProject);
router.get("/all", projectController.getAllProject);
router.get("/project/:id", projectController.projectById);
router.delete("/delete/:id", projectController.deleteProject);

module.exports = router;



