const express = require("express");

const router = express.Router();

const contactController = require("../controllers/contact.controller");

router.post("/",contactController.createContact);
router.get("/all-messages",contactController.getAllMessage);
router.delete("/delete/:id",contactController.deletemessage);

module.exports = router;