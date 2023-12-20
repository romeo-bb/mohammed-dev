import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn as LinkedInIcon } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail as MailIcon } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full h-auto pb-4 px-3 lg:px-8'>
      <div className='max-w-[1240px] flex flex-col mx-auto justify-center h-auto px-3'>
        <div className='sm:flex text-center justify-between alin'>
          <div className="flex flex-col md:items-start items-center text-lg font-semibold">
          <a
            href="mailto:mandalosy13@gmail.com"
            className="flex items-center py-1 cursor-pointer hover:rounded-full hover:shadow-lg hover:shadow-gray-400 hover:px-3 ease-in duration-300"
          >
            <MdOutlineMail size={24}/>
            &nbsp; mandalosy13@gmail.com
          </a>
          <a href="tel:212 777 067 146" className="flex items-center py-1 cursor-pointer hover:rounded-full hover:shadow-lg hover:shadow-gray-400 hover:px-3 ease-in duration-300">
            <FaPhone /> &nbsp; +212 777 067 146
          </a>
          <p className="py-1">© Copyright 2023 ANDALOSY LLC.</p></div>
          <div className='flex justify-between w-full mauto xsm:max-w-[280px] my-4 items-center'>
            {/* <a href="https://www.instagram.com/romeo._.x4?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram size={30} /></a>
            <a href="https://twitter.com/mandalosy"><LinkedInIcon size={30} /></a>
            <a href="mailto:mandalosy13@gmail.com"><MailIcon size={30} /></a>
            <a href="https://twitter.com/mandalosy"><FaXTwitter size={30} /></a>               */}
            <a
              href="https://www.linkedin.com/in/mohammed-el-andalosy-5472672a6/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://twitter.com/mandalosy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaXTwitter />
              </div>
            </a>
            <a href="mailto:mandalosy13@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a href="https://www.instagram.com/romeo._.x4?igshid=OGQ5ZDc2ODk2ZA==">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;