const contactModel = require("../models/contact.model");
const { successResponse } = require("../utils/response");

const createContact = async (req, res) => {
  try {
    const contact = await contactModel.create(req.body);
    return successResponse(res, 201, "Message sent successfully", contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllMessage = async (req, res) => {
  try {
    const messages = await contactModel.find();
    return successResponse(res, 200, "Messages fetched successfully", messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
