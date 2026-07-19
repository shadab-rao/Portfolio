const userModel = require("../models/user.model");
const { successResponse } = require("../utils/response");

const createProfile = async (req, res) => {
  const {
    name,
    designation,
    image,
    github,
    linkedin,
    email,
    password,
    phone,
    resume,
    website,
    isActive,
    instagram,
    location,
  } = req.body;

  if (!name || !designation || !email || !password || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await userModel.create({
    name,
    designation,
    image: req.file.filename,
    github,
    linkedin,
    email,
    password,
    phone,
    resume,
    website,
    isActive,
    instagram,
    location,
  });

  return successResponse(res, 201, "Profile created successfully", user);
};

const getProfile = async (req, res) => {
  const profile = await userModel.findOne();
  return successResponse(res, 200, "Profile fetched successfully", profile);
};

const updateProfile = async (req, res) => {
  const {
    name,
    designation,
    image,
    github,
    linkedin,
    email,
    password,
    phone,
    resume,
    website,
    isActive,
    instagram,
    location,
  } = req.body;

  if (!name || !designation || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await userModel.findOneAndUpdate(
    {},
    {
      name,
      designation,
      image: req.file.filename,
      github,
      linkedin,
      email,
      password,
      phone,
      resume,
      website,
      isActive,
      instagram,
      location,
    },
    { new: true, upsert: true },
  );

  return successResponse(res, 200, "Profile updated successfully", user);
};

module.exports = { createProfile, getProfile, updateProfile };
