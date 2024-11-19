import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-col lg:flex-row lg:space-x-12 lg:items-start justify-center">
        {/* Contact Form */}
        <motion.div
          className="lg:w-1/2 p-6 border rounded-lg shadow-md bg-neutral-800"
          variants={containerVariants}
        >
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <label className="text-neutral-200" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="p-2 rounded bg-neutral-700 text-neutral-100"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <label className="text-neutral-200" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="p-2 rounded bg-neutral-700 text-neutral-100"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label className="text-neutral-200" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              className="p-2 rounded bg-neutral-700 text-neutral-100"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <motion.button
              type="submit"
              className="mt-4 p-2 rounded bg-cyan-500 hover:bg-cyan-600 active:scale-95 transform transition duration-150 text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
            {success && (
              <motion.div
                className="mt-4 text-green-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Message Sent Successfully!
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          <h2 className="text-2xl font-semibold text-white">Connect with Me</h2>
          <p className="text-neutral-300 mt-4 text-center">
            Feel free to reach out on social media or via email. I’d love to
            connect!
          </p>
          <div className="flex space-x-8 mt-6 text-3xl text-cyan-400">
            <motion.a
              href="https://www.linkedin.com/in/rishika-chaudharyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 active:scale-90 transform transition duration-150"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/rishika-chaudharyy?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 active:scale-90 transform transition duration-150"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://x.com/Rishika89470701"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 active:scale-90 transform transition duration-150"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
