import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  // Variants for text animation
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Variants for icon animations
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.3, duration: 0.5 },
    }),
    hover: { scale: 1.2, rotate: 10 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      className="mb-10 flex flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:mb-20 sm:py-6"
    >
      {/* Name with animation */}
      <motion.div
        variants={textVariants}
        className="flex-shrink-0 font-extrabold text-2xl sm:text-4xl"
      >
        Rishika Chaudhary
      </motion.div>

      {/* Icons with staggered animation */}
      <div className="flex items-center justify-center gap-3 text-xl sm:gap-4 sm:text-2xl">
        {[
          {
            href: "https://www.linkedin.com/in/rishika-chaudharyy/",
            Icon: FaLinkedin,
          },
          {
            href: "https://github.com/rishika-chaudharyy?tab=repositories",
            Icon: FaGithub,
          },
          { href: "https://x.com/Rishika89470701", Icon: FaSquareXTwitter },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            custom={i}
            whileHover="hover"
            className="hover:text-cyan-600"
          >
            <item.Icon />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
