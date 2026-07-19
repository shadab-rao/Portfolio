const bcrypt = require("bcrypt");
const adminModel = require("../models/admin.model");
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const admin = await adminModel.create({ name, email, password });

  const token = jwt.sign({ userId: adminModel._id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  res.cookie("token", token);
  res.status(201).json({
    message: "Admin created successfully",
    token,
    admin,
  });
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const admin = await adminModel.findOne({ email });

  if (!admin) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  res.cookie("token", token);
  res.status(200).json({
    message: "Admin logged in successfully",
    token,
    admin,
  });
};

const logOutAdmin = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Admin logged out successfully" });
};

const getAdmin = async (req, res) => {
  try {
    const admin = await adminModel.findOne().select("-password").lean();

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    return res.status(200).json({
      message: "Admin fetched successfully",
      admin,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createAdmin, loginAdmin, logOutAdmin, getAdmin };
