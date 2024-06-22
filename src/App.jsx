import React from 'react';
import NavBar from './Components/Pages/NavBar/NavBar';
import Navbarimg from './Assets/Navimg.png';
import Home from './Components/Pages/Home/Home';
import myPhoto from './Assets/HomeImage.jpg';
import { RecoilRoot, useRecoilState } from 'recoil';
import Contact from './Components/Pages/Contact/Contact';
import { NavState } from './Components/Atom/atoms';
import Projects from './Components/Pages/Projects/Projects';
import Certification from './Components/Pages/Certification/Certification';
import Skill from './Components/Pages/Skill/Skill';
import useIntersectionObserver from './Components/Hook/useIntersectionObserver';

function App() {
  const [activeLink, setActiveLink] = useRecoilState(NavState);

  useIntersectionObserver(setActiveLink);

  return (
    <div className='fullcontainer h-screen w-screen gap-2 flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 to-slate-500'>
      <div className='navbarcontainer h-[8vh] w-full p-1 rounded-lg'>
        <NavBar logo={Navbarimg} />
      </div>
      <div id='contentcontainer' className='maincontainer h-fit w-full p-1 rounded-lg overflow-scroll gap-2 flex flex-col'>
        <div name='home' className='section' >
          <Home myimage={myPhoto} />
        </div>
        <div name='skill' className='skillcontainer section'>
          <Skill />
        </div>
        <div name='project' className='projectcontainer section'>
          <Projects />
          <div name='Certification' className='Certificatecontainer section'>
            <Certification />
          </div>
        </div>
        <div name='contact' id='contactpage' className='Contactcontainer section'>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
