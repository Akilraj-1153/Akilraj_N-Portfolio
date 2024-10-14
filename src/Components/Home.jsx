import React from "react";
import { useContext } from "react";
import { PortfolioContext } from "../App";
import Profile from "./Profile";

const Home = () => {
  const { NavBarHeight } = useContext(PortfolioContext);
  return (
    <div
      className={`flex justify-center`}
      style={{ minHeight: `calc(100vh - ${NavBarHeight}px)` }}
    >
      <div className="flex  flex-1 max-w-xl">
        <Profile></Profile>
      </div>
    </div>
  );
};

export default Home;
