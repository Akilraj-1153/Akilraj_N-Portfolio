import React from "react";
import NavBar from "./Components/NavBar";
import { createContext } from "react";
import { useState } from "react";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import { motion } from "framer-motion";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import { useEffect } from "react";

export const NavContext = createContext();
const App = () => {
  const [currentNavBtn, setCurrentNavBtn] = useState("home");
  const [isDarkTheme, setisDarkTheme] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(50);

  useEffect(() => {
    const storedTheme = localStorage.getItem("PortfolioDarkTheme");
    if (storedTheme) {
      setisDarkTheme(JSON.parse(storedTheme));
    } else {
      setisDarkTheme(false); 
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme !== null) {
      document.body.style.backgroundColor = isDarkTheme ? "#121212" : "#f9fafb";
    }
  }, [isDarkTheme]);

  if (isDarkTheme === null) {
   
    return null;
  }

  return (
    <NavContext.Provider
      value={{
        currentNavBtn,
        setCurrentNavBtn,
        navbarHeight,
        setNavbarHeight,
        isDarkTheme,
        setisDarkTheme,
      }}
    >
      <div
        className={`h-screen w-screen flex overflow-hidden font-GowunBatang transition duration-500 ease-in-out ${
          isDarkTheme ? "bg-[#121212]" : "bg-[#f9fafb]"
        } `}
      >
        {currentNavBtn !== "home" && (
          <motion.div
            layout
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            className={`SideBar h-full hidden md:flex md:w-2/5 lg:w-1/3 xl:w-1/4  overflow-y-auto l`}
          >
            <Profile />
          </motion.div>
        )}

        <motion.div
          layout
          className={`MainBar overflow-hidden  w-full ${
            currentNavBtn === "home"
              ? "md:w-full"
              : "md:w-3/5 lg:w-2/3 xl:w-3/4"
          }`}
        >
          <div className="NavBar">
            <NavBar onHeightChange={setNavbarHeight} />
          </div>
          <div
            id="MainContainer"
            className="MainContent overflow-y-auto"
            style={{ height: `calc(100vh - ${navbarHeight}px)` }}
          >
            <div
              name="home"
              className="h-full min-h-fit flex justify-center items-start"
            >
              <Home />
            </div>
            <div
              name="skills"
              className="h-full min-h-fit flex justify-center items-start"
            >
              <Skill />
            </div> 
            <div
              name="projects"
              className="h-full min-h-fit flex justify-center items-start"
            >
              <Projects />
            </div>
            <div
              name="certifications"
              className="h-full min-h-fit flex justify-center items-start"
            >
              <Certifications />
            </div>
            <div
              name="contact"
              className="h-full min-h-fit flex justify-center items-start"
            >
              <Contact />
            </div>
          </div>
        </motion.div>
      </div>
    </NavContext.Provider>
  );
};

export default App;
