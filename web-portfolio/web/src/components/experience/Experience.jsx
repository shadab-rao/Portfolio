import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ExperienceCard from "./ExperienceCard";
import { getAllExperience } from "../../ApiServices/ApiCallService";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperience();
  }, []);

  const getExperience = async () => {
    let search = "";
    try {
      const res = await getAllExperience(search, 1, 10);

      setExperiences(res.data.data?.experience);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      id="experience"
      className="bg-[#030712] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Experience
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            My Professional Journey
          </h2>

          <div className="w-28 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-slate-700"></div>

          {experiences.map((item, index) => (
            <ExperienceCard
              key={item._id}
              experience={item}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;