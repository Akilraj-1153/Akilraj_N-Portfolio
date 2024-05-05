import React, { useContext } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Slider from 'react-slick';
import { ExternalLink } from 'react-external-link';
import { IoNavigate } from "react-icons/io5";
import gsap from 'gsap';
import ImageContext from '../../Context/ImageContext';


function Projects() {

    
  const Projectphoto=useContext(ImageContext)
  const ProjectImages=[Projectphoto.project1,Projectphoto.project2,Projectphoto.project3,Projectphoto.project4,Projectphoto.project5]

  

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const projTitles = [
    'Rock paper scissor',
    'Etch-a-Sketch Color Game',
    'SIMPLE CALCULATOR',
    'FLAMES',
    'EverGreen'
  ];

  const projDescriptions = [
    'Enjoy a digital twist on the classic Rock, Paper, Scissors game. Crafted with HTML, CSS, and JavaScript, this interactive experience brings timeless fun to your fingertips.',
    'Immerse yourself in nostalgia with our digital Etch-a-Sketch Color Game. Using HTML, CSS, and JavaScript, this game transforms the classic toy into a vibrant canvas, allowing you to draw and paint with a virtual twist.',  
    'Streamline your calculations with our sleek and user-friendly Simple Calculator. Developed using HTML, CSS, and JavaScript, it offers a smooth interface for basic arithmetic, making number crunching a breeze.',
    'FLAMES is a fun game that predicts the relationship between two people based on the acronym: Friends, Lovers, Affectionate, Marriage, Enemies, Siblings.',
    "Discover the vibrant spectrum of health benefits offered by our meticulously curated selection of vegetables and fruits at EverGreen."
  ];

  const projLinks = [
    'https://akilraj-1153.github.io/Rock_Paper_Scissors/',
    'https://main--top-etch-a-sketch-akil-1153.netlify.app/',
    'https://calculator-akil-1153.netlify.app/',
    'https://akilraj-1153.github.io/Flames_Fun_web_app/',
    'https://akilraj-1153.github.io/EverGreen/'
  ];




  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl=gsap.timeline({scrollTrigger:{
            trigger:".projectecontainer",
            // markers:true,
            scroller:'#contentcontainer',
            start:"top center",
      
    }

})
tl.fromTo('.projectecontainer',{y:100,opacity:0},{y:0,opacity:1})
})

  return (
      
      <Slider  {...settings} >
            {ProjectImages.map((project, index) => (
          <div className="  justify-start items-center text-white h-[90vh] flex lg:flex-col w-full xs:flex-row">

              <div className="  w-full h-full flex rounded-lg justify-start items-center flex-col" key={index}>
                <div className=" w-full xs:h-[40vh] rounded-lg  lg:h-[60vh]  flex justify-center items-center">
                  <img className="h-3/4 w-4/4 p-2 lg:h-full lg:w-[50%] rounded-xl" src={project} alt={`Project ${index}`} />
                </div>
                <div className="w-full lg:h-[30vh]  p-2 gap-4 flex justify-start items-center flex-col">
                  <div id='' className=' flex gap-2 flex flex-col justify-start items-center lg:gap-50'>
                    <h2 className='text-2xl'>{projTitles[index]}</h2>
                  <p className=' text-center text-lg w-11/12 mt-5'>{projDescriptions[index]}</p>

                  </div>
                  <button className='bg-red-600 rounded-lg h-10 w-40 flex flex-row justify-center items-center'><ExternalLink className='w-full flex justify-center items-center flex-row' href={projLinks[index]}><span>Visit the page</span><IoNavigate /></ExternalLink></button>

                </div>
              </div>
      </div>

            ))}
          </Slider>
 
  )
}

export default Projects