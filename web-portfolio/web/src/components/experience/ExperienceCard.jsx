import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import moment from "moment";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative mb-12 flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline Dot */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-950 z-20"></div>

      {/* Card */}
      <div className="w-full lg:w-[45%] bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-500 p-3 rounded-xl text-white">
            <MdWork size={24} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white capitalize">
              {experience.role}
            </h3>

            <p className="text-cyan-400">{experience.company}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 text-gray-400 mb-5">
          <div className="flex items-center gap-2">
            <IoCalendarOutline />
            {moment(experience.startDate).format("MMM YYYY")} -{" "}
            {experience.isPresent
              ? "Present"
              : moment(experience.endDate).format("MMM YYYY")}
          </div>

          <div className="flex items-center gap-2">
            <FaLocationDot />
            {experience.location}
          </div>
        </div>

        <p className="text-gray-300 leading-7">{experience.description}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
