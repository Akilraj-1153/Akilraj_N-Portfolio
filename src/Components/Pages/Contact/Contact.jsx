import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { FaSquareGithub } from "react-icons/fa6";
import { ImMail } from "react-icons/im";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { ExternalLink } from 'react-external-link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




function Contact() {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.Contactcontainer',
            scroller: "#contentcontainer",
            start: "top center+=100",
        }
    });

    tl.fromTo('.contenttext', { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
    tl.fromTo('.iconset1', { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: "elastic.inOut", stagger: 0.5 });
    tl.fromTo('.icontext', { x: -100, opacity: 0 }, { x: 0, opacity: 1, ease: "elastic.inOut", stagger: 0.5 });
    tl.fromTo('.iconcontent', { y: -100, opacity: 0 }, { y: 0, opacity: 1, ease: "elastic.inOut", stagger: 0.5 });



});


  return (
    <div className='h-[90vh] w-full flex flex-col bg-blac rounded-lg lg:flex-row gap-2 overflow-hidden  justify-center items-center'>
    <div className=' gap-10 h-full w-full text-white flex flex-col justify-center items-center p-8 md:w-1/2'>
                <h1 className='contenttext text-3xl mb-4 font-mateSc'>Contact Me</h1>
                <div className='flex mb-8 gap-20 flex-col w-full justify-center'>
                    <div className='flex w-full justify-center gap-5 font-Roboto flex-col md:flex-row'>
                        <div>
                            <div className='cursor-pointer iconset1 z-40 h-[7vh]  gap-5    rounded-xl flex justify-center items-center '>
                            <div className=' z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center'>
                            <ImMail size={35} color='white'></ImMail>
                            </div>   
                            <h1 className='icontext'>akilrajn1153@gmail.com</h1>
                            </div>
                        </div>
                        <div>
                            <div className='cursor-pointer iconset1 z-40 h-[7vh] gap-5    rounded-xl flex justify-center items-center '>
                            <div className=' z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center'>
                            <FaSquarePhone size={40} color='white'></FaSquarePhone>
                            </div>
                            <h1 className='icontext'>+91 98408 99656</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-center gap-10 '>
                        <SocialIcon url='https://www.linkedin.com/in/akilrajn1153' icon={<ImLinkedin size={35} />} />
                        <SocialIcon url='https://github.com/Akilraj-1153' icon={<FaSquareGithub size={40} />} />
                        <SocialIcon url='https://wa.me/919840899656' icon={<FaSquareWhatsapp size={40} />} />
                    </div>
                </div>
            </div>
    </div>
  )
}

function SocialIcon({ url, icon }) {
  return (
    <ExternalLink href={url}>
      <div className='iconcontent z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center'>
        {icon}
      </div>
    </ExternalLink>
  );
}

export default Contact