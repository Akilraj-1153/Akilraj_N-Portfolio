import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ExternalLink } from 'react-external-link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { useRecoilState } from 'recoil';
import { NavState } from '../../Atom/atoms';
import { IoLogoWhatsapp } from "react-icons/io";

function Contact() {
    const [activeButton, setActiveButton] = useRecoilState(NavState);

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
        tl.fromTo('.iconcontent', { x: -100, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5 });
        tl.fromTo('.iconset2', { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: "elastic.inOut", stagger: 0.5 });
    });


    return (
        <div id='' className='h-[90vh]  w-full flex flex-col  justify-center items-center overflow-hidden'>
            <div className=' gap-10 h-full w-full text-white flex flex-col justify-center items-center p-8 md:w-1/2'>
                <h1 className='contenttext text-3xl mb-4'>Contact Me</h1>
                <div className='flex mb-8 gap-20 flex-col w-full justify-center'>
                    <div className='flex w-full justify-center gap-5 font-Roboto flex-col md:flex-row'>
                        <div>
                            <div className='cursor-pointer iconset1 z-40 h-[7vh] gap-5   border-black border-4 rounded-xl flex justify-center items-center '>
                                <IoMdMail size={35} color='white'></IoMdMail> <h1>akilrajn1153@gmail.com</h1>
                            </div>
                        </div>
                        <div>
                            <div className='cursor-pointer iconset1 z-40 h-[7vh] gap-5  border-black border-4  rounded-xl flex justify-center items-center '>
                                <IoCall size={35} color='white'></IoCall> <h1>+91 98408 99656</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-center gap-10 '>
                        <SocialIcon url='https://www.linkedin.com/in/akilrajn1153' icon={<FaLinkedinIn size={35} />} />
                        <SocialIcon url='https://github.com/Akilraj-1153' icon={<FaGithub size={30} />} />
                        <SocialIcon url='https://wa.me/919840899656' icon={<IoLogoWhatsapp size={35} />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SocialIcon({ url, icon }) {
    return (
        <ExternalLink href={url}>
            <div className='iconset2 flex justify-center gap-4 items-center cursor-pointer transition-all duration-300'>{icon}</div>
        </ExternalLink>
    );
}

export default Contact;
