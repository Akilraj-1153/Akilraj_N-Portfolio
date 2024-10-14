import React, { useContext, useEffect } from "react";
import { PortfolioContext } from "../App";
import { skill_data } from "./Data";
import { motion, useAnimate, useInView, stagger } from "framer-motion";

const Skills = () => {
  const { NavBarHeight, isDarkTheme } = useContext(PortfolioContext);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate([
        [scope.current, { opacity: 1 }],
        [
          ".skillbox",
          { opacity: 1, scale: 1 },
          { delay: stagger(0.3, { from: "center" }) },
        ],
      ]);
    }
  }, [isInView, animate, scope]);

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0 }}
      className="flex"
      style={{ minHeight: `calc(100vh - ${NavBarHeight}px)` }}
    >
      <div className="w-full flex flex-1 flex-col justify-center">
        <h2 className="skilltitle mt-10 lg:mt-0 text-center text-4xl font-bold mb-8">
          My Skills
        </h2>
        <div className="flex justify-center pb-10">
          <div className="skillcontainer grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 md-mid:grid-cols-3 lg:grid-cols-4 max-w-5xl">
            {skill_data.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                key={index}
                className={`skillbox flex flex-col items-center justify-center p-4 shadow-2xl rounded-lg ${
                  isDarkTheme
                    ? "bg-[#1E1E1E] text-white"
                    : "bg-white text-black"
                } transition-colors duration-500`}
              >
                <div className="iconbox">
                  {skill.Component ? (
                    <skill.Component
                      isDarkTheme={isDarkTheme}
                      height="h-16"
                      margin="mb-2"
                    />
                  ) : (
                    <img
                      className="h-16 w-16 mb-2"
                      src={skill.icon}
                      alt={skill.name}
                    />
                  )}
                </div>
                <h1 className="skilliconname text-lg font-bold whitespace-nowrap">
                  {skill.name}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
