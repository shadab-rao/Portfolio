const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true,
        trim: true,
    },
    institution: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model("Education", educationSchema);