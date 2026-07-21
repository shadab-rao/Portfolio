import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../../ApiServices/ApiCallService";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState("All");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
    const res = await getProjects()

      setProjects(res.data.data?.project);
    } catch (err) {
      console.log(err);
    }
  };

  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (item) => item.category === active
        );

  return (
    <section
      id="projects"
      className="bg-[#020617] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl text-white font-bold mt-3">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Filter */}

        <div className="flex flex-wrap justify-center gap-4 mt-14 mb-16">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-6 py-3 rounded-full transition
              ${
                active === item
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-900 text-gray-300 border border-slate-700 hover:border-cyan-500"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {filtered.map((project, index) => (

            <ProjectCard
              key={project._id}
              project={project}
              index={index}
            />

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;