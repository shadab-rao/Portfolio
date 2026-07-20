const projectSchema = require("../models/project.model");
const pagination = require("../utils/pagination");
const { successResponse } = require("../utils/response");

const createproject = async (req, res) => {
  try {
    const {
      title,
      description,
      technologies,
      githubLink,
      liveLink,
      link,
      order,
    } = req.body;

    if (
      !title ||
      !description ||
      !technologies
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Project image is required",
      });
    }

    const project = await projectSchema.create({
      title,
      description,
      technologies: technologies
        .split(",")
        .map((item) => item.trim()),
      image: req.file.filename,
      githubLink,
      liveLink,
      link,
      order,
    });

    return successResponse(
      res,
      201,
      "Project created successfully",
      project
    );
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const {
      title,
      description,
      technologies,
      githubLink,
      liveLink,
      link,
      order,
    } = req.body;

    const updateData = {
      title,
      description,
      technologies: technologies
        ? technologies.split(",").map((item) => item.trim())
        : [],
      githubLink,
      liveLink,
      link,
      order,
    };

    // Update image only if a new image is uploaded
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const project = await projectSchema.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    return successResponse(
      res,
      200,
      "Project updated successfully",
      project
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProject = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";

    const result = await pagination(
      projectSchema,
      page,
      limit,
      search,
      "title", // Search by project title
    );

    return successResponse(res, 200, "Projects fetched successfully", {
      project: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const projectById = async (req, res) => {
  const project = await projectSchema.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  return successResponse(res, 200, "Project fetched successfully", project);
};

const deleteProject = async (req, res) => {
  const project = await projectSchema.findByIdAndDelete(req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  return successResponse(res, 200, "Project deleted successfully");
};

module.exports = {
  createproject,
  updateProject,
  getAllProject,
  projectById,
  deleteProject,
};
