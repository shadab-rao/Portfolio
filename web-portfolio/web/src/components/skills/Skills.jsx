import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import SkillCard from "./SkillCard";
import { allSkills } from "../../ApiServices/ApiCallService";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    let search = ""
    try {
      const res = await allSkills(search, 1, 10);

      setSkills(res.data.data?.skills);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      id="skills"
      className="bg-[#020617] py-24 px-6"
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
            My Skills
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Technologies I Work With
          </h2>

          <div className="w-28 h-1 bg-cyan-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Grid */}

        <div className="grid
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8">

          {skills.map((skill, index) => (
            <SkillCard
              key={skill._id}
              skill={skill}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;