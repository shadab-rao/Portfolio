const contactModel = require("../models/contact.model");

const createContact = async (req, res) => {
    try {
        const contact = await contactModel.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllMessage = async (req, res) => {
    try {
        const messages = await contactModel.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deletemessage = async (req, res) => {
    try {
        const message = await contactModel.findByIdAndDelete(req.params.id);
        res.status(200).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createContact, getAllMessage, deletemessage };