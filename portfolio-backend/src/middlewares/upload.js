const {CloudinaryStorage} = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");


const storage = new CloudinaryStorage({
  cloudinary,
  params:{
    folder:"portfolio",
    allowed_formats:["png","jpg","jpeg","webp"]
  }
});


const upload = multer({storage});

module.exports = upload;