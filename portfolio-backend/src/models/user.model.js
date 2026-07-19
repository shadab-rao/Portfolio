const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    designation:{
        type: String,
        required: true,
        trim: true,
    },
    image:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    resume:{
        type: String,
    },
    phone:{
        type: String,
        required: true,
        trim: true,
    },
    location:{
        type:String,
    },

    github:{
        type: String,
        trim: true,
    },
    linkedin:{
        type: String,
        trim: true,
    },
    instagram:{
        type: String,
        trim: true,
    },
    twitter:{
        type: String,
        trim: true,
    },
    website:{
        type: String,
        trim: true,
    }
})

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;

