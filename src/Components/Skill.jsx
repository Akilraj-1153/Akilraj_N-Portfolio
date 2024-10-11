import React from "react";
import { skill_data } from "./Data";
import { useContext } from "react";
import { NavContext } from "../App";
import { motion } from "framer-motion";
import { useInView, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { stagger } from "framer-motion";

const Skill = () => {
  const { currentNavBtn, setCurrentNavBtn, isDarkTheme } =
    useContext(NavContext);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate([
        [scope.current, { opacity: 1 }],
        [
          ".skillbox",
          { opacity: 1, scale: 1 },
          { delay: stagger(0.2, { from: "center" }) },
        ],
      ]);
    }
  }, [isInView]);

  return (
    <motion.div
      onViewportEnter={() => setCurrentNavBtn("skills")}
      viewport={{ once: false, amount: 0.9 }}
      className={`min-h-full w-full flex flex-col items-center justify-center ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
    >
      <div className="py-2">
        <h2 className="skilltitle text-center text-4xl font-bold mb-8 transition-colors duration-500">
          My Skills
        </h2>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            ref={scope}
            className="skillcontainer grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 md-mid:grid-cols-3 lg:grid-cols-4 max-w-5xl"
          >
            {skill_data.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ scale: 1 }}
                key={index}
                className={`skillbox flex flex-col items-center justify-center p-4 shadow-2xl rounded-lg ${
                  isDarkTheme
                    ? "bg-[#1E1E1E] text-white"
                    : "bg-white text-black"
                } transition-colors duration-500`}
              >
                <div className="iconbox">
                  {skill.Component ? (
                    <skill.Component isDarkTheme={isDarkTheme} height={"h-16"} margin={"mb-2"} />
                  ) : (
                    <img
                      className="h-16 w-16 mb-2"
                      src={skill.icon}
                      alt={skill.name}
                    />
                  )}
                </div>

                <h1 className="skilliconname text-lg font-bold">
                  {skill.name}
                </h1>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
