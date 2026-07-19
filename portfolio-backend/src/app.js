const express = require('express');
const skillRouter = require("./routes/skill.route");
const userRouter = require("./routes/user.route");
const projectRouter = require("./routes/project.route");
const experinceRouter = require("./routes/experience.route");
const educationRouter = require("./routes/education.route");
const contactRouter = require("./routes/contact.route");

const app = express();

app.use(express.json());

app.use("/api/skill",skillRouter);
app.use("/api/profile",userRouter);
app.use("/api/project",projectRouter);
app.use("/api/experience",experinceRouter);
app.use("/api/education",educationRouter);
app.use("/api/contact",contactRouter);


app.listen(5000, () => {
  console.log("Server running");
});

module.exports = app;