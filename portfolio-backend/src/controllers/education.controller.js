const educationModel = require("../models/education.model");

const createEducation = async(req,res)=>{

    const {degree,institution,startDate,endDate} = req.body;

    if(!degree || !institution || !startDate || !endDate){
        return res.status(400).json({message:"All fields are required"});
    }
    const education = await educationModel.create({degree,institution,startDate,endDate});
    res.status(201).json({message:"Education created successfully",education});
}

const updateEducation = async(req,res)=>{

    const {degree,institution,startDate,endDate,description} = req.body;
    const education = await educationModel.findOneAndUpdate({_id:req.params.id},{degree,institution,startDate,endDate,description},{new:true});
    res.status(200).json({message:"Education updated successfully",education});
}

const getAllEducation = async(req,res)=>{

    const education = await educationModel.find();
    if(!education){
        return res.status(404).json({message:"Education not found"});
    }
    res.status(201).json({message:"Education fetched successfully",education});
}

const educationById = async(req,res)=>{

    const education = await educationModel.findById(req.params.id);
    if(!education){
        return res.status(404).json({message:"Education not found"});
    }
    res.status(201).json({message:"Education fetched successfully",education});
}

const deleteEducation = async(req,res)=>{

    const education = await educationModel.findByIdAndDelete(req.params.id);
    if(!education){
        return res.status(404).json({message:"Education not found"});
    }
    res.status(200).json({message:"Education deleted successfully"});
}

module.exports = {createEducation,updateEducation,getAllEducation,educationById,deleteEducation};