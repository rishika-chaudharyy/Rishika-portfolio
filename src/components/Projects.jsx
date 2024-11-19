import { motion } from "framer-motion"; // Import Framer Motion
import { FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Movie Website with React & Firebase",
      techStack: [<SiReact />, <SiFirebase />, <SiTailwindcss />],
      description:
        "Created a movie browsing website featuring real-time authentication with OTP login, dynamic movie entry with descriptions, and real-time comments.",
      link: "https://github.com/rishika-chaudharyy/movie-webiste-react",
    },
    {
      title: "YouTube Clone UI (Light & Dark Mode)",
      techStack: [<SiHtml5 />, <SiJavascript />],
      description:
        "Built a fully functional YouTube clone UI with light and dark mode, focusing on replicating the layout and user interface.",
      link: "https://github.com/rishika-chaudharyy/FRONT-END-PROJECTS/tree/main/PROJECT-2%20YOUTUBE%20CLONE(UI)",
    },
    {
      title: "Social Media Website UI",
      techStack: [
        <SiHtml5 />,
        <SiJavascript />,
        <SiBootstrap />,
        <SiTailwindcss />,
      ],
      description:
        "Designed a social media website UI, including features such as user profiles, posts, and comment sections, optimized for both desktop and mobile responsiveness.",
      link: "https://github.com/rishika-chaudharyy/FRONT-END-PROJECTS/tree/main/PROJECT-4%20SOCIAL%20MEDIA%20WEBSITE",
    },
    {
      title: "Real-time Code Editor",
      techStack: [<SiHtml5 />, <SiJavascript />],
      description:
        "Built an HTML/CSS/JS editor with syntax highlighting and real-time preview capabilities.",
      link: "https://github.com/rishika-chaudharyy/FRONT-END-PROJECTS/tree/main/PROJECT-1%20CODE%20EDITO",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-16">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row lg:justify-between lg:items-center border p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }} // Scale-up effect on hover
            whileTap={{ scale: 0.95 }} // Tap feedback
            initial={{ opacity: 0, y: 50 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // End animation state
            transition={{ duration: 0.5, delay: index * 0.2 }} // Timing
          >
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-neutral-200 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-4 text-blue-400 hover:text-blue-500"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            </div>
            <div className="flex space-x-4 mt-4 lg:mt-0 text-2xl text-cyan-400">
              {project.techStack.map((icon, iconIndex) => (
                <div
                  key={iconIndex}
                  className="text-neutral-200 hover:text-white"
                >
                  {icon}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
