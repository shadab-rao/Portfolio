const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    icon:{
        type: String,
        default:""
    },
    category:{
        type: String,
        enum:["frontend", "backend", "database", "tools","others"],
        required: true
    },
    order:{
        type: Number,
        default: 0
    },
    proficiency: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    } 
},{
    timestamps: true
});

const SkillModel = mongoose.model("Skill", skillSchema);

module.exports = SkillModel;