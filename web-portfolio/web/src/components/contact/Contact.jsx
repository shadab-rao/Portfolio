import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { createContact } from "../../ApiServices/ApiCallService";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await createContact(form);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      toast.error(
        err?.response?.data?.data?.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#020617] py-24"
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
            Contact
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Let's Work Together
          </h2>

          <div className="w-28 h-1 bg-cyan-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-white mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-400 leading-8 mb-10">
              Have a project in mind or looking for a MERN developer?
              Feel free to reach out. I'll get back to you as soon as possible.
            </p>

            {/* Phone */}

            <div className="flex items-center gap-5 mb-6 bg-slate-900 p-5 rounded-2xl border border-slate-700">

              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <FaPhoneAlt className="text-white text-xl"/>
              </div>

              <div>
                <p className="text-gray-400">Phone</p>
                <h4 className="text-white font-semibold">
                  +91 7900  737626
                </h4>
              </div>

            </div>

            {/* Email */}

            <div className="flex items-center gap-5 mb-6 bg-slate-900 p-5 rounded-2xl border border-slate-700">

              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <FaEnvelope className="text-white text-xl"/>
              </div>

              <div>
                <p className="text-gray-400">Email</p>
                <h4 className="text-white font-semibold">
                  shdb790073@gmail.com
                </h4>
              </div>

            </div>

            {/* Address */}

            <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-2xl border border-slate-700">

              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-xl"/>
              </div>

              <div>
                <p className="text-gray-400">Location</p>
                <h4 className="text-white font-semibold">
                  Delhi, India
                </h4>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={submitHandler}
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-3xl border border-slate-700"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-slate-800 rounded-xl p-4 text-white outline-none border border-slate-700 focus:border-cyan-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-slate-800 rounded-xl p-4 text-white outline-none border border-slate-700 focus:border-cyan-500"
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full mt-5 bg-slate-800 rounded-xl p-4 text-white outline-none border border-slate-700 focus:border-cyan-500"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full mt-5 bg-slate-800 rounded-xl p-4 text-white outline-none border border-slate-700 focus:border-cyan-500 resize-none"
            />

            <button
              disabled={loading}
              className="mt-8 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3"
            >
              {loading ? "Sending..." : "Send Message"}

              <FaPaperPlane />
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;