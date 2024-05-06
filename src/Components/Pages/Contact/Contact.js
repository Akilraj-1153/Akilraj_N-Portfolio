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

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm('service_jwrem8k', 'template_ev9jd6t', form.current, {
        publicKey: 'A4mzb36nfjQshXKDV',
      })
      .then(
        (result) => {
          toast.success('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            toast.dismiss();
          }, 2000); // hide message after 5 seconds
        },
        (error) => {
          toast.error('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            toast.dismiss();
          }, 2000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const tl=gsap.timeline({scrollTrigger:{
        trigger:'.Contactcontainer',
        scroller:"#contentcontainer",
        start:"top center",
        // markers:true
    }})

    tl.fromTo('.contenttext',{y:100,opacity:0},{y:0,opacity:1})
    tl.fromTo('.icons',{y:100,opacity:0},{y:0,opacity:1, ease:"elastic.inOut",stagger:0.5})
    tl.fromTo('.label1',{x:-100,opacity:0},{x:0,opacity:1,   })
    tl.fromTo('.input1',{x:100,opacity:0},{x:0,opacity:1,   })
    tl.fromTo('.label2',{x:-100,opacity:0},{x:0,opacity:1,   })
    tl.fromTo('.input2',{x:100,opacity:0},{x:0,opacity:1,   })
    tl.fromTo('.label3',{x:-100,opacity:0},{x:0,opacity:1,   })
    tl.fromTo('.input3',{x:100,opacity:0},{x:0,opacity:1,   })
    tl.fromTo('.subbtn',{y:100,opacity:0},{y:0,opacity:1,   })

  })
  


   

  return (
    <div id='' className='h-[90vh] w-full flex flex-col  justify-center items-center overflow-hidden'>
      <div className=' text-white flex flex-col justify-center items-center p-8 md:w-1/2'>
        <h1 className='contenttext text-3xl mb-4'>Contact Me</h1>
        <div className='flex gap-10 mb-8'>
          <SocialIcon url='https://www.linkedin.com/in/akilrajn1153' icon={<FaLinkedinIn size={35} />} />
          <SocialIcon url='https://github.com/Akilraj-1153' icon={<FaGithub size={35} />} />
          <SocialIcon url='https://instagram.com/iam_akil_20?igshid=YTQwZjQ0NmI0OA==' icon={<RiInstagramFill size={35} />} />
          <SocialIcon url='https://x.com/Akilraj1153?t=nclAtn7CQGL7vEhqIDB3pA&s=08' icon={<FaXTwitter size={35} />} />
        </div>
      </div>
      <div className=' flex xs:w-full justify-center items-center p-8 md:w-1/2'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full max-w-md'>
          <label className='label1 text-white mb-2'>Name</label>
          <input className='input1 border  rounded-lg mb-4 px-4 py-2' type="text" name="user_name" />
          <label className='label2 text-white mb-2'>Email</label>
          <input className='input2 border rounded-lg mb-4 px-4 py-2' type="email" name="user_email" />
          <label className='label3 text-white mb-2'>Message</label>
          <textarea className='input3 border rounded-lg mb-4 px-4 py-2 h-32 resize-none' name="message" />
          <button className='subbtn bg-blue-500 text-white py-2 rounded-lg'>{isSubmitting ? 'Sending...' : 'Send'}</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

function SocialIcon({ url, icon }) {
  return (
    <ExternalLink href={url}>
      <div className=' icons transition-all duration-300'>{icon}</div>
    </ExternalLink>
  );
}

export default Contact;
