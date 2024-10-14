import React, { useContext } from "react";
import { PortfolioContext } from "../App";
import { projects_data } from "./Data";
import { ExternalLink } from "react-external-link";

const Projects = () => {
  const { NavBarHeight, isDarkTheme } = useContext(PortfolioContext);

  return (
    <div
      className="flex flex-1"
      style={{ minHeight: `calc(100vh - ${NavBarHeight}px)` }}
    >
      <div className="w-full flex-1">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 font-mateSc">
          Projects
        </h2>
        <div className="flex flex-col items-center p-2 gap-5 pb-10">
          {projects_data.map((projects, index) => (
            <div
              key={index}
              className={`max-w-4xl shadow-2xl rounded-lg flex flex-col items-center transition-colors duration-500 ${
                isDarkTheme ? "bg-[#1E1E1E] text-white" : "bg-white text-black"
              }`}
            >
              <div className="relative">
                <img
                  src={projects.Image}
                  alt=""
                  className="h-full w-full rounded-t-lg"
                />
                <div className="absolute backdrop-blur-lg bg-[#1E1E1E]/50 text-white  flex flex-col items-center gap-2 bottom-0 p-3 w-full font-bold text-center transition-colors duration-500">
                  <h1 className="text-xl md:text-3xl uppercase">
                    {projects.Title}
                  </h1>
                  <div>
                    {projects.Link && (
                      <ExternalLink href={projects.Link}>
                        <button className="capitalize cursor-pointer h-fit w-fit whitespace-nowrap text-center px-6 py-2 rounded-lg text-lg font-semibold transition-colors duration-500 bg-white text-black">
                          {index === 2 ? "Download App" : "Visit Page"}
                        </button>
                      </ExternalLink>
                    )}

                    {projects.version && (
                      <div className="flex gap-2">
                        {projects.version.map((version, i) => (
                          <ExternalLink key={i} href={version.Link}>
                            <button className="capitalize cursor-pointer text-center h-10 w-10 rounded-full text-lg font-semibold bg-white text-black hover:text-white hover:bg-[#1E1E1E] transition-colors duration-500">
                              {version.versionNo}
                            </button>
                          </ExternalLink>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-md lg:text-lg text-justify p-4">
                {projects.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
