import React, { useState, createContext } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import Profile from "./Components/Profile";
import { motion, AnimatePresence } from "framer-motion";

export const NavContext = createContext();

const App = () => {
  const [currentNavBtn, setCurrentNavBtn] = useState("home");
  const [navbarHeight, setNavbarHeight] = useState(50);

  return (
    <NavContext.Provider
      value={{ currentNavBtn, setCurrentNavBtn, navbarHeight, setNavbarHeight }}
    >
      <div className="h-screen w-screen flex font-GowunBatang overflow-hidden">
        <AnimatePresence>
          {currentNavBtn !== "home" && (
            <motion.div
              layout
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: -300 }}
              transition={{ duration: 0.3 }} // Control duration
              className="sidebar h-full hidden md:flex md:w-2/5 lg:w-1/3 xl:w-1/4 overflow-y-auto"
            >
              <Profile />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`ContentContainer h-full w-full overflow-hidden ${
            currentNavBtn === "home"
              ? " md:w-full"
              : "md:w-3/5 lg:w-2/3 xl:w-3/4"
          }`}
        >
          <div className="bg-red-900">
            <NavBar onHeightChange={setNavbarHeight} />
          </div>

          <div
            id="MainContainer"
            className="MainContent overflow-y-auto"
            style={{ height: `calc(100vh - ${navbarHeight}px)` }}
          >
            <motion.div
              layout
              className="bg-red-600 h-full snap-start"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="home"
            >
              <Home />
            </motion.div>
            <motion.div
              layout
              className="bg-red-700 min-h-full snap-start"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="skills"
            >
              <Skill />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </NavContext.Provider>
  );
};

export default App;
