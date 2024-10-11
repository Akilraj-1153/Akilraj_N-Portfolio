import project1 from "../assets/Projects/ROCK PAPER SCISSOR.png";
import project2 from "../assets/Projects/Etch-a-Sketch Color Game.png";
import project3 from "../assets/Projects/SIMPLE CALCULATOR.png";
import project4 from "../assets/Projects/Flames.png";
import project5 from "../assets/Projects/EverGreen.png";
import project6 from "../assets/Projects/PGHT-Web.png";
import project7 from "../assets/Projects/PGHT-TAURI.png";
import project8 from "../assets/Projects/CodeTurf.png";
import project9 from "../assets/Projects/BlogNotes.png";
import project0 from "../assets/Projects/Portfolio.png";

import certificate1 from "../assets/Certification/Foundations of User Experience (UX) Design.jpg";
import certificate2 from "../assets/Certification/HTML and CSS in depth.jpg";
import certificate3 from "../assets/Certification/React Basics.jpg";

import HtmlLogo from "../assets/SVG/Tech Icons/HTML5.svg";
import CssLogo from "../assets/SVG/Tech Icons/CSS3.svg";
import JsLogo from "../assets/SVG/Tech Icons/JavaScript.svg";
import ReactLogo from "../assets/SVG/Tech Icons/ReactJS.svg";
import TailwindLogo from "../assets/SVG/Tech Icons/TailwindCSS.svg";
import GitLogo from "../assets/SVG/Tech Icons/Git.svg";
import PythonLogo from "../assets/SVG/Tech Icons/Python.svg";
import CanvaLogo from "../assets/SVG/Tech Icons/Canva.svg";
import GsapLogo from "../assets/SVG/Tech Icons/GSAP2.svg";
import TauriLogo from "../assets/SVG/Tech Icons/Tauri.svg";
import { GitHubSkillIcon } from "./MiniComponents";
import { FramerIcon } from "./MiniComponents";
import { version } from "react-dom";
import { Link } from "react-scroll";

export const NavBar_data = [
  { name: "home" },
  { name: "skills" },
  { name: "projects" },
  { name: "certifications" },
  { name: "contact" },
];

export const skill_data = [
  { name: "HTML5", icon: HtmlLogo },
  { name: "CSS3", icon: CssLogo },
  { name: "JavaScript", icon: JsLogo },
  { name: "ReactJS", icon: ReactLogo },
  { name: "Tailwind CSS", icon: TailwindLogo },
  { name: "Git", icon: GitLogo },
  { name: "GitHub", Component: GitHubSkillIcon },
  { name: "Python", icon: PythonLogo },
  { name: "Tauri", icon: TauriLogo },
  { name: "Framer", Component: FramerIcon },
  { name: "Canva", icon: CanvaLogo },
  { name: "GSAP", icon: GsapLogo },
];

