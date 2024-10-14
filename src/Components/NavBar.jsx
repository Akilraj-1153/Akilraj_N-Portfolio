import React, { useRef, useEffect, useState, useContext } from "react";
import { Menu, NavButtons, Name } from "./MiniComponents";
import MoonIcon from "../assets/SVG/Others/Moon.svg";
import SunIcon from "../assets/SVG/Others/Sun.svg";
import { NavBar_data } from "./Data";
import { PortfolioContext } from "../App";

const NavBar = ({ onHeightChange }) => {
  const navbarRef = useRef();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { currentNavBtn, setCurrentNavBtn, isDarkTheme, setIsDarkTheme } =
    useContext(PortfolioContext);

  const handleToggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("PortfolioDarkTheme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    if (navbarRef.current) {
      onHeightChange(navbarRef.current.offsetHeight);
    }
  }, [onHeightChange]);

  return (
    <div ref={navbarRef} className="p-2 font-GowunBatang">
      <div className="flex items-center justify-between md:justify-center">
        <div className="md:hidden">
          <Name isDarkTheme={isDarkTheme} height="h-14" />
        </div>
        <div className="NavBtns hidden md:flex gap-5">
          {NavBar_data.map((navItem, i) => (
            <NavButtons
              key={i}
              navItem={navItem}
              setCurrentNavBtn={setCurrentNavBtn}
              currentNavBtn={currentNavBtn}
              isDarkTheme={isDarkTheme}
            />
          ))}
        </div>
        <div className="flex items-center">
          <div onClick={handleToggleTheme} className="px-4">
            <img
              src={isDarkTheme ? SunIcon : MoonIcon}
              className="h-10 w-10 absolute top-4 md:right-4 md:top-1 right-14 cursor-pointer transition duration-500"
              alt="Theme Toggle"
            />
          </div>
          <Menu
            isDarkTheme={isDarkTheme}
            isMobileNavOpen={isMobileNavOpen}
            setIsMobileNavOpen={setIsMobileNavOpen}
          />
        </div>
      </div>
      {isMobileNavOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          {NavBar_data.map((navItem, i) => (
            <NavButtons
              key={i}
              navItem={navItem}
              setCurrentNavBtn={setCurrentNavBtn}
              currentNavBtn={currentNavBtn}
              isDarkTheme={isDarkTheme}
              setIsMobileNavOpen={setIsMobileNavOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
