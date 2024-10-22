import React, { useContext, useEffect } from "react";
import { PortfolioContext } from "../App";
import { certificate_data } from "./Data";
import { ExternalLink } from "react-external-link";
import { motion, useAnimate, useInView, stagger } from "framer-motion";

const Certifications = () => {
  const { NavBarHeight, isDarkTheme } = useContext(PortfolioContext);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { opacity: 1 }, // Animation for the main element
        { duration: 0.5 } // Adjust the duration as needed
      );
  
      animate(
        ".certificationbox",
        { opacity: 1, scale: 0.95 }, // Animation for certification boxes
        {
          delay: stagger(0.3, { startDelay: 0.2, from: "first" }), // Adding stagger delay from the center
          duration: 0.5, // Duration for each element animation
          ease:"easeIn"
        }
      );
    }
  }, [isInView]);

  return (
    <motion.div
      ref={scope}
      className={`flex flex-1`}
      style={{ minHeight: `calc(100vh - ${NavBarHeight}px)` }}
      initial={{ opacity: 0 }}
    >
      <div className={`w-full flex-1`}>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 font-mateSc">
          Certifications
        </h2>

        <div className="w-full flex justify-center px-4 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {certificate_data.map((certificateItem, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1 }}
                className={`certificationbox shadow-2xl transition-all duration-500 pb-6 max-w-sm p-2 rounded-lg flex gap-2 flex-col items-center justify-between ${
                  isDarkTheme ? "bg-[#1E1E1E] text-white" : "bg-white text-black"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
              >
                <div className="flex flex-col">
                  <motion.img
                    src={certificateItem.image}
                    className="h-auto w-auto rounded-lg"
                    alt={certificateItem.title}
                  />
                  <motion.h1
                    className="p-2 text-center font-bold text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {certificateItem.title}
                  </motion.h1>
                  <h1 className="p-2 text-center text-md">
                    Issued by {certificateItem.issuedBy}
                  </h1>
                  <p className="text-justify px-2 pb-2 text-lg">
                    {certificateItem.description}
                  </p>
                </div>

                <ExternalLink href={certificateItem.link}>
                  <motion.button
                    className={`capitalize cursor-pointer h-fit w-fit whitespace-nowrap text-center px-6 py-2 rounded-lg text-lg font-semibold border ${
                      isDarkTheme
                        ? "bg-white text-black border-white"
                        : "bg-black text-white border-black"
                    } transition-colors duration-500`}
                    whileHover={{ scale: 1.1 }}
                  >
                    View Certificate
                  </motion.button>
                </ExternalLink>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
