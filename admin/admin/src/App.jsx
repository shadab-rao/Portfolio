import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";

import React from "react";
import Dashboard from "./dashboard/Dashboard";
import Skill from "./skills/Skill";
import AddSkill from "./skills/AddSkill";
import EditSkill from "./skills/EditSkill";
import Projects from "./projects/Projects";
import AddProject from "./projects/AddProject";
import EditProjects from "./projects/EditProjects";
import Education from "./education/Education";
import AddEducation from "./education/AddEducation";
import EditEducation from "./education/EditEducation";
import Experience from "./experience/Experience";
import EditExperience from "./experience/EditExperience";
import AddExperience from "./experience/AddExperience";
import Contact from "./contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/skills/add" element={<AddSkill/>} />
        <Route path="/skills/edit/:id" element={<EditSkill/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/add" element={<AddProject/>} />
        <Route path="/projects/edit/:id" element={<EditProjects/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/education/add" element={<AddEducation/>} />
        <Route path="/education/edit/:id" element={<EditEducation/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/experience/add" element={<AddExperience/>} />
        <Route path="/experience/edit/:id" element={<EditExperience/>} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
