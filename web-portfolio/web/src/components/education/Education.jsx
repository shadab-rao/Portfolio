import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { getAllEducation } from "../../ApiServices/ApiCallService";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const res = await getAllEducation("", 1, 10);

      setEducation(res.data.data?.education);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      id="education"
      className="py-24 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Education
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Academic Journey
          </h2>

          <div className="w-28 h-1 bg-cyan-500 rounded-full mx-auto mt-6"></div>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-slate-700"></div>

          <div className="space-y-12">

            {education.map((item, index) => (
              <EducationCard
                key={item._id}
                education={item}
                index={index}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;