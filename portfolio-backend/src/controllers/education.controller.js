const educationModel = require("../models/education.model");
const pagination = require("../utils/pagination");

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

const getAllEducation = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";

    const result = await pagination(
      educationModel,
      page,
      limit,
      search,
      "degree"
    );

    res.status(200).json({
      message: "Education fetched successfully",
      education: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

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