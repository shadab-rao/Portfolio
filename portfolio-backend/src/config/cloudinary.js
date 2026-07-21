const cloudinary = require("cloudinary").v2;

console.log("Cloud name:", process.env.CLOUD_NAME);
console.log("Cloud key:", process.env.CLOUD_KEY);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

module.exports = cloudinary;