import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/shadab-rao",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/shadabrao/",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/hey_shdb",
    },
  ];

  return (
    <footer className="relative bg-[#030712] border-t border-slate-800">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white">
              Shadab
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              MERN Stack Developer passionate about creating modern,
              scalable and high-performance web applications with
              clean UI and excellent user experience.
            </p>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: .2,
            }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-center"
          >
            <h3 className="text-white text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">

              {links.map((item) => (

                <a
                  key={item.title}
                  href={item.href}
                  className="block text-gray-400 hover:text-cyan-400 transition"
                >
                  {item.title}
                </a>

              ))}

            </div>

          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: .4,
            }}
            viewport={{ once: true }}
            className="lg:text-right"
          >
            <h3 className="text-white text-2xl font-semibold mb-6">
              Connect
            </h3>

            <div className="flex lg:justify-end gap-4">

              {socials.map((item, index) => (

                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 hover:scale-110"
                >
                  {item.icon}
                </a>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-center">
            © {currentYear} Shadab Rao. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;