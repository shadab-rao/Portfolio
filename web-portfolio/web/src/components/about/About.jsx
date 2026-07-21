import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBriefcase,
  FaUserGraduate,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaBriefcase size={28} />,
    title: "Experience",
    value: "2+ Years",
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "Projects",
    value: "15+ Completed",
  },
  {
    icon: <FaCode size={28} />,
    title: "Technologies",
    value: "20+ Skills",
  },
  {
    icon: <FaUserGraduate size={28} />,
    title: "Education",
    value: "B.Tech",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#030712] py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            About Me
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Know More About Me
          </h2>

          <div className="w-28 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-3xl bg-cyan-500 blur-3xl opacity-20"></div>

              <img
                src="/images/shdb-profile.jpg"
                alt=""
                className="relative rounded-3xl w-[420px] border border-cyan-500/30"
              />

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              MERN Stack Developer
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              I'm a passionate MERN Stack Developer who enjoys building
              responsive, scalable, and high-performance web applications.
              My expertise includes React.js, Next.js, Node.js, Express.js,
              MongoDB, and REST APIs.
            </p>

            <p className="text-gray-400 leading-8 mb-10">
              I love solving real-world problems through clean code and
              modern UI/UX. I have worked on multiple admin panels,
              dashboards, e-commerce platforms, and portfolio websites.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">

              <div>
                <p className="text-gray-400 mb-2">
                  <span className="text-white font-semibold">
                    Name :
                  </span>{" "}
                  Shadab Rao
                </p>

                <p className="text-gray-400 mb-2">
                  <span className="text-white font-semibold">
                    Email :
                  </span>{" "}
                  shdb790073@gmail.com
                </p>

                <p className="text-gray-400">
                  <span className="text-white font-semibold">
                    Location :
                  </span>{" "}
                  Delhi,India
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-2">
                  <span className="text-white font-semibold">
                    Experience :
                  </span>{" "}
                  2+ Years
                </p>

                <p className="text-gray-400 mb-2">
                  <span className="text-white font-semibold">
                    Freelance :
                  </span>{" "}
                  Available
                </p>

                <p className="text-gray-400">
                  <span className="text-white font-semibold">
                    Language :
                  </span>{" "}
                  English, Hindi
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          {cards.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-slate-900 rounded-2xl border border-slate-700 p-8 hover:border-cyan-500 transition duration-300"
            >

              <div className="text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h4 className="text-white text-xl font-semibold">
                {item.title}
              </h4>

              <p className="text-gray-400 mt-2">
                {item.value}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default About;