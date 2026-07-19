const skillModel = require("../models/skill.model");

const createSkill = async (req, res) => {
  try {
    const { name, icon, category, order, proficiency } = req.body;

    if (!name || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const skillExists = await skillModel.findOne({
      name: { $regex: new RegExp(`^${name}$`, "i") },
    });
    if (skillExists) {
      return res.status(400).json({ message: "Skill already exists" });
    }

    const skill = await skillModel.create({
      name,
      icon,
      category,
      order,
      proficiency,
    });

    res.status(201).json({ message: "Skill created successfully", skill });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllSkills = async (req, res) => {
  const skills = await skillModel.find();
  res.status(201).json({ message: "Skill created successfully", skills });
};

const updateSkills = async (req, res) => {
  const { name, icon, category, order, proficiency } = req.body;

  if (!name || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const skill = await skillModel.findOneAndUpdate(
    { _id: req.params.id },
    { name, icon, category, order, proficiency },
    { new: true },
  );

  res.status(200).json({ message: "Skill updated successfully", skill });
};

const deleteSkill = async (req, res) => {
  const skill = await skillModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Skill deleted successfully", skill });
};

module.exports = { createSkill, getAllSkills, updateSkills, deleteSkill };
