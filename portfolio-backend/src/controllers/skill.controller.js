const skillModel = require("../models/skill.model");
const pagination = require("../utils/pagination");

const createSkill = async (req, res) => {
  try {
    const { name, category, order, proficiency } = req.body;

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
      icon: req.file.filename,
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
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";

    const result = await pagination(
      skillModel,
      page,
      limit,
      search,
      "name"
    );

    res.status(200).json({
      message: "Skills fetched successfully",
      skills: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateSkills = async (req, res) => {
  const { name, category, order, proficiency } = req.body;

  if (!name || !category) {
    return res.status(400).json({
      message: "Name and category are required",
    });
  }

  const updateData = {
    name,
    category,
    order,
    proficiency,
  };

  if (req.file) {
    updateData.icon = req.file.filename;
  }

  const skill = await skillModel.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
  });

  res.status(200).json({
    message: "Skill updated successfully",
    skill,
  });
};

const deleteSkill = async (req, res) => {
  const skill = await skillModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Skill deleted successfully", skill });
};

module.exports = { createSkill, getAllSkills, updateSkills, deleteSkill };
