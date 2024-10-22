import React, { useContext, useEffect, useRef } from "react";
import Profilephoto from "../assets/Image/ProfileImg.jpg";
import { PortfolioContext } from "../App";
import { Link } from "react-scroll";
import { ExternalLink } from "react-external-link";
import { motion, useInView, useAnimation } from "framer-motion";
import { Name } from "./MiniComponents";

const Profile = () => {
  const { setCurrentNavBtn, isDarkTheme } = useContext(PortfolioContext);

  const handleSetActive = (to) => {
    setCurrentNavBtn(to);
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`w-full h-full transition-all duration-500 rounded-lg flex flex-col lg:items-center lg:justify-center ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="ImageContainer pt-0 py-6 md:pt-6 flex justify-center items-center"
        variants={itemVariants}
      >
        <img
        
        className="profileImg max-h-64 w-auto rounded-lg shadow"
          alt="Profile"
        src="https://cdn.jsdelivr.net/gh/Akilraj-1153/Akilraj_N-Portfolio/src/Assets/Image/ProfileImg.jpg" />
      </motion.div>

      <div className="text-center mb-2">
        <motion.h2
          className="greetingtext text-xl font-semibold"
          variants={itemVariants}
        >
          Hello, I am
        </motion.h2>
        <motion.div
          className="logo py-2 px-4 flex justify-center"
          variants={itemVariants}
        >
          <Name isDarkTheme={isDarkTheme} height="h-20" />
        </motion.div>
      </div>

      <motion.p
        className="profileText text-md text-justify leading-relaxed px-4 mb-4"
        variants={itemVariants}
      >
        Dedicated <span className="font-bold text-xl">Software Developer</span>{" "}
        with a B.Tech in Artificial Intelligence and Data Science, experienced
        in crafting efficient software solutions. Proficient in React Js, JavaScript,
        and Java, focusing on performance optimization and user
        experience. A collaborative team player committed to delivering
        impactful projects.
      </motion.p>

      <motion.div
        className="p-4 flex gap-4 justify-center"
        variants={containerVariants}
      >
        <motion.button
          className="profilebtn"
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
        >
          <Link
            key="contact"
            activeClass="active"
            spy={true}
            to="contact"
            containerId="MainContainer"
            className={`capitalize cursor-pointer h-fit text-center px-6 py-2 rounded-lg text-lg font-semibold border ${
              isDarkTheme
                ? "bg-white text-black border-white"
                : "bg-[#121212] text-white border-black"
            } transition-colors duration-500`}
            onSetActive={handleSetActive}
          >
            <span>Contact</span>
          </Link>
        </motion.button>

        <motion.button
          className="profilebtn"
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
        >
          <ExternalLink
            href="https://drive.google.com/file/d/1T47MUifNCWdSsgKNo5mvA8w6wiNP9_Am/view?usp=sharing"
            className={`capitalize cursor-pointer h-fit text-center px-6 py-2 rounded-lg text-lg font-semibold border ${
              isDarkTheme
                ? "bg-[#121212] text-white border-white"
                : "bg-white text-black border-black"
            } transition-colors duration-500`}
          >
            <span>Resume</span>
          </ExternalLink>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
