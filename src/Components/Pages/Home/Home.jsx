import React from 'react';
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-scroll';
import { useRecoilState } from 'recoil';
import { NavState } from '../../Atom/atoms';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ImLinkedin } from "react-icons/im";
import { FaSquareGithub } from "react-icons/fa6";
import { ImMail } from "react-icons/im";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";

function Home({ myimage }) {
  const [activeLink, setActiveLink] = useRecoilState(NavState);

  function handleActive(id) {
    setActiveLink(id);
  }
  
  
  useGSAP(() => {
    const tl = gsap.timeline({ });
    tl.fromTo(
      '.homeimg',
      { scale: 0.7 },
      { scale: 1, duration: 0.5, ease: 'power2.out' },
      
    )
    tl.fromTo(
      '.hiText, .hiTextpc',
      { scale: 0 },
      { scale: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(
      '.name, .namepc',
      { scale: 0, y: -100 },
      { scale: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.4' // Overlap with previous animation
    )
    .fromTo(
      '.role, .rolepc',
      { scale: 0 },
      { scale: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.4' // Overlap with previous animation
    )
    .fromTo(
      '.homecontent',
      { scale: 0 },
      { scale: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.4' // Overlap with previous animation
    )
    .fromTo(
      '.contacticon, .contacticonpc',
      { scale: 0, y: 100 },
      { scale: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.4' // Overlap with previous animation
    );
  });
  
  
  return (
    <div className='h-[90vh] w-full flex flex-col bg-blac rounded-lg lg:flex-row gap-2 overflow-hidden '>

      <div className='h-[55%] w-full lg:h-full lg:w-[30%]  rounded-lg flex justify-center items-end'>
        <div className='h-full w-[80%] gap-2 flex justify-center items-center flex-col'>
          <div className='max-h-[75%] lg:h-[60vh] p-2 w-auto max-w-[90%] rounded-xl'>
            <img className='homeimg max-h-full h-auto w-full rounded-lg' src={myimage} alt="Profile" />
          </div>
          <div className='h-[25%] w-full text-white font-mateSc flex flex-col justify-center items-center lg:hidden'>
            <div className='flex'>
              <h1 className='hiText'>H</h1>
              <h1 className='hiText'>I</h1>
              <span className='px-1'></span>
              <h1 className='hiText'>👋🏽</h1>
            </div>
            <div className='flex'>
              <h1 className='hiText'>I</h1>
              <span></span>
              <h1 className='hiText'>a</h1>
              <h1 className='hiText'>m</h1>
              <span className='px-1'></span>
              <h1 className='text-xl text-red-500 name font-Protest'>A</h1>
              <h1 className='text-xl text-red-500 name font-Protest'>K</h1>
              <h1 className='text-xl text-red-500 name font-Protest'>I</h1>
              <h1 className='text-xl text-red-500 name font-Protest'>L</h1>
              <h1 className='text-xl text-red-500 name font-Protest'>R</h1>
              <h1 className='text-xl text-red-500 name font-Protest'>A</h1>
              <h1 className='text-xl text-red-500 name font-Protest'>J</h1>
              <span className='px-1'></span>
              <h1 className='text-xl text-red-500 name font-Protest'>N</h1>


            </div>
            <div className='flex'>
              <h1 className='role'>F</h1>
              <h1 className='role'>R</h1>
              <h1 className='role'>O</h1>
              <h1 className='role'>N</h1>
              <h1 className='role'>T</h1>
              <h1 className='role'>E</h1>
              <h1 className='role'>N</h1>
              <h1 className='role'>D</h1>
              <span className='px-1'></span>
              <h1 className='role'>D</h1>
              <h1 className='role'>E</h1>
              <h1 className='role'>V</h1>
              <h1 className='role'>E</h1>
              <h1 className='role'>L</h1>
              <h1 className='role'>O</h1>
              <h1 className='role'>P</h1>
              <h1 className='role'>E</h1>
              <h1 className='role'>R</h1>
            </div>
          </div>
        </div>
        <div className='h-full w-fit flex flex-col justify-around p-2 items-end md:hidden'>
          <SocialIcon url='https://www.linkedin.com/in/akilrajn1153' icon={<ImLinkedin size={35} color='white' />} />
          <SocialIcon url='https://github.com/Akilraj-1153' icon={<FaSquareGithub size={37} color='white' />} />
          <Link to='contact' containerId='contentcontainer' smooth={true} onClick={() => handleActive('contact')}>
            <div className='contacticon z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center'>
              <ImMail size={35} color='white' />
            </div>
          </Link>
          <Link to='contact' containerId='contentcontainer' smooth={true} onClick={() => handleActive('contact')}>
            <div className='contacticon z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center'>
              <FaSquarePhone size={35} color='white' />
            </div>
          </Link>
          <SocialIcon url='https://wa.me/919840899656' icon={<FaSquareWhatsapp  size={35} color='white' />} />
        </div>
      </div>

      <div className='h-[45%] text-white w-full lg:h-full  lg:w-[70%]  rounded-lg overflow-auto flex lg:justify-center lg:items-center flex-col gap-5 justify-start items-start lg:p-10'>
        <div className='h-fit text-white w-full font-mateSc flex-col hidden lg:flex gap-2'>
          <div className='flex text-4xl'>
            <h1 className='hiTextpc'>H</h1>
            <h1 className='hiTextpc'>I</h1>
            <span className='px-1'></span>
            <h1 className='hiTextpc'>👋🏽</h1>
          </div>
          <div className='flex text-4xl items-center'>
            <h1 className='hiTextpc'>I</h1>
            <span></span>
            <h1 className='hiTextpc'>a</h1>
            <h1 className='hiTextpc'>m</h1>
            <span className='px-2'></span>
            <h1 className='text-6xl text-red-500 namepc  font-Protest'>A</h1>
            <h1 className='text-6xl text-red-500 namepc  font-Protest'>K</h1>
            <h1 className='text-6xl text-red-500 namepc  font-Protest'>I</h1>
            <h1 className='text-6xl text-red-500 namepc  font-Protest'>L</h1>
            <h1 className='text-6xl text-red-500 namepc  font-Protest'>R</h1>
            <h1 className='text-6xl text-red-500 namepc  font-Protest'>A</h1>
            <h1 className='text-6xl text-red-500 namepc  font-Protest'>J</h1>
            <span className='px-2'></span>
            <h1 className='text-6xl text-red-500 namepc  font-Protest'>N</h1>


          </div>
          <div className='flex text-4xl'>
            <h1 className='rolepc'>F</h1>
            <h1 className='rolepc'>R</h1>
            <h1 className='rolepc'>O</h1>
            <h1 className='rolepc'>N</h1>
            <h1 className='rolepc'>T</h1>
            <h1 className='rolepc'>E</h1>
            <h1 className='rolepc'>N</h1>
            <h1 className='rolepc'>D</h1>
            <span className='px-2'></span>
            <h1 className='rolepc'>D</h1>
            <h1 className='rolepc'>E</h1>
            <h1 className='rolepc'>V</h1>
            <h1 className='rolepc'>E</h1>
            <h1 className='rolepc'>L</h1>
            <h1 className='rolepc'>O</h1>
            <h1 className='rolepc'>P</h1>
            <h1 className='rolepc'>E</h1>
            <h1 className='rolepc'>R</h1>
          </div>
        </div>
        <p className=' homecontent text-justify px-3 lg:text-2xl lg:p-0 text-lg text-white font-mate lg:mr-20'>
          I love taking on new tasks and developing my skill set. I'm committed to using my experience to advance the development and success of organizations. My artistic vision enhances my development job and photographic activities, and my proactive approach to mastering new technologies keeps me ahead of industry trends. I work best in fast-paced settings that promote creativity, and I'm dedicated to bringing new ideas to bear in order to further team goals.
        </p>
        <div className='h-fit w-full justify-center gap-5 p-2 items-end py-4 hidden md:flex'>
          <SocialIcon url='https://www.linkedin.com/in/akilrajn1153' icon={<ImLinkedin size={35} color='white' />} />
          <SocialIcon url='https://github.com/Akilraj-1153' icon={<FaSquareGithub size={40} color='white' />} />
          <Link to='contact' containerId='contentcontainer' smooth={true} onClick={() => handleActive('contact')}>
            <div className='contacticonpc z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center'>
              <ImMail size={35} color='white' />
            </div>
          </Link>
          <Link to='contact' containerId='contentcontainer' smooth={true} onClick={() => handleActive('contact')}>
            <div className='contacticonpc z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center'>
              <FaSquarePhone size={40} color='white' />
            </div>
          </Link>
          <SocialIcon url='https://wa.me/919840899656' icon={<FaSquareWhatsapp size={40} color='white' />} />
        </div>
      </div> 
    </div>
  );
}

function SocialIcon({ url, icon }) {
  return (
    <ExternalLink href={url}>
      <div className='contacticonpc z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center'>
        {icon}
      </div>
    </ExternalLink>
  );
}

export default Home;
