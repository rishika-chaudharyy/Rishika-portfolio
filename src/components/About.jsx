import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="border-b border-neutral-900 pb-4"
    >
      <motion.h1 variants={textVariants} className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:p-8 mb-8 lg:mb-0"
        >
          <img
            className="rounded-2xl w-3/4 max-w-sm md:w-2/3 lg:w-full object-cover"
            src="https://i.pinimg.com/474x/fb/fb/28/fbfb288dfbf5d87302c9d929c9de4d1a.jpg"
            alt="Rishika"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={textVariants}
          className="w-full lg:w-1/2 flex items-center lg:items-start lg:p-8"
        >
          <p className="text-lg leading-relaxed">
            Hello! I’m Rishika, a 3rd-semester Computer Science student at Nirma
            University, Gujarat, working towards an integrated B.Tech and MBA.
            I’m a dedicated full-stack developer with a focus on backend
            development, and I'm passionate about building impactful, scalable
            applications. I’m an active open-source contributor and a hackathon
            enthusiast, constantly looking for opportunities to solve real-world
            problems with technology.
            <br />
            <br />
            My tech stack includes HTML, CSS, JavaScript, and the MERN stack,
            along with expertise in React, TypeScript, Tailwind CSS, Bootstrap,
            and GSAP animations for dynamic UI. On the backend, I’m skilled in
            Java and have experience in AI and ML, allowing me to dive into
            data-driven projects with creativity and precision.
            <br />
            <br />
            In addition to technical skills, I’m an effective communicator with
            a knack for presenting ideas clearly and engagingly. Always eager to
            learn and collaborate, I’m excited to connect with like-minded
            individuals and create innovative solutions together!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
