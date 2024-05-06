import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { ExternalLink } from 'react-external-link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

function Contact() {



  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const tl=gsap.timeline({scrollTrigger:{
        trigger:'.Contactcontainer',
        scroller:"#contentcontainer",
        start:"top center+=100",
        markers:true
    }})

    tl.fromTo('.contenttext',{y:100,opacity:0},{y:0,opacity:1})
    tl.fromTo('.iconset1',{y:100,opacity:0},{y:0,opacity:1, ease:"elastic.inOut",stagger:0.5})
    tl.fromTo('.iconcontent',{x:-100,opacity:0},{x:0,opacity:1,stagger:0.5})
    tl.fromTo('.iconset2',{y:100,opacity:0},{y:0,opacity:1, ease:"elastic.inOut",stagger:0.5})

  })
   
  return (
    <div id='' className='h-[70vh]  w-full flex flex-col  justify-center items-center overflow-hidden'>
      <div className=' gap-10 h-full w-full text-white flex flex-col justify-center items-center p-8 md:w-1/2'>
        <h1 className='contenttext text-3xl mb-4'>Contact Me</h1>
        <div className='flex mb-8 gap-20 flex-col w-full justify-center'>
        <div className='flex w-full justify-center gap-10 font-Roboto flex-col md:flex-row'>
          <SocialIcon name='+91 98408 99656' url='' icon={<IoCallSharp size={30}  />} className='iconset1' />
          <SocialIcon name='akilrajn1153@gmail.com' url='' icon={<IoMdMail size={30} className='iconset1' />} />
          </div>
        <div className='flex w-full justify-center gap-5 '>
          <SocialIcon  url='https://www.linkedin.com/in/akilrajn1153' icon={<FaLinkedinIn size={35} className='iconset2'  />} />
          <SocialIcon  url='https://github.com/Akilraj-1153' icon={<FaGithub size={30} className='iconset2' />} />
          <SocialIcon  url='https://x.com/Akilraj1153?t=nclAtn7CQGL7vEhqIDB3pA&s=08' icon={<FaXTwitter size={35} className='iconset2' />} />
        </div>
        </div>
      </div>
      
    </div>
  );
}

function SocialIcon({ url, icon,name }) {
  return (
    <ExternalLink href={url}>
      <div className='flex justify-center gap-4 items-center  transition-all duration-300'>{icon}<h1 className='iconcontent'>{name}</h1></div>
    </ExternalLink>
  );
}

export default Contact;
