import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContext } from 'react';
import ImageContext from '../../Context/ImageContext';

function Skill() {
  const logos = useContext(ImageContext);

  return (
    <div className='skillbox h-[90vh] w-full flex justify-center items-center text-white'>
      <div className='grid xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 lg:w-[70%] lg:h-[70%] justify-center items-center w-full h-full max-w-screen'>
        <SkillItem title="HTML" logo={logos.htmllogo} rating={70} color="bg-[#e54c26]" />
        <SkillItem title="CSS" logo={logos.csslogo} rating={80} color="bg-[#2197f2]" />
        <SkillItem title="JavaScript" logo={logos.jslogo} rating={60} color="bg-[#fec44c]" />
        <SkillItem title="React Js" logo={logos.reactlogo} rating={60} color="bg-[#39C0D6]" />
        <SkillItem title="Tailwind CSS" logo={logos.tailwindlogo} rating={85} color="bg-[#39bdf9]" />
        <SkillItem title="GSAP" logo={logos.gsapanimationlogo} rating={50} color="bg-[#88ce02]" />
        <SkillItem title="Python" logo={logos.pythonlogo} rating={60} color="bg-gradient-to-br from-blue-900 to-yellow-500" />
        <SkillItem title="Canva" logo={logos.canvalogo} rating={70} color="bg-gradient-to-br from-cyan-500 via-blue-700 to-violet-600" />
      </div>
    </div>
  );
}

function SkillItem({ title, logo, rating, color }) {
  const logoRef = useRef(null);
  const barRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skillcontainer",
        scroller: '#contentcontainer',
        start: "top center",
      }
    });

    tl.fromTo('.skillimg', { y: -100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 });
    tl.fromTo('.skillname', { opacity: 0 }, { opacity: 1, stagger: 0.4 });
    tl.fromTo('.bar', { opacity: 0 }, { opacity: 1 });
    tl.fromTo(
      barRef.current,
      { width: '0%', opacity: 0 },
      { width: `${rating}%`, opacity: 1, duration: 1, ease: 'power2.out' }
    );
    tl.fromTo(
      logoRef.current,
      { textShadow: "none" },
      { textShadow: "rgba(255, 0, 0, 0.8) 0px 0px 30px", duration: 1 }
    );
    tl.fromTo('.rating', { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
  }, [rating]);

  return (
    <div className='flex flex-col lg:scale-75 hover:lg:scale-100 xs:justify-start sm:justify-center items-center gap-2 sm:gap-2 p-2 w-full h-full'>
      <div className='flex justify-center items-center'>
        <img ref={logoRef} className='skillimg h-16 md:h-24 max-w-full' src={logo} alt={`${title} Logo`} />
      </div>
      <h1 className='skillname text-xl text-center'>{title}</h1>
      <div className='w-full flex flex-row justify-center items-center gap-2'>
        <div className="w-[70%] bar h-3 bg-gray-300 rounded-sm overflow-hidden">
          <div ref={barRef} className={`h-full min-w-2 ${color}`} ></div>
        </div>
        <h1 className='rating text-xl'>
          {rating}%
        </h1>
      </div>
    </div>
  );
}

export default Skill;
