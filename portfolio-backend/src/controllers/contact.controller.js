const contactModel = require("../models/contact.model");
const pagination = require("../utils/pagination");
const { successResponse } = require("../utils/response");
const sendMail  = require("../utils/sendMail");

const createContact = async (req, res) => {
  try {
    const { name, email, message,subject} = req.body;

    const contact = await contactModel.create({
      name,
      email,
      message,
      subject
    });

    await sendMail({
      name,
      email,
      message,
      subject
    });

    return successResponse(res, 201, "Message sent successfully", contact);
  } catch (error) {
    console.log(error);

    res.status(400).json({
      error: error.message,
    });
  }
};

const getAllMessage = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const search = req.query.search || "";

    const result = await pagination(
      contactModel,
      page,
      limit,
      search,
      "name", // field on which search will work
    );

    return successResponse(res, 200, "Messages fetched successfully", {
      contacts: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deletemessage = async (req, res) => {
  try {
    const message = await contactModel.findByIdAndDelete(req.params.id);
    return successResponse(res, 200, "Message deleted successfully", message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createContact, getAllMessage, deletemessage };
