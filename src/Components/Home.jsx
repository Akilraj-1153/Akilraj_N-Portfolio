import React, { useContext } from "react";
import { motion } from "framer-motion";
import { NavContext } from "../App";
import Profile from "./Profile";

const Home = () => {
  const {setCurrentNavBtn } = useContext(NavContext);

  return (
    <motion.div
      onViewportEnter={() => setCurrentNavBtn("home")}
      viewport={{ once: false, amount: 0.1 }}
      className="min-h-full max-w-xl"
    >
      <Profile />
    </motion.div>
  );
};

export default Home;
