import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn as LinkedInIcon } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail as MailIcon } from "react-icons/ai";
// import ContactImg from '../assets/contact.jpg';
// import des from "../assets/Mockup2.svg";
import mockup from "../assets/Mockup2.svg";
import { Button } from "react-scroll";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ep962r6",
        "template_icna3ff",
        form.current,
        "UtNeLGIo22vCCspSj"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-full h-auto py-10 px-3 lg:px-8">
      <div className="max-w-[1240px] flex flex-col mx-auto justify-center h-auto px-3">
        <div className="w-full h-auto flex justify-between flex-row fcol itcent">
          <div className="h-auto justify-between flex flex-col lg:w-[50%] w-full gap-y-5 itcent">
            <h1>Let's Connect</h1>
            <div>
              I'm always open to new opportunities and collaborations. If you
              have a project in mind or want to discuss how I can contribute to
              your team, please don't hesitate to reach out. You can find my
              contact information on this site.
            </div>
            <div className="grid grid-cols-2 mdgr gap-3 items-center justify-between w-fit">
              <a href="https://www.instagram.com/romeo._.x4?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="w-fit hover:scale-105 ease-in duration-300">
                <div className="flex flex-row text-[#1ca0e2] items-center gap-5 h-auto w-full text-xl hden">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full text-white">
                    <FaInstagram size={30} />
                  </span>{" "}
                  <p className="text-xl font-bold colt">Instagram</p>
                </div>
              </a>
              <a className="w-fit hover:scale-105 ease-in duration-300" href="https://twitter.com/mandalosy" target="_blank">
                <div className="flex flex-row items-center h-auto w-full text-xl gap-5 hden">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full text-white">
                    <FaXTwitter size={30} />
                  </span>
                  <p className="text-xl font-bold colt">Twitter</p>
                </div>
              </a>
              <a className="w-fit hover:scale-105 ease-in duration-300" href="" target="_blank">
                <div className="flex flex-row items-center h-auto w-full text-xl gap-5 hden">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full text-white">
                    <LinkedInIcon size={30} />
                  </span>{" "}
                  <p className="text-xl font-bold colt">Linkedin</p>
                </div>
              </a>
              <a className="w-fit hover:scale-105 ease-in duration-300" href="mailto:mandalosy13@gmail.com" target="_blank">
                <div className="flex flex-row items-center h-auto w-full text-xl gap-5 hden">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full text-white">
                    <MailIcon size={30} />
                  </span>{" "}
                  <p className="text-xl font-bold colt">Email</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <img
              loading="lazy"
              src={mockup}
              className="w-full object-cover aspect-auto h-full"
              alt=""
            />
          </div>
        </div>
        {/* <div></div> */}
      </div>
      <section className="flex p-6 justify-center rounded-l-lg mb-12 gap-4 flex-col  w-full bg-transparent">
        <div className="relative w-auto overflow-hidden">
          <div className="opacity-100 transform-none">
            <h1 className="text-center font-semibold text-3xl">
              Send me an email
            </h1>
          </div>
          {/* <div style="position: absolute; inset: 4px 0px 4px 100%; background: rgb(43, 122, 120); z-index: 20;"></div> */}
        </div>
        <div className="relative width-auto overflow-hidden">
          <div className="opacity-100 transform-none">
            <form
              action=""
              method="get"
              ref={form}
              onSubmit={sendEmail}
              className="flex lg:flex-row items-center justify-center py-3 gap-4 w-full flex-col"
            >
              <div className="flex flex-col w-[30%] items-center justify-center py-2 relative bottom-[36px]">
                <div className="group relative mb-[22px]">
                  <input
                    className="px-2 text-lg bg-transparent sty outline-none"
                    type="text"
                    name="from_name"
                    required=""
                    placeholder="Full Name"
                  />
                </div>
                <div className="group relative mb-[22px]">
                  <input
                    className="px-2 text-lg bg-transparent sty outline-none"
                    name="user_email"
                    required
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex gap-4 lg:py-12 items-center h-full flex-col">
                <textarea
                  name="message"
                  cols="40"
                  rows="7"
                  className="message focus:bg-[#def2f1] bg-transparent outline-none"
                  id="input-message"
                  placeholder="Message..."
                ></textarea>
                {/* <button className="w-28 self-end text-lg font-bold rounded-sm h-10 dark-button bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-80 cursor-pointer hover:-translate-y-[1px]" type="submit">Send</button> */}
                <button
                  class="self-end cursor-pointer transition-all bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
