import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import ImageContext from './Components/Context/ImageContext';
import { NavState } from './Components/Atom/atoms';
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import Certification from './Components/Pages/Certification/Certification';
import Skill from './Components/Pages/Skill/Skill';
import NavBar from './Components/Pages/NavBar/NavBar';
import Projects from './Components/Pages/Projects/Projects';

function App() {
  const [logo] = useState('./Assets/Logo.png');
  const [htmllogo] = useState(require('./Assets/html.png'));
  const [csslogo] = useState(require('./Assets/css.png'));
  const [jslogo] = useState(require('./Assets/js.png'));
  const [reactlogo] = useState(require('./Assets/react.png'));
  const [tailwindlogo] = useState(require('./Assets/Tailwind.png'));
  const [gsapanimationlogo] = useState(require('./Assets/Gsap.png'));
  const [pythonlogo] = useState(require('./Assets/py.png'));
  const [canvalogo] = useState(require('./Assets/canva.png'));
  const [certificate1] = useState(require('./Assets/Foundations of User Experience (UX) Design.jpg'));
  const [certificate2] = useState(require('./Assets/Front End Development - HTML.jpg'));
  const [certificate3] = useState(require('./Assets/HTML and CSS in depth.jpg'));
  const [certificate4] = useState(require('./Assets/React Basics.jpg'));
  const [certificate5] = useState(require('./Assets/UI&UX.jpg'));
  const [project1] = useState(require('./Assets/ROCK PAPER SCISSOR.png'));
  const [project3] = useState(require('./Assets/SIMPLE CALCULATOR.png'));
  const [project2] = useState(require('./Assets/Etch-a-Sketch Color Game.png'));
  const [project4] = useState(require('./Assets/Flames.png'));
  const [project5] = useState(require('./Assets/EverGreen.png'));
  const [AboutImage] = useState(require('./Assets/HomeImage.jpg'));
  const [NavImage] = useState(require('./Assets/Navimg.png'));

  const Images = {
    logo,
    htmllogo,
    csslogo,
    tailwindlogo,
    reactlogo,
    jslogo,
    gsapanimationlogo,
    pythonlogo,
    canvalogo,
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
    project1,
    project2,
    project3,
    project4,
    project5,
    AboutImage,
    NavImage
  };

  const [activeButton, setActiveButton] = useRecoilState(NavState);

  const handleMouseEnter = (sectionName) => {
    setActiveButton(sectionName);
  }

  return (
    <ImageContext.Provider value={Images}>
      <div className='bg-black text-white h-screen w-screen font-mate'>
        <div className='h-[7vh] w-full'>
          <NavBar />
        </div>
        <div id='contentcontainer' className='h-[93vh] w-full overflow-scroll'>
          <div name='home' className='h-full w-full' onMouseEnter={() => handleMouseEnter('home')}>
            <Home />
          </div>
          <div name='skill' className='skillcontainer h-full w-full' onMouseEnter={() => handleMouseEnter('skill')}>
            <Skill />
          </div>
          <div name='project' className='projectecontainer h-full w-full' onMouseEnter={() => handleMouseEnter('project')}>
            <Projects />
          </div>
          <div name='Certification' className='Certificatecontainer h-full w-full' onMouseEnter={() => handleMouseEnter('Certification')}>
            <Certification />
          </div>
          <div name='contact' id='contactpage' className='Contactcontainer h-fit w-full' onMouseEnter={() => handleMouseEnter('contact')}>
            <Contact />
          </div>
        </div>
      </div>
    </ImageContext.Provider>
  );
}

export default App;
