import React, {  useState,useEffect } from 'react';
import { ToogleNavstate, Tooglestate, NavState } from '../../Atom/atoms'
import { useRecoilState } from 'recoil';
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from 'react-scroll';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import { ExternalLink } from 'react-external-link';

function NavBar({logo}) {

    const [toogleNavbar, setToggleNavbar] = useRecoilState(Tooglestate);
    const [toogleNavbarState, setToggleNavbarState] = useRecoilState(ToogleNavstate);
    const [activeLink, setActiveLink] = useRecoilState(NavState);
    const [firstclick,setFirstclick] =useState(true)

    function handleClick() {
        setToggleNavbar(!toogleNavbar);
        setToggleNavbarState(!toogleNavbarState);
        if (firstclick) {
            setFirstclick(false);
          }
    }

    function handleactive(id) {
        setActiveLink(id);
    }
    
      useEffect(()=>{
        if (!firstclick) {
        navanimate();
        }
    
      },[firstclick])
    
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo('.navlogo', { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo('.navbarmenu', { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
        tl.fromTo('.navbarelement', { x: -100, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5 });
    });

    function navanimate() {
        const tl = gsap.timeline();
        tl.fromTo('.mobileelement', { x: -100, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5 });
      }


  return (
    <div className='navbar flex flex-col gap-2  '>
        <div className='h-[7vh] w-full bg-black flex rounded-lg'>
            <ExternalLink href='https://github.com/Akilraj-1153'>
            <img className='h-full w-auto navlogo' src={logo}></img>
            </ExternalLink>
            <div className='h-full w-[90%] lg:w-[95%] text-xl gap-2 hidden md:flex justify-end font-mateSc items-center '>
                        <Link onClick={() => { handleactive('home')}} to='home' containerId='contentcontainer' smooth={true} className={`${activeLink === 'home' ? 'text-red-500 focus:text-red-500 ' : 'text-white'} navbarelement cursor-pointer justify-center items-center flex h-[5vh] w-fit p-2`}>Home</Link>
                        <Link onClick={() => { handleactive('skill')}} to='skill' containerId='contentcontainer' smooth={true} className={`${activeLink === 'skill' ? 'text-red-500 focus:text-red-500 ' : 'text-white'} navbarelement cursor-pointer justify-center items-center flex h-[5vh] w-fit p-2`}>Skill</Link>
                        <Link onClick={() => { handleactive('project')}} to='project' containerId='contentcontainer' smooth={true} className={`${activeLink === 'project' ? 'text-red-500 focus:text-red-500 ' : 'text-white'} navbarelement cursor-pointer justify-center items-center flex h-[5vh] w-fit p-2`}>Project</Link>
                        <Link onClick={() => { handleactive('Certification')}} to='Certification' containerId='contentcontainer' smooth={true} className={`${activeLink === 'Certification' ? 'text-red-500 focus:text-red-500 ' : 'text-white'} navbarelement cursor-pointer justify-center items-center flex h-[5vh] w-fit p-2`}>Certification</Link>
                        <Link onClick={() => { handleactive('contact')}} to='contact' containerId='contentcontainer' smooth={true} className={`${activeLink === 'contact' ? 'text-red-500 focus:text-red-500 ' : 'text-white'} navbarelement cursor-pointer justify-center items-center flex h-[5vh] w-fit p-2`}>Contact</Link>
            </div>
            <div className='navbarmenu md:hidden flex h-full w-[95%] justify-end items-center' onClick={handleClick}>
            {toogleNavbar ? (
                            <div className='cursor-pointer flex h-[5vh] w-full p-2 justify-end items-center'>
                                <RiMenuUnfoldFill  color='white' size={30} />
                            </div>
                        ) : (
                            <div className='cursor-pointer justify-end items-center flex h-[5vh] w-full p-2'>
                                <RiMenuFoldFill  color='white' size={30} />
                            </div>
            )}
            </div>
        
        </div>
        {toogleNavbarState &&
        <div className='md:hidden h-[30vh] w-full bg-black rounded-lg  font-mateSc z-40 text-white p-2 text-lg flex flex-col justify-end  '>
                      <div className='flex z-40  flex-col  h-full w-full justify-around '>
                        <Link onClick={() => { handleClick();  handleactive('home'); }} to='home' containerId='contentcontainer' smooth={true} className={`${activeLink === 'home' ? 'text-red-500 focus:text-red-500 ' : 'text-white'} mobileelement cousor-pointer justify-end items-center flex h-[5vh] w-full `}>Home</Link>
                        <Link onClick={() => { handleClick(); handleactive('skill'); }} to='skill' containerId='contentcontainer' smooth={true}  className={`${activeLink === 'skill' ? 'text-red-500 focus:text-red-500 ' : 'text-white'} mobileelement cousor-pointer justify-end items-center flex h-[5vh] w-full`}>Skill</Link>
                        <Link onClick={() => { handleClick();  handleactive('project'); }} to='project' containerId='contentcontainer' smooth={true}  className={`${activeLink === 'project' ? 'text-red-500 focus:text-red-500 ' : 'text-white'} mobileelement cursor-pointer justify-end items-center flex h-[5vh] w-full `}>Project</Link>
                        <Link onClick={() => { handleClick();  handleactive('Certification'); }} to='Certification' containerId='contentcontainer' smooth={true} className={`${activeLink === 'Certification' ? 'text-red-500 focus:text-red-500 ' : 'text-white'} mobileelement cousor-pointer justify-end items-center flex h-[5vh] w-full `}>Certification</Link>
                        <Link onClick={() => { handleClick();  handleactive('contact'); }} to='contact' containerId='contentcontainer' smooth={true}  className={`${activeLink === 'contact' ? 'text-red-500 focus:text-red-500 ' : 'text-white'} mobileelement cursor-pointer mr-10 justify-end items-center flex h-[5vh] w-full`}>Contact</Link>
                    </div>
        </div>
}
    </div>
    
  )
}

export default NavBar