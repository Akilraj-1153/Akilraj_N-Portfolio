import React from "react";
import { useContext } from "react";
import { PortfolioContext } from "../App";
import { projects_data } from "./Data";
import { ExternalLink } from "react-external-link";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import { useEffect } from "react";

const Projects = () => {
  const { NavBarHeight, isDarkTheme } = useContext(PortfolioContext);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate([[scope.current, { opacity: 1 }]]);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0 }}
      className={` flex flex-1`}
      style={{ minHeight: `calc(100vh - ${NavBarHeight}px)` }}
    >
      <div className=" w-full  flex-1">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 font-mateSc">
          Projects
        </h2>
        <div className={`flex flex-col items-center p-2 gap-2`}>
          {projects_data.map((projects, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`max-w-4xl shadow-2xl rounded-lg flex flex-col items-center
                ${
                  isDarkTheme
                    ? "bg-[#1E1E1E] text-white"
                    : "bg-white text-black"
                }
            `}
            >
              <div className="relative">
                <img
                  src={projects.Image}
                  alt=""
                  className="h-full w-full rounded-t-lg"
                />
                <div
                  className={`absolute backdrop-blur-lg bg-[#1E1E1E]/50 text-white rounded-b-lg flex flex-col items-center gap-2 bottom-0 p-3 w-full font-bold text-center transition-colors duration-500`}
                >
                  <h1 className="text-xl md:text-3xl uppercase">
                    {projects.Title}
                  </h1>
                  <div>
                    {projects.Link && (
                      <ExternalLink href={projects.Link}>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                          className={`capitalize cursor-pointer h-fit w-fit whitespace-nowrap text-center px-6 py-2 rounded-lg text-lg font-semibold  ${
                            isDarkTheme
                              ? "bg-white text-black "
                              : "bg-white text-black"
                          } transition-colors duration-500`}
                        >
                          {index === 2 ? "Download App" : "Visit Page"}
                        </motion.button>
                      </ExternalLink>
                    )}

                    {projects.version && (
                      <motion.div className="flex gap-2">
                        {projects.version.map((version, i) => (
                          <ExternalLink key={i} href={version.Link}>
                            <button
                              className={`capitalize cursor-pointer text-center h-10 w-10  rounded-full text-lg font-semibold bg-white text-black hover:text-white hover:bg-[#1E1E1E] transition-colors duration-500`}
                            >
                              {version.versionNo}
                            </button>
                          </ExternalLink>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-md lg:text-lg text-justify  p-4">
                {projects.Description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
