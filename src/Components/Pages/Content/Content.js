import Home from '../Home/Home'
import Skill from '../Skill/Skill'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useRecoilState } from 'recoil'
import { NavState } from '../../Atom/atoms'
import NavBar from '../NavBar/NavBar'
import Contact from '../Contact/Contact'
import Certification from '../Certification/Certification'
import Projects from '../Projects/Projects'


function Content() {

const [activeButton, setActiveButton] = useRecoilState(NavState);
  const handleMouseEnter = (sectionName) => {
        setActiveButton(sectionName);
      }


 
  return (
    <div className='bg-black text-white h-screen w-screen font-mate'>
        <div className='h-[7vh] w-full '>
          <NavBar></NavBar>
        </div>
        <div id='contentcontainer' className='h-[93vh] w-full overflow-scroll '>
          <div name='home' className='h-full w-full' onMouseEnter={() => handleMouseEnter('home')}>
             <Home></Home>
          </div>
          <div name='skill' className='skillcontainer h-full w-full' onMouseEnter={() => handleMouseEnter('skill')}>
             <Skill></Skill>
          </div>
          <div name='project' className='projectecontainer h-full w-full' onMouseEnter={() => handleMouseEnter('project')}>
             <Projects></Projects>
          </div>
          <div name='Certification' className='Certificatecontainer h-full w-full' onMouseEnter={() => handleMouseEnter('Certification')}>
             <Certification></Certification>
          </div>
          <div name='contact' className='Contactcontainer h-full w-full' onMouseEnter={() => handleMouseEnter('contact')}>
             <Contact></Contact>
          </div>
        </div>
      </div>
  )
}

export default Content
