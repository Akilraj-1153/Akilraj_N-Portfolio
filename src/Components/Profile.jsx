import React, { useContext } from "react";
import Profilephoto from "../assets/Image/ProfileImg.jpg";
import { NavContext } from "../App";
import { Link } from "react-scroll";
import { ExternalLink } from "react-external-link";
import { motion } from "framer-motion";
import { Name } from "./MiniComponents";
const Profile = () => {
  const { setCurrentNavBtn, isDarkTheme } = useContext(NavContext);

  const handleSetActive = (to) => {
    setCurrentNavBtn(to);
  };

  return (
    <div
      className={`w-full h-full transition-all duration-500 rounded-lg  flex flex-col lg:items-center lg:justify-center ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
    >
      <div className="pt-0 py-6 md:pt-6 flex justify-center items-center">
        <img
          src={Profilephoto}
          className="profileImg max-h-64 w-auto rounded-lg shadow"
          alt="Profile"
        />
      </div>
      <div className="text-center mb-2">
        <h2 className="greetingtext text-xl font-semibold">Hello, I am</h2>
        <div className="logo py-2 px-4 flex justify-center">
          <Name isDarkTheme={isDarkTheme} height={"h-20"} />
        </div>
      </div>
      <p className="profileText text-md text-justify leading-relaxed px-4 mb-4">
        Dedicated <span className="font-bold text-xl">Software Developer</span>{" "}
        with a B.Tech in Artificial Intelligence and Data Science, experienced in crafting efficient
        software solutions. Proficient in React, Python, and JavaScript,
        focusing on performance optimization and user experience. A
        collaborative team player committed to delivering impactful projects.
      </p>

      <div className="p-4 flex gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
      </div>
    </div>
  );
};

export default Profile;
