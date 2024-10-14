import React, { useState, createContext, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import { motion } from "framer-motion";

export const PortfolioContext = createContext();

const App = () => {
  const [NavBarHeight, setNavBarHeight] = useState(50);
  const [currentNavBtn, setCurrentNavBtn] = useState("home");
  const [isDarkTheme, setIsDarkTheme] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("PortfolioDarkTheme");
    if (storedTheme) {
      setIsDarkTheme(JSON.parse(storedTheme));
    } else {
      setIsDarkTheme(false);
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
    <PortfolioContext.Provider
      value={{
        NavBarHeight,
        setNavBarHeight,
        currentNavBtn,
        setCurrentNavBtn,
        isDarkTheme,
        setIsDarkTheme,
      }}
    >
      <div
        className={`h-screen w-screen overflow-hidden flex font-GowunBatang transition-colors duration-500 ${
          isDarkTheme ? "bg-[#121212] text-white" : "bg-[#f9fafb] text-black"
        }`}
      >
        {currentNavBtn !== "home" && (
          <motion.div
            layout
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            className="SideBar h-full hidden md:flex md:w-2/5 lg:w-1/3 xl:w-1/4 overflow-y-auto"
          >
            <Profile />
          </motion.div>
        )}

        <div
          className={`MainContent h-full w-full flex flex-col ${
            currentNavBtn === "home"
              ? "md:w-full"
              : "md:w-3/5 lg:w-2/3 xl:w-3/4"
          } overflow-hidden`}
        >
          <div className="Navbar">
            <NavBar onHeightChange={setNavBarHeight} />
          </div>
          <motion.div
            layout
            id="MainContainer"
            className="MainContainer overflow-y-auto flex flex-col gap-4"
            style={{ height: `calc(100vh - ${NavBarHeight}px)` }}
          >
            <section name="home" className="Home w-full">
              <Home />
            </section>
            <section name="skills" className="Skills w-full">
              <Skills />
            </section>
            <section name="projects" className="ProjectsContainer w-full">
              <Projects />
            </section>
            <section name="certifications" className="Certifications w-full">
              <Certifications />
            </section>
            <section name="contact" className="Contact w-full">
              <Contact />
            </section>
          </motion.div>
        </div>
      </div>
    </PortfolioContext.Provider>
  );
};

export default App;