export const projects_data = [
  {
    Title: "BlogNotes",
    Description:
      "BlogNotes is a modern blogging platform built with React JS, Tailwind CSS, Firebase, and MongoDB. It supports account creation, blog publishing, reading, and commenting. The platform offers real-time notifications, user management, and is hosted on Netlify and Render.",
    Image: project9,
    Link: "https://blognotes-pandacloud.netlify.app/",
    TechStack: [
      "reactjs",
      "tailwindcss",
      "firebase",
      "mongodb",
      "netlify",
      "render",
    ],
  },
  {
    Title: "CODE TURF",
    Description:
      "Code Turf integrates React.js, Tailwind CSS, and the Ace Editor API to deliver a seamless coding experience with support for multiple programming languages. It leverages the Piston API to execute and run code, making it an invaluable tool for developers, students, and educators alike.",
    Image: project8,
    Link: "https://akilraj-1153.github.io/Code_Turf-Code_Editor/",
    TechStack: ["reactjs", "tailwindcss", "ace editor", "piston api"],
  },
  {
    Title: "PGHT-WINDOWS APP",
    Description:
      "Boost your personal development journey with our Windows app, powered by Tauri, React.js, Tailwind CSS, and Firebase. Experience seamless habit tracking and goal setting in your desktop environment, with cross-platform compatibility for accessibility across devices. Enjoy security and convenience within the Windows ecosystem.",
    Image: project7,
    Link: "https://drive.usercontent.google.com/download?id=1IekcHNAE4ghYTbAI3mIcVy_PE3_OybVc&export=download&authuser=0",
    TechStack: [TauriLogo, "reactjs", "tailwindcss", "firebase"],
  },
  {
    Title: "PGHT-WEB",
    Description:
      "Track your personal growth effortlessly with our web platform, featuring React.js, Tailwind CSS, and Firebase. Safeguard your progress with robust user authentication, manage habits effortlessly, and customize your profile for your unique journey. Access your data from any browser for convenience wherever you go.",
    Image: project6,
    Link: "https://akilraj-1153.github.io/PGHT-Web/",
    TechStack: ["reactjs", "tailwindcss", "firebase"],
  },
  {
    Title: "EVERGREEN",
    Description:
      "Discover the vibrant spectrum of health benefits offered by our meticulously curated selection of vegetables and fruits at EverGreen.",
    Image: project5,
    Link: "https://akilraj-1153.github.io/EverGreen/",
    TechStack: ["html5", "css3", "js"],
  },
  {
    Title: "FLAMES",
    Description:
      'After being challenged by a "Zoho" interview question, I was inspired to create FLAMES WebApp. FLAMES is a fun game that predicts the relationship between two people based on the acronym: Friends, Lovers, Affectionate, Marriage, Enemies, Siblings.',
    Image: project4,
    Link: "https://akilraj-1153.github.io/Flames_Fun_web_app/",
    TechStack: ["html5", "css3", "js"],
  },
  {
    Title: "ROCK PAPER SCISSOR",
    Description:
      "Enjoy a digital twist on the classic Rock, Paper, Scissors game. Crafted with HTML, CSS, and JavaScript, this interactive experience brings timeless fun to your fingertips.",
    Image: project1,
    Link: "https://akilraj-1153.github.io/Rock_Paper_Scissors/",
    TechStack: ["html5", "css3", "js"],
  },
  {
    Title: "ETCH-A-SKETCH COLOR GAME",
    Description:
      "Immerse yourself in nostalgia with our digital Etch-a-Sketch Color Game. Using HTML, CSS, and JavaScript, this game transforms the classic toy into a vibrant canvas, allowing you to draw and paint with a virtual twist.",
    Image: project2,
    Link: "https://main--top-etch-a-sketch-akil-1153.netlify.app/",
    TechStack: ["html5", "css3", "js"],
  },
  {
    Title: "SIMPLE CALCULATOR",
    Description:
      "Streamline your calculations with our sleek and user-friendly Simple Calculator. Developed using HTML, CSS, and JavaScript, it offers a smooth interface for basic arithmetic, making number crunching a breeze.",
    Image: project3,
    Link: "https://calculator-akil-1153.netlify.app/",
    TechStack: ["html5", "css3", "js"],
  },
  {
    "Title": "MY PORTFOLIO",
    "Description": "Welcome to my portfolio!",
    "Image": project0,
    "version": [
      {
        "versionNo": "v1",
        "Link": "https://akilraj-1153.github.io/AKILRAJ-N-Portfolio-V1/"
      },
      {
        "versionNo": "v2",
        "Link": "https://akilraj-1153.github.io/AKILRAJ-N-Portfolio-V2/"
      },
      {
        "versionNo": "v3",
        "Link": "https://akilraj-1153.github.io/AKILRAJ-N-Portfolio-V3/"
      },
      {
        "versionNo": "v4",
        "Link": "https://akilraj-1153.github.io/Akilraj_N-Portfolio/"
      }
    ],
    "TechStack": ["html5", "css3", "js", "Reactjs", "Tailwind"]
  }

];

export const certificate_data = [
  {
    title: "Foundations of User Experience (UX) Design",
    issuedBy: "Google via Coursera",
    date: "Month Year 1",
    logo: "path/to/logo1.png",
    image: certificate1,
    description:
      "This certification covers the principles of user experience design, including user research and usability testing. You'll learn to create user-centered designs that enhance user satisfaction.",
    link: "http://link-to-certification1.com",
  },
  {
    title: "HTML and CSS in Depth",
    issuedBy: "Meta via Coursera",
    date: "Month Year 3",
    logo: "path/to/logo3.png",
    image: certificate2,
    description:
      "Delve deeper into HTML and CSS to create visually appealing and responsive websites. This certification focuses on layout techniques, Flexbox, and Grid.",
    link: "http://link-to-certification3.com",
  },
  {
    title: "React Basics",
    issuedBy: "Meta via Coursera",
    date: "Month Year 4",
    logo: "path/to/logo4.png",
    image: certificate3,
    description:
      "Learn the fundamentals of React, a popular JavaScript library for building user interfaces. This course covers components, state management, and lifecycle methods.",
    link: "http://link-to-certification4.com",
  },
];
