import React, { useContext } from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ExternalLink } from 'react-external-link';
import ImageContext from '../../Context/ImageContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-scroll';
import { IoCall } from "react-icons/io5";
import { NavState } from '../../Atom/atoms';
import { useRecoilState } from 'recoil';
import { IoLogoWhatsapp } from "react-icons/io";

function Home() {
    const image = useContext(ImageContext);
    const [activeLink, setActiveLink] = useRecoilState(NavState);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo('.Homeimg', { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo('.name1', { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo('.name2', { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo('.name3', { x: -100, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2 });
        tl.fromTo('.role', { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo('.homeabout', { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo('.contacticon', { y: -100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 });
    });

    function handleactive(id) {
        setActiveLink(id);
    }

    return (
        <div className='h-full  w-full flex xs:flex-col lg:flex-row '>
            <div className='xs:h-[50%] xs:w-full md:h-[60%] lg:h-full lg:w-[40%]  flex'>
                <div className='xs:h-full xs:w-[10%] flex flex-col justify-between sm:hidden'>
                    <SocialIcon url='https://www.linkedin.com/in/akilrajn1153' icon={<FaLinkedinIn size={35} color='black' />} />
                    <SocialIcon url='https://github.com/Akilraj-1153' icon={<FaGithub size={35} color='black' />} />
                    <Link to='contact' containerId='contentcontainer' smooth={true} onClick={() => { handleactive('contact'); }} >
                        <div className=' contacticon z-40 h-[7vh]  w-[7vh] border-black border-4 bg-white rounded-xl flex justify-center items-center '>
                            <IoMdMail size={35} color='black'></IoMdMail>
                        </div>
                    </Link>
                    <Link to='contact' containerId='contentcontainer' smooth={true} onClick={() => { handleactive('contact'); }} >
                        <div className=' contacticon z-40 h-[7vh]  w-[7vh] border-black border-4 bg-white rounded-xl flex justify-center items-center '>
                            <IoCall size={35} color='black'></IoCall>
                        </div>
                    </Link>
                    <SocialIcon url='https://wa.me/919840899656' icon={<IoLogoWhatsapp size={35} color='black' />} />
                </div>
                <div className='xs:h-full xs:w-full justify-center items-center flex flex-col  '>
                    <div className='h-[90%] w-auto lg:h-full flex justify-center lg:items-center xs:items-start'>
                        <img className='Homeimg xs:h-[90%] xs:w-auto lg:h-[70%] lg:w-auto rounded-xl' src={image.AboutImage} alt="About" />
                    </div>
                    <div className='h-[10%] w-auto  lg:hidden text-white justify-center items-center flex flex-col'>
                        <div className='bg-transparent lg:justify-start h-fit w-full flex md:gap-4 gap-2 justify-center items-center flex'>
                            <h1 className='name1 font-mateSc lg:text-5xl text-xl'>H</h1>
                            <h1 className='name1 font-mateSc lg:text-5xl text-xl'>i</h1>
                            <h1 className='name1 lg:text-5xl text-xl'>👋🏽</h1>
                        </div>
                        <div className='bg-transparent lg:justify-start h-fit w-full flex md:gap-4 gap-2'>
                            <h1 className='name2 font-mateSc lg:text-5xl text-xl'>I</h1>
                            <br />
                            <h1 className='name2 font-mateSc lg:text-5xl text-xl'>a</h1>
                            <h1 className='name2 font-mateSc lg:text-5xl text-xl'>m</h1>
                            <br />
                            <br />
                            <h1 className='name3 font-Protest  lg:text-5xl text-2xl text-red-500'>A</h1>
                            <h1 className='name3 font-Protest  lg:text-5xl text-2xl text-red-500'>K</h1>
                            <h1 className='name3 font-Protest  lg:text-5xl text-2xl text-red-500'>I</h1>
                            <h1 className='name3 font-Protest  lg:text-5xl text-2xl text-red-500'>L</h1>
                            <h1 className='name3 font-Protest  lg:text-5xl text-2xl text-red-500'>R</h1>
                            <h1 className='name3 font-Protest  lg:text-5xl text-2xl text-red-500'>A</h1>
                            <h1 className='name3 font-Protest  lg:text-5xl text-2xl text-red-500'>J</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xs:h-[50%] xs:w-full  md:h-[40%] lg:h-full lg:w-[60%] justify-center flex items-center flex-col'>
                <div className='lg:h-fit lg:w-full xs:hidden lg:flex'>
                    <div className='h-fit w-auto   text-white justify-center items-center flex flex-col gap-2'>
                        <div className='bg-transparent lg:justify-start h-fit w-full flex md:gap-4 gap-2 justify-center items-center flex'>
                            <h1 className='name1 font-mateSc lg:text-5xl text-xl'>H</h1>
                            <h1 className='name1 font-mateSc lg:text-5xl text-xl'>i</h1>
                            <h1 className='name1 font-mateSc lg:text-5xl text-xl'>👋🏽</h1>
                        </div>
                        <div className='bg-transparent lg:justify-start h-fit w-full flex md:gap-4 gap-2'>
                            <h1 className='name2 font-mateSc lg:text-5xl text-xl'>I</h1>
                            <br />
                            <h1 className='name2 font-mateSc lg:text-5xl text-xl'>a</h1>
                            <h1 className='name2 font-mateSc lg:text-5xl text-xl'>m</h1>
                            <br />
                            <br />
                            <h1 className='name3  font-Protest lg:text-5xl text-2xl text-red-500'>A</h1>
                            <h1 className='name3  font-Protest lg:text-5xl text-2xl text-red-500'>K</h1>
                            <h1 className='name3  font-Protest lg:text-5xl text-2xl text-red-500'>I</h1>
                            <h1 className='name3  font-Protest lg:text-5xl text-2xl text-red-500'>L</h1>
                            <h1 className='name3  font-Protest lg:text-5xl text-2xl text-red-500'>R</h1>
                            <h1 className='name3  font-Protest lg:text-5xl text-2xl text-red-500'>A</h1>
                            <h1 className='name3  font-Protest lg:text-5xl text-2xl text-red-500'>J</h1>
                        </div>
                    </div>
                </div>
                <div className='lg:h-fit lg:w-full xs:flex flex-col justify-start xs:w-full xs:h-full'>
                    <p className='text-2xl p-2 role'>Frontend Developer</p>
                    <p className='homeabout text-lg text-justify lg:leading-loose lg:text-xl font-All3 p-2 lg:pr-10'>
                        I love taking on new tasks and developing my skill set. I'm committed to using my experience to advance the development and success of organizations. My artistic vision enhances my development job and photographic activities, and my proactive approach to mastering new technologies keeps me ahead of industry trends. I work best in fast-paced settings that promote creativity, and I'm dedicated to bringing new ideas to bear in order to further team goals.
                    </p>
                </div>
                <div className='lg:h-fit lg:w-full xs:hidden sm:flex justify-center items-center gap-10'>
                    <SocialIcon url='https://www.linkedin.com/in/akilrajn1153' icon={<FaLinkedinIn size={35} color='black' />} />
                    <SocialIcon url='https://github.com/Akilraj-1153' icon={<FaGithub size={35} color='black' />} />
                    <Link to='contact' containerId='contentcontainer' smooth={true} onClick={() => { handleactive('contact'); }} >
                        <div className=' contacticon z-40 h-[7vh]  w-[7vh] cursor-pointer border-black border-4 bg-white rounded-xl flex justify-center items-center '>
                            <IoMdMail size={35} color='black'></IoMdMail>
                        </div>
                    </Link>
                    <Link to='contact' containerId='contentcontainer' smooth={true} onClick={() => { handleactive('contact'); }} >
                        <div className=' contacticon z-40 h-[7vh] cursor-pointer  w-[7vh] border-black border-4 bg-white rounded-xl flex justify-center items-center '>
                            <IoCall size={35} color='black'></IoCall>
                        </div>
                    </Link>
                    <SocialIcon url='https://wa.me/919840899656' icon={<IoLogoWhatsapp size={35} color='black' />} />
                </div>
            </div>
        </div>
    );
}

function SocialIcon({ url, icon }) {
    return (
        <ExternalLink href={url}>
            <div className=' contacticon z-40 h-[7vh]  w-[7vh] border-black border-4 bg-white rounded-xl flex justify-center items-center '>
                {icon}
            </div>
        </ExternalLink>
    );
}

export default Home;
