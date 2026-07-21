import { FaGithub, FaLinkedinIn, FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#030712] overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[130px] rounded-full -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[130px] rounded-full bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-semibold mb-4 tracking-widest uppercase">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Shadab <br />
            <span className="text-cyan-400">Rao</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mt-6 h-12">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Node.js Developer",
                2000,
                "Next.js Developer",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-8 max-w-xl leading-8">
            Passionate MERN Stack Developer focused on creating modern,
            responsive, and scalable web applications with exceptional user
            experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-full text-white font-semibold"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="../../../resume/ShadabRao_MernStack_Dev.pdf"
              download
              className="flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition px-8 py-4 rounded-full font-semibold"
            >
              Resume
              <FiDownload />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10">
            <a
              href="https://github.com/shadab-rao"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl text-white hover:bg-cyan-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shadabrao/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl text-white hover:bg-cyan-500 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-25 animate-pulse"></div>

            {/* Image */}
            <div className="relative w-80 h-full md:w-[450px] md:h-[450px] rounded-full border-4 border-cyan-400 overflow-hidden">
              <img
                src="/images/shdb-profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -left-6 top-16 bg-slate-900 border border-cyan-500 px-5 py-3 rounded-xl shadow-lg"
            >
              <p className="text-cyan-400 font-bold text-xl">2+</p>
              <span className="text-gray-300 text-sm">Years Experience</span>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -right-8 bottom-14 bg-slate-900 border border-purple-500 px-5 py-3 rounded-xl shadow-lg"
            >
              <p className="text-purple-400 font-bold text-xl">15+</p>
              <span className="text-gray-300 text-sm">Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
