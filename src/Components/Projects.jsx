import React, { useContext } from "react";
import { projects_data } from "./Data";
import { ExternalLink } from "react-external-link";
import { NavContext } from "../App";
import { motion } from "framer-motion";

const Projects = () => {
  const { currentNavBtn, setCurrentNavBtn, isDarkTheme } =
    useContext(NavContext);

  return (
    <motion.div
      onViewportEnter={() => setCurrentNavBtn("projects")}
      viewport={{ once: true, amount: 0.5 }}
      className={`min-h-full w-full transition-all duration-500 ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
    >
      <div className="w-full pb-16">
        <div className="py-2">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Projects
          </h2>
          <div className="flex px-2 md:px-4 flex-col gap-4 w-full items-center">
            {projects_data.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`projectbox ${
                  isDarkTheme
                    ? "bg-[#1E1E1E] text-white"
                    : "bg-white text-black"
                } p-2 shadow-2xl max-w-xl flex flex-col items-center rounded-lg w-full md:max-w-4xl transition-colors duration-500`}
              >
                <div className="relative w-full flex justify-center">
                  <img
                    src={project.Image}
                    className="rounded-lg aspect-video w-full"
                    alt={project.Title}
                  />
                  <div
                    className={`absolute backdrop-blur-lg bg-[#1E1E1E]/50 text-white rounded-b-lg flex flex-col items-center gap-2 bottom-0 p-3 w-full font-bold text-center transition-colors duration-500`}
                  >
                    <h1 className="text-xl md:text-3xl uppercase">
                      {project.Title}
                    </h1>
                    {project.Link && (
                      <ExternalLink href={project.Link}>
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

                    {project.version && (
                      <div className="flex gap-2">
                        {project.version.map((version, i) => (
                          <ExternalLink href={version.Link}>
                            <button
                              className={`capitalize cursor-pointer text-center h-10 w-10  rounded-full text-lg font-semibold bg-white text-black hover:text-white hover:bg-[#1E1E1E] transition-colors duration-500`}
                            >
                              {version.versionNo}
                            </button>
                          </ExternalLink>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center p-2">
                  <p className="text-md lg:text-lg text-center">
                    {project.Description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
