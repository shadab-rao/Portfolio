const Skill = require("../models/skill.model");
const Project = require("../models/project.model");
const Education = require("../models/education.model");
const Experience = require("../models/experience.model");

const dashboard = async (req, res) => {
  try {
    const [
      skills,
      projects,
      education,
      experience,
      activeProjects,
    ] = await Promise.all([
      Skill.countDocuments(),
      Project.countDocuments(),
      Education.countDocuments(),
      Experience.countDocuments(),
      Project.countDocuments({ isActive: true }),
    ]);

    res.status(200).json({
      message: "Dashboard fetched successfully",
      dashboard: {
        skills,
        projects,
        education,
        experience,
        activeProjects,
        inactiveProjects: projects - activeProjects,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  dashboard,
};
