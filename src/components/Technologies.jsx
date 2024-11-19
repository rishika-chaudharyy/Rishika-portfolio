import { motion } from "framer-motion"; // Import Framer Motion
import { RiReactjsLine } from "react-icons/ri";
import {
  FaJava,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiGnubash,
  SiGreensock,
} from "react-icons/si";

const Technologies = () => {
  const technologies = [
    {
      icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
      name: "React",
    },
    { icon: <FaJava className="text-7xl text-orange-600" />, name: "Java" },
    { icon: <SiGreensock className="text-7xl text-green-500" />, name: "GSAP" },
    { icon: <FaGithub className="text-7xl text-gray-400" />, name: "GitHub" },
    { icon: <FaHtml5 className="text-7xl text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-7xl text-blue-500" />, name: "CSS" },
    {
      icon: <FaJsSquare className="text-7xl text-yellow-400" />,
      name: "JavaScript",
    },
    {
      icon: <SiMongodb className="text-7xl text-green-600" />,
      name: "MongoDB",
    },
    { icon: <SiExpress className="text-7xl text-gray-400" />, name: "Express" },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js" },
    {
      icon: <FaBootstrap className="text-7xl text-purple-500" />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss className="text-7xl text-cyan-500" />,
      name: "Tailwind",
    },
    {
      icon: <SiTypescript className="text-7xl text-blue-500" />,
      name: "TypeScript",
    },
    { icon: <SiGnubash className="text-7xl text-gray-600" />, name: "Bash" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            initial={{ opacity: 0, y: 20 }} // Start hidden and below
            animate={{ opacity: 1, y: 0 }} // Fade in and rise up
            transition={{ duration: 0.5, delay: index * 0.1 }} // Add stagger effect
          >
            {tech.icon}
            <p className="mt-2 text-center text-white">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
