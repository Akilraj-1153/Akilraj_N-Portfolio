import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useRecoilState } from 'recoil';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Centercertificate } from '../../Atom/atoms';
import ImageContext from '../../Context/ImageContext';

function Certification() {

    const certificates = useContext(ImageContext);
    const certificateList = [
        certificates.certificate1,
        certificates.certificate2,
        certificates.certificate3,
        certificates.certificate4,
        certificates.certificate5,
        certificates.certificate6,
        certificates.certificate7,
        certificates.certificate8,
    ];

    const [currentIndex, setCurrentIndex] = useRecoilState(Centercertificate);
    const [autoUpdate, setAutoUpdate] = useState(true);

    useEffect(() => {
        if (autoUpdate) {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % certificateList.length);
            }, 4000);

            return () => clearInterval(intervalId);
        }
    }, [autoUpdate, certificateList.length, setCurrentIndex]);

    const prevIndex = (currentIndex + 1) % certificateList.length;
    const nextIndex = (currentIndex - 1 + certificateList.length) % certificateList.length;

    const boxRefs = useRef([]);

    useEffect(() => {
        const animateSwap = () => {
            gsap.fromTo(boxRefs.current[currentIndex],{scale:1}, { scale: 1.5, duration: 0.5,ease:"power3.inout" });
            gsap.to(boxRefs.current[prevIndex], { scale: 1, duration: 0.5  });
            gsap.to(boxRefs.current[nextIndex], { scale: 1, duration: 0.5  });
        };

        animateSwap();
    }, [currentIndex, prevIndex, nextIndex]);

    const navigateToIndex = (index) => {
        setCurrentIndex(index);
    };


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl=gsap.timeline({scrollTrigger:{
                trigger:".Certificatecontainer",
                // markers:true,
                scroller:'#contentcontainer',
                start:"top center",
          
        }
    
    })
    tl.fromTo('.Certificatecontainer',{y:100,opacity:0},{y:0,opacity:1})
})


    return (
        <div className='h-[90vh]  w-[full] flex xs:flex-col md:flex-row md:justify-center items-center   overflow-hidden'>
            <div ref={(el) => (boxRefs.current[prevIndex] = el)} className=' box1 xs:h-[30%] lg:z-40  xs:w-full md:h-[30%] md:w-1/4 opacity-50 rounded-md flex justify-center items-center flex-col'>
                <img className='h-full w-auto rounded-xl cursor-pointer ' src={certificateList[prevIndex]} alt={`Certificate ${prevIndex + 1}`} onMouseEnter={()=>setAutoUpdate(false)} onMouseLeave={()=>setAutoUpdate(true)} onClick={() => navigateToIndex(prevIndex)} />
            </div>

            <div ref={(el) => (boxRefs.current[currentIndex] = el)} className='  box2 z-30  xs:h-[25%] xs:w-fit md:h-[50%] md:w-2/4 rounded-md flex justify-center items-center flex-col'>
                <img className='h-full w-auto rounded-xl border-2 border-black ' src={certificateList[currentIndex]} alt={`Certificate ${currentIndex + 1}`} onMouseEnter={()=>setAutoUpdate(false)} onMouseLeave={()=>setAutoUpdate(true)} onClick={() => navigateToIndex(currentIndex)} />
            </div>

            <div ref={(el) => (boxRefs.current[nextIndex] = el)} className='box3 lg:z-40  cursor-pointer xs:h-[30%] xs:w-full md:h-[30%] md:w-1/4 opacity-50 rounded-md flex justify-center items-center flex-col'>
                <img className='h-full w-auto rounded-xl cursor-pointer  ' src={certificateList[nextIndex]} alt={`Certificate ${nextIndex + 1}`} onMouseEnter={()=>setAutoUpdate(false)} onMouseLeave={()=>setAutoUpdate(true)} onClick={() => navigateToIndex(nextIndex)} />
            </div>
        </div>
    );
}

export default Certification;
