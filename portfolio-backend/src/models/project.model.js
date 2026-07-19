const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  technologies: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
  githubLink: {
    type: String,
    trim: true,
  },
  liveLink: {
    type: String,
    trim: true,
  },
  thumbnail: {
    type: String,
    trim: true,
  },
  feature: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
