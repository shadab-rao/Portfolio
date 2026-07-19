const express = require("express");
const projectController = require("../controllers/project.controller");
const router = express.Router();
const upload = require("../middlewares/multer");

router.post("/create", upload.single("image"), projectController.createproject);
router.put("/update/:id", upload.single("image"), projectController.updateProject);
router.get("/all", projectController.getAllProject);
router.get("/project/:id", projectController.projectById);
router.delete("/delete/:id", projectController.deleteProject);

module.exports = router;



