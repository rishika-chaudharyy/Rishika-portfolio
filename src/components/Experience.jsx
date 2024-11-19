import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine, RiDatabaseLine } from "react-icons/ri";
import { FaPython, FaNodeJs, FaChartBar, FaJava } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiPandas,
} from "react-icons/si";

const Experience = () => {
  const experiences = [
    {
      title: "J.P. Morgan Software Engineering Simulation",
      role: "Software Engineer Intern",
      description:
        "Set up a development environment, resolved repository issues, and created live data visualizations with J.P. Morgan’s Perspective library for real-time trading insights.",
      technologies: [<FaPython />, <SiPandas />, <FaChartBar />],
    },
    {
      title: "Team Lead at Smart India Hackathon",
      role: "AI-Powered Women’s Safety Solution",
      description:
        "Led a team to develop an AI-powered women’s safety solution, ranking in the top 5 out of 60+ teams.",
      technologies: [<FaJava />, <FaNodeJs />, <SiMongodb />, <SiJavascript />],
    },
    {
      title: "Team Lead at NIT Patna Kriti's 24 UI/UX Hackathon",
      role: "UI/UX Designer",
      description:
        "Led a team to design a virtual experience for an electronic store at NIT Patna’s Kriti's 24.",
      technologies: [<RiReactjsLine />, <SiTailwindcss />, <SiTypescript />],
    },
    {
      title: "Tata Data Visualization Simulation",
      role: "Data Visualization Developer",
      description:
        "Developed impactful data visuals for Tata Consultancy Services to support executive decision-making, enhancing my skills in translating data into strategic insights.",
      technologies: [<FaPython />, <FaChartBar />, <SiPandas />],
    },
    {
      title: "Accenture Data Analytics Job Simulation",
      role: "Data Analyst",
      description:
        "Analyzed social media trends across seven datasets and presented key insights to stakeholders, showcasing my analytical and data-driven skills.",
      technologies: [<FaPython />, <FaChartBar />, <SiPandas />],
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="border-b border-neutral-800 pb-16">
      <motion.h1
        className="my-20 text-center text-4xl text-blue-400 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h1>
      <div className="flex flex-col space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row lg:space-x-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Left side: Work description */}
            <div className="lg:w-1/2">
              <p className="text-base lg:text-lg text-gray-200">
                {exp.description}
              </p>
            </div>
            {/* Right side: Title, Role, and Technologies */}
            <div className="lg:w-1/2 text-right lg:text-left">
              <h2 className="text-2xl font-semibold text-blue-300">
                {exp.title}
              </h2>
              <h3 className="text-xl text-blue-500 flex items-center">
                {exp.role}
                <div className="ml-4 flex space-x-2 text-blue-300">
                  {exp.technologies.map((icon, idx) => (
                    <motion.span
                      key={idx}
                      className="text-2xl"
                      whileHover={{ scale: 1.2 }}
                    >
                      {icon}
                    </motion.span>
                  ))}
                </div>
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
