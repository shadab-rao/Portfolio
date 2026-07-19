const projectSchema = require("../models/project.model");
const pagination = require("../utils/pagination");

const createproject = async (req, res) => {
  const { title, description, technologies, githubLink, liveLink, link } =
    req.body;

  if (!title || !description || !technologies || !githubLink || !liveLink) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const project = await projectSchema.create({
    title,
    description,
    technologies,
    image: req.file.filename,
    githubLink,
    liveLink,
    link,
  });
  res.status(201).json({ message: "Project created successfully", project });
};

const updateProject = async (req, res) => {
  const { title, description, technologies, githubLink, liveLink, link } =
    req.body;
  const project = await projectSchema.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      description,
      technologies,
      image: req.file.filename,
      githubLink,
      liveLink,
      link,
    },
    { new: true },
  );
  res.status(200).json({ message: "Project updated successfully", project });
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

    res.status(200).json({
      message: "Projects fetched successfully",
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
  res.status(201).json({ message: "Project fetched successfully", project });
};

const deleteProject = async (req, res) => {
  const project = await projectSchema.findByIdAndDelete(req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  res.status(200).json({ message: "Project deleted successfully" });
};

module.exports = {
  createproject,
  updateProject,
  getAllProject,
  projectById,
  deleteProject,
};
