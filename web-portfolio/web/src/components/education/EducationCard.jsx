import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import moment from "moment";

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline Dot */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-[#020617] z-20"></div>

      {/* Card */}
      <div className="w-full lg:w-[45%] bg-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 p-7 hover:-translate-y-2">

        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
            <FaGraduationCap className="text-white text-2xl" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              {education.degree}
            </h3>

            <p className="text-cyan-400 font-medium">
              {education.institution}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-gray-400 mb-5">

          <div className="flex items-center gap-2">
            <IoCalendarOutline />
            {moment(education.startDate).format("MMM YYYY")} - {moment(education.endDate).format("MMM YYYY")}
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker />
            {education.location}
          </div>

        </div>

        <p className="text-gray-300 leading-7">
          {education.description}
        </p>

      </div>
    </motion.div>
  );
};

export default EducationCard;