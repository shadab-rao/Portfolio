const express = require("express");
const cors = require("cors");

const skillRouter = require("./routes/skill.route");
const userRouter = require("./routes/user.route");
const projectRouter = require("./routes/project.route");
const experinceRouter = require("./routes/experience.route");
const educationRouter = require("./routes/education.route");
const contactRouter = require("./routes/contact.route");
const adminAuthRouter = require("./routes/adminAuth.route");
const dashboardRoutes = require("./routes/dashboard.route");

const app = express();


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://your-frontend-domain.com"
    ],
    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS"
    ],
    allowedHeaders: [
      "Content-Type",
      "x-auth-token-user",
      "x-auth-language",
      "x-auth-user-type"
    ],
    credentials: true
  })
);




app.use(express.json());

app.use("/uploads", express.static("uploads"));


app.use("/api/skill", skillRouter);
app.use("/api/profile", userRouter);
app.use("/api/project", projectRouter);
app.use("/api/experience", experinceRouter);
app.use("/api/education", educationRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admin", adminAuthRouter);
app.use("/api/dashboard", dashboardRoutes);


module.exports = app;