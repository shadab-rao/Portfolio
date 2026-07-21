import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="bg-slate-900 border border-slate-700 hover:border-cyan-500 rounded-2xl p-6 transition-all duration-300"
    >
      <div className="flex justify-center mb-5">
        <img
        src={skill.icon}
          alt={skill.name}
          className="w-16 h-16 object-contain"
        />
      </div>

      <h3 className="text-white text-xl font-semibold text-center capitalize">
        {skill.name}
      </h3>

      <p className="text-center text-gray-400 mt-3 capitalize">{skill.category}</p>

      <div className="mt-6 w-full bg-slate-700 rounded-full h-2">
        <div
          style={{ width: `${skill.proficiency}%` }}
          className="bg-cyan-400 h-2 rounded-full"
        />
      </div>

      <p className="text-cyan-400 text-center mt-3 font-semibold">
        {skill.proficiency}%
      </p>
    </motion.div>
  );
};

export default SkillCard;
