import React, {useState} from "react";
import mylogo from "../assets/Am trs .png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <img src={mylogo} alt="" width={125} height={50} />
        <div>
        <ul className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link to='/'>Home</Link>
            </li>
            <ScrollLink to='about' spy={true} smooth={true} duration={500}>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              About
            </li>
            </ScrollLink>
            <ScrollLink to='skills' spy={true} smooth={true} duration={500}>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              Skills
            </li>
            </ScrollLink>
            <ScrollLink to='projects' spy={true} smooth={true} duration={500}>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              Projects
            </li>
            </ScrollLink>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link to='/resume'>Resume</Link>
            </li>
            <ScrollLink to='contact' spy={true} smooth={true} duration={500}>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              Contact
            </li>
            </ScrollLink>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
        <div className={nav ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 rounded-r-xl" : "fixed left-[-100%] top-0 p-10 ease-in duration-500 rounded-r-xl"}>
          <div>
            <div className="flex w-full items-center justify-between">
              <img src={mylogo} alt="" width={87} height={35} />
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Let's build something legendary together</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li className='py-4 text-sm'>
              <Link to='/'>Home</Link>
            </li>
            <ScrollLink to='about' spy={true} smooth={true} duration={500}>
            <li className='py-4 text-sm'>
              About
            </li>
            </ScrollLink>
            <ScrollLink to='skills' spy={true} smooth={true} duration={500}>
            <li className='py-4 text-sm'>
              Skills
            </li>
            </ScrollLink>
            <ScrollLink to='projects' spy={true} smooth={true} duration={500}>
            <li className='py-4 text-sm'>
              Projects
            </li>
            </ScrollLink>
            <li className='py-4 text-sm'>
              <Link to='/resume'>Resume</Link>
            </li>
            <ScrollLink to='contact' spy={true} smooth={true} duration={500}>
            <li className='py-4 text-sm'>
              Contact
            </li>
            </ScrollLink>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaXTwitter />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaInstagram />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
