import React from 'react'
import { ToogleNavstate,Tooglestate,NavState } from '../../Atom/atoms';
import { useRecoilState } from 'recoil';
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from 'react-scroll';
import { useContext } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'; 
import ImageContext from '../../Context/ImageContext';

function NavBar() {

  const Navlogo = useContext(ImageContext);
  const [toogleNavbar, setToggleNavbar] = useRecoilState(Tooglestate);
  const [toogleNavbarState, setToggleNavbarState] = useRecoilState(ToogleNavstate);
  const [activeLink,setActiveLink]=useRecoilState(NavState)


  function handleClick() {
    
    setToggleNavbar(!toogleNavbar);
    setToggleNavbarState(!toogleNavbarState);
  }

  function handleactive(id){
    setActiveLink(id)
  }




  useGSAP(()=>{
   const tl = gsap.timeline()
   tl.fromTo('.navlogo',{y:-100,opacity:0},{y:0,opacity:1})
   tl.fromTo('.navbar',{x:100,opacity:0},{x:0,opacity:1,stagger:0.5})
  })
  


  return (
    <div className='h-[7vh] w-full font-mateSc '>
      <div className='h-full w-full gap-10  flex '>
        <div className='h-full md:w-1/5 xs:w-[20%]  '>
        <img className='navlogo h-full w-auto' src={Navlogo.NavImage} alt="NavLogo" />
        </div>


        <div className='h-full w-3/5 mr-10   md:w-4/5 xs:hidden md:flex items-center text-xl gap-16 justify-end'>
          <Link onClick={()=>{ handleactive('home')}} to='home' containerId='contentcontainer' smooth={true} className={`${activeLink === 'home' ? 'text-red-900 focus:text-red-900 ' : 'text-white'} navbar cursor-pointer justify-center items-center flex h-[5vh] w-fit p-2`}>Home</Link>
          <Link onClick={()=>{ handleactive('skill')}} to='skill' containerId='contentcontainer' smooth={true}  className={`${activeLink === 'skill' ? 'text-red-900 focus:text-red-900 ' : 'text-white'} navbar cursor-pointer justify-center items-center flex h-[5vh] w-fit p-2`}>Skill</Link>
          <Link onClick={()=>{  handleactive('project')}} to='project' containerId='contentcontainer' smooth={true}  className={`${activeLink === 'project' ? 'text-red-900 focus:text-red-900 ' : 'text-white'} navbar cursor-pointer justify-center items-center flex h-[5vh] w-fit p-2`}>Project</Link>
          <Link onClick={()=>{ handleactive('Certification')}} to='Certification' containerId='contentcontainer' smooth={true} className={`${activeLink === 'Certification' ? 'text-red-900 focus:text-red-900 ' : 'text-white'} navbar cursor-pointer justify-center items-center flex h-[5vh] w-fit p-2`}>Certification</Link>
          <Link onClick={()=>{ handleactive('contact')}} to='contact' containerId='contentcontainer' smooth={true}  className={`${activeLink === 'contact' ? 'text-red-900 focus:text-red-900 ' : 'text-white'} navbar cursor-pointer justify-center items-center flex h-[5vh] w-fit p-2`}>Contact</Link>
        </div>


        <div className='h-full md:w-1/5 xs:w-[90%]  md:hidden flex items-center'>
        {toogleNavbar ? (
            <div className='cursor-pointer flex h-[5vh] w-full p-2 justify-end items-center'>
              <RiMenuUnfoldFill onClick={handleClick} color='white' size={40} />
            </div>
          ) : (
            <div className='cursor-pointer justify-end items-center flex h-[5vh] w-full p-2'>
              <RiMenuFoldFill onClick={handleClick} color='white' size={40} />
            </div>
          )}
        </div>

      </div>
      <div className=' md:hidden h-[50vh] w-full'>

      {toogleNavbarState && <div className='absolute z-40 w-full h-fit text-white backdrop-blur text-2xl'>
          <Link onClick={() => { handleClick();  handleactive('home'); }} to='home' containerId='contentcontainer' smooth={true}                   className={`${activeLink === 'home' ? 'text-red-900 focus:text-red-900 ' : 'text-white'} cousor-pointer mr-10 justify-end items-center flex h-[5vh] w-full p-2`}>Home</Link>
          <Link onClick={() => { handleClick(); handleactive('skill'); }} to='skill' containerId='contentcontainer' smooth={true}                 className={`${activeLink === 'skill' ? 'text-red-900 focus:text-red-900 ' : 'text-white'} cousor-pointer mr-10 justify-end items-center flex h-[5vh] w-full p-2`}>Skill</Link>
          <Link onClick={() => { handleClick();  handleactive('project'); }} to='project' containerId='contentcontainer' smooth={true}             className={`${activeLink === 'project' ? 'text-red-900 focus:text-red-900 ' : 'text-white'} cursor-pointer mr-10 justify-end items-center flex h-[5vh] w-full p-2`}>Project</Link>
          <Link onClick={() => { handleClick();  handleactive('Certification'); }} to='Certification' containerId='contentcontainer' smooth={true} className={`${activeLink === 'Certification' ? 'text-red-900 focus:text-red-900 ' : 'text-white'} cousor-pointer mr-10 justify-end items-center flex h-[5vh] w-full p-2`}>Certification</Link>
          <Link onClick={() => { handleClick();  handleactive('contact'); }} to='contact' containerId='contentcontainer' smooth={true}             className={`${activeLink === 'contact' ? 'text-red-900 focus:text-red-900 ' : 'text-white'} cursor-pointer mr-10 justify-end items-center flex h-[5vh] w-full p-2`}>Contact</Link>
        </div>}
      </div>
    </div>
  )
}

export default NavBar