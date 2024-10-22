import React, { useContext, useRef, useState } from "react";
import { PortfolioContext } from "../App";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { ExternalLink } from "react-external-link";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";

import Telephone from "../assets/SVG/Contact/Telephone.svg";
import Mail from "../assets/SVG/Contact/Mail.svg";
import Whatsapp from "../assets/SVG/Contact/Whatsapp.svg";
import Linkedin from "../assets/SVG/Contact/Linkedin.svg";
import { GitHubIcon } from "./MiniComponents";

const Contact = () => {
  const { NavBarHeight, isDarkTheme } = useContext(PortfolioContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scope = useRef(null);
  const isInView = useInView(scope, { once: true });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async (data, e) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_31oum3n",
        "template_tubrlos",
        { name: data.FullName, email: data.EmailId, message: data.Message },
        "A4mzb36nfjQshXKDV"
      );
      toast.success("Message sent!");
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
    }
    setIsSubmitting(false);
    e.target.reset();
    reset();
  };

  return (
    <div
      className={`flex`}
      style={{ minHeight: `calc(100vh - ${NavBarHeight}px)` }}
    >
      <div className="w-full flex flex-1 items-center flex-col">
        <motion.div
          ref={scope}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="contactcontainer flex flex-col gap-2 p-4 w-full sm:w-2/3 md:w-full lg:w-3/4 xl:w-2/5"
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold font-mateSc">Contact Me</h2>
            <p className="text-lg">Feel free to reach out. Let's get in touch!</p>
            <div className="flex items-center gap-4 mt-1">
              <img src={Mail} className="h-8 w-8" alt="Email Icon" />
              <h1 className="text-lg font-medium">akilrajn1153@gmail.com</h1>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <img src={Telephone} className="h-8 w-8" alt="Phone Icon" />
              <h1 className="text-md font-medium">+91 98408 99656</h1>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-2xl text-center font-semibold mb-6">
              Connect with me
            </h2>
            <div className="flex gap-8 justify-center">
              <ExternalLink href="https://www.linkedin.com/in/akilrajn1153">
                <motion.img
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={Linkedin}
                  className="h-8 w-8 hover:shadow-lg"
                  alt="Linkedin Icon"
                />
              </ExternalLink>
              <ExternalLink href="https://github.com/Akilraj-1153">
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-8 w-8 hover:shadow-lg"
                  alt="GitHub Icon"
                >
                  <GitHubIcon isDarkTheme={isDarkTheme} />
                </motion.div>
              </ExternalLink>
              <ExternalLink href="https://wa.me/919840899656">
                <motion.img
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={Whatsapp}
                  className="h-8 w-8 hover:shadow-lg"
                  alt="Whatsapp Icon"
                />
              </ExternalLink>
            </div>
          </motion.div>


          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="form flex justify-center rounded-lg p-4"
          >
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="flex flex-col gap-2 text-lg w-full max-w-sm"
            >
              <div className="flex flex-col gap-2">
                <label className="text-lg font-semibold flex justify-between">
                  <span>Full Name</span>
                  {errors.FullName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.FullName.message}
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  className="p-2 rounded-lg border-2 border-gray-300 focus:outline-none bg-transparent transition-colors duration-500"
                  {...register("FullName", { required: "Full Name is required" })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-semibold flex justify-between">
                  <span>Email</span>
                  {errors.EmailId && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.EmailId.message}
                    </span>
                  )}
                </label>
                <input
                  type="email"
                  className="p-2 rounded-lg border-2 border-gray-300 focus:outline-none bg-transparent transition-colors duration-500"
                  {...register("EmailId", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-semibold flex justify-between">
                  <span>Message</span>
                  {errors.Message && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.Message.message}
                    </span>
                  )}
                </label>
                <textarea
                  className="p-3 rounded-lg border-2 border-gray-300 h-28 resize-none focus:outline-none bg-transparent transition-colors duration-500"
                  {...register("Message", { required: "Message is required" })}
                />
              </div>

              <div className="w-full flex justify-center p-2">
                <button
                  type="submit"
                  className={`capitalize cursor-pointer h-fit w-[80%] text-center px-6 py-2 rounded-lg text-lg font-semibold border ${
                    isDarkTheme
                      ? "bg-white text-black border-white"
                      : "bg-black text-white border-black"
                  } transition-colors duration-500`}
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
      <Toaster position="bottom" />
    </div>
  );
};

export default Contact;
