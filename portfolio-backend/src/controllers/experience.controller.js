const experienceModel = require("../models/experience.model");
const pagination = require("../utils/pagination");
const createExperience = async (req, res) => {
  const { company, role, location, startDate, endDate, description } = req.body;
  if (
    !company ||
    !role ||
    !location ||
    !startDate ||
    !endDate ||
    !description
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const experience = await experienceModel.create({
    company,
    role,
    location,
    startDate,
    endDate,
    description,
  });
  res
    .status(201)
    .json({ message: "Experience created successfully", experience });
};

const getAllExperience = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";

    const result = await pagination(
      experienceModel,
      page,
      limit,
      search,
      "company" // Change to "position" if you want to search by position
    );

    res.status(200).json({
      message: "Experience fetched successfully",
      experience: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const experienceById = async (req, res) => {
  const experience = await experienceModel.findById(req.params.id);
  if (!experience) {
    return res.status(404).json({ message: "Experience not found" });
  }
  res
    .status(201)
    .json({ message: "Experience fetched successfully", experience });
};

const updateExperience = async (req, res) => {
  const { company, role, location, startDate, endDate, description } = req.body;
  const experience = await experienceModel.findOneAndUpdate(
    { _id: req.params.id },
    { company, role, location, startDate, endDate, description },
    { new: true },
  );
  res
    .status(200)
    .json({ message: "Experience updated successfully", experience });
};

const deleteExperience = async (req, res) => {
  const experience = await experienceModel.findByIdAndDelete(req.params.id);
  if (!experience) {
    return res.status(404).json({ message: "Experience not found" });
  }
  res.status(200).json({ message: "Experience deleted successfully" });
};

module.exports = {
  createExperience,
  getAllExperience,
  experienceById,
  updateExperience,
  deleteExperience,
};
