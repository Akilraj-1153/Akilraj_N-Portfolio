import React from 'react'
import NavBar from './Components/Pages/NavBar/NavBar'
import Navbarimg from './Assets/Navimg.png'
import Home from './Components/Pages/Home/Home'
import myPhoto from './Assets/HomeImage.jpg'
import { RecoilRoot } from 'recoil'
import Contact from './Components/Pages/Contact/Contact'
import { useRecoilState } from 'recoil'
import { NavState } from './Components/Atom/atoms'
import Projects from './Components/Pages/Projects/Projects'
import Certification from './Components/Pages/Certification/Certification'
import Skill from './Components/Pages/Skill/Skill'


function App() {
  


  const [activeButton, setActiveButton] = useRecoilState(NavState);

  const handleMouseEnter = (sectionName) => {
    setActiveButton(sectionName);
  }


  return (
  <RecoilRoot>

      <div className='fullcontainer h-screen w-screen gap-2 flex flex-col overflow-hidden  bg-gradient-to-br from-slate-900 to-slate-500'>
        <div className='navbarcontainer h-[8vh] w-full p-1 rounded-lg '>
            <NavBar logo={Navbarimg}></NavBar>
        </div>
        <div id='contentcontainer' className='maincontainer  h-fit w-full p-1 rounded-lg  overflow-scroll gap-2 flex flex-col'>
          <div name='home'  onMouseEnter={() => handleMouseEnter('home')}>
          <Home myimage={myPhoto}></Home>

          </div>
          <div name='skill' className='skillcontainer h-full w-full' onMouseEnter={() => handleMouseEnter('skill')}>
            <Skill />
          </div>
          <div name='project' className='projectecontainer r' onMouseEnter={() => handleMouseEnter('project')}>
          <Projects></Projects>

          <div name='Certification' className='Certificatecontainer' onMouseEnter={() => handleMouseEnter('Certification')}>
            <Certification />
          </div>

          </div>
          <div name='contact' id='contactpage' className='Contactcontainer ' onMouseEnter={() => handleMouseEnter('contact')}>
          <Contact></Contact>

          </div>
        </div>
      </div>
  </RecoilRoot>

  )
}

export default App