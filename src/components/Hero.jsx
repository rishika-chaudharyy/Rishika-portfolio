import { motion } from "framer-motion";

const Hero = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="border-b border-neutral-900 pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 px-4">
          <motion.div>
            <motion.h1
              variants={textVariants}
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Rishika
            </motion.h1>
            <motion.span
              variants={textVariants}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={textVariants}
              className="mt-4 text-lg lg:text-xl"
            >
              Hi, I’m Rishika👋 I’m a 3rd-semester CSE student at Nirma
              University, Gujarat, pursuing an integrated B.Tech and MBA. As a
              full-stack and Java developer, I’m deeply engaged in building
              projects, contributing to open source, and competing in
              hackathons. Proficient in HTML, CSS, Java, and the MERN stack, I
              specialize in back-end development and love solving real-world
              problems. I’m a quick learner and an effective communicator,
              excited to make an impact in tech. Let’s build something amazing
              together!
            </motion.p>
          </motion.div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="flex justify-center"
          >
            <img
              src="https://i.pinimg.com/474x/cd/ba/e2/cdbae2028541a19e85f6a66d9e91d77a.jpg"
              alt=""
              className="w-3/4 max-w-xs rounded-lg sm:w-1/2 md:w-2/3 lg:w-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
