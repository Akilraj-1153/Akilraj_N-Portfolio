import React, { useEffect, useContext } from "react";
import { certificate_data } from "../Components/Data";
import { ExternalLink } from "react-external-link";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import { NavContext } from "../App";

const Certifications = () => {
  const { setCurrentNavBtn, isDarkTheme } = useContext(NavContext);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate([
        [scope.current, { opacity: 1 }],
        [
          ".certificationbox",
          { opacity: 1, scale: 1 },
          { delay: stagger(0.7, { from: "first" }) },
        ],
      ]);
    }
  }, [isInView, animate, scope]);

  return (
    <motion.div
      onViewportEnter={() => setCurrentNavBtn("certifications")}
      viewport={{ once: true, amount: 0.5 }}
      className={`min-h-full w-full transition-all duration-500 ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
    >
      <div className="w-full h-full py-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 font-mateSc">
          Certifications
        </h2>
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          className="max-w-7xl flex justify-center px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {certificate_data.map((certificateItem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`certificationbox transition-all duration-500  pb-6 max-w-sm p-2 rounded-lg flex gap-2 flex-col items-center justify-between ${
                  isDarkTheme
                    ? "bg-[#1E1E1E] text-white"
                    : "bg-white text-black"
                }`}
              >
                <div>
                  <img
                    src={certificateItem.image}
                    className="h-auto w-auto rounded-lg"
                    alt={certificateItem.title}
                  />
                  <h1 className="p-2 text-center font-bold text-xl">
                    {certificateItem.title}
                  </h1>
                  <h1 className="p-2 text-center text-md">
                    Issued by {certificateItem.issuedBy}
                  </h1>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-justify px-2 pb-2">
                    {certificateItem.description}
                  </p>
                  <ExternalLink href={certificateItem.link}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                      className={`capitalize cursor-pointer h-fit w-fit whitespace-nowrap text-center px-6 py-2 rounded-lg text-lg font-semibold border ${
                        isDarkTheme
                          ? "bg-white text-black border-white"
                          : "bg-black text-white border-black"
                      } transition-colors duration-500`}
                    >
                      View Certificate
                    </motion.button>
                  </ExternalLink>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certifications;
