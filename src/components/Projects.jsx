/** @format */

import React, { useRef, useEffect } from "react";
import car_rental from "../assets/projects/Car-Rental.png";
import fitness_world from "../assets/projects/fitness-World.png";
import home_store from "../assets/projects/home-store.png";
import photography from "../assets/projects/photography.png";
import ecommerce from "../assets/projects/ecommerce-shope.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, });

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, x: 0 });
    }
  }, [controls1, inView1]);

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({ triggerOnce: true, });

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, x: 0 });
    }
  }, [controls2, inView2]);

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({ triggerOnce: true, });

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, x: 0 });
    }
  }, [controls3, inView3]);

  const controls4 = useAnimation();
  const [ref4, inView4] = useInView({ triggerOnce: true, });

  useEffect(() => {
    if (inView4) {
      controls4.start({ opacity: 1, x: 0 });
    }
  }, [controls4, inView4]);

  const controls5 = useAnimation();
  const [ref5, inView5] = useInView({ triggerOnce: true, });

  useEffect(() => {
    if (inView5) {
      controls5.start({ opacity: 1, x: 0 });
    }
  }, [controls5, inView5]);



  return (
    <div id="projects" className="w-full lg:h-auto p-10">
      <div className="max-w-[1240px] flex flex-col mx-auto justify-center h-full">
        <h1 className="text-xl tracking-widest text-[#1ca0e2] font-semibold">
          Portfolio
        </h1>
        <h2 className="py-4 text-gray-600 ">
          Each project is a unique piece of development
        </h2>
        <div className="w-full h-auto py-7 flex items-center flex-col gap-14">
          <motion.div className="md:w-[80%] w-full lg:h-[25rem] md:h-[43rem] xsm:h-[35rem] xsm:w-[365px] items-center flex justify-between lg:flex-row flex-col p-[1.2rem] bg-white rounded-[1.5rem] gap-8 shadowbox"  initial={{ opacity: 0, x: "100"}} animate={controls1} transition={{ duration: 1.6 }} ref={ref1}>
            <div className="rounded-[1.5rem] lg:w-[53rem] lg:h-[22rem] w-auto h-auto shadowbox overflow-hidden trans">
              <a href="https://car-rental-web-ashy.vercel.app/"
                 target="_blank"
              >
                <img loading="lazy" className="screen" src={car_rental} alt="" />
              </a>
            </div>
            <div className="md:w-[30rem] xsm:w-[17rem] h-auto flex flex-col justify-center items-center">
              <h1 className="text-xl text-black font-bold uppercase">
                Car Rental
              </h1>
              <p className="pro__textp font-bold mt-2">
                A car rental website is an online platform that allows users to
                rent cars for personal or business use. The website provides an
                interface for searching, comparing, and reserving cars.
              </p>
              <div className="flex gap-[1rem] justify-center mt-[1rem]">
                <p className="stackp">React</p>
                <p className="stackp">SCSS</p>
              </div>
              <div className="flex gap-[1rem] justify-center mt-[2rem]">
                <a
                  className="flex items-center text-[#2d2e32] font-semibold"
                  target="_blank"
                  href="https://car-rental-web-ashy.vercel.app/"
                  rel="noreferrer"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="md:w-[80%] w-full lg:h-[25rem] md:h-[43rem] xsm:h-[35rem] xsm:w-[365px] items-center flex justify-between lg:flex-row flex-col p-[1.2rem] bg-white rounded-[1.5rem] gap-8 shadowbox"  initial={{ opacity: 0, x: "-100"}} animate={controls2} transition={{ duration: 1.6 }} ref={ref2}>
          <div className="md:w-[30rem] xsm:w-[17rem] h-auto flex flex-col justify-center items-center">
              <h1 className="text-xl text-black font-bold uppercase">
                Fitness World
              </h1>
              <p className="pro__textp font-bold mt-2">
              A coaching website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.
              </p>
              <div className="flex gap-[1rem] justify-center mt-[1rem]">
                <p className="stackp">React</p>
                <p className="stackp">Tailwind</p>
              </div>
              <div className="flex gap-[1rem] justify-center mt-[2rem]">
                <a
                  className="flex items-center text-[#2d2e32] font-semibold"
                  target="_blank"
                  href="https://fitness-world-green.vercel.app/"
                  rel="noreferrer"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="rounded-[1.5rem] lg:w-[53rem] lg:h-[22rem] w-auto h-auto shadowbox overflow-hidden transf">
              <a href="https://fitness-world-green.vercel.app/"
                 target="_blank"
              >
                <img loading="lazy" className="screen" src={fitness_world} alt="" />
              </a>
            </div>
          </motion.div>

          <motion.div className="md:w-[80%] w-full lg:h-[25rem] md:h-[43rem] xsm:h-[35rem] xsm:w-[365px] items-center flex justify-between lg:flex-row flex-col p-[1.2rem] bg-white rounded-[1.5rem] gap-8 shadowbox" initial={{ opacity: 0, x: "100"}} animate={controls3} transition={{ duration: 1.6 }} ref={ref3}>
            <div className="rounded-[1.5rem] lg:w-[53rem] lg:h-[22rem] w-auto h-auto shadowbox overflow-hidden transe">
              <a href="https://home-store-one.vercel.app/"
                 target="_blank"
              >
                <img loading="lazy" className="screen" src={home_store} alt="" />
              </a>
            </div>
            <div className="md:w-[30rem] xsm:w-[17rem] h-auto flex flex-col justify-center items-center">
              <h1 className="text-xl text-black font-bold uppercase">
              ECOMMERCE 🛒
              </h1>
              <p className="pro__textp font-bold mt-2">
              With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.
              </p>
              <div className="flex gap-[1rem] justify-center mt-[1rem]">
                <p className="stackp">React</p>
                <p className="stackp">Vanila CSS</p>
              </div>
              <div className="flex gap-[1rem] justify-center mt-[2rem]">
                <a
                  className="flex items-center text-[#2d2e32] font-semibold"
                  target="_blank"
                  href="https://home-store-one.vercel.app/"
                  rel="noreferrer"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="md:w-[80%] w-full lg:h-[25rem] md:h-[43rem] xsm:h-[35rem] xsm:w-[365px] items-center flex justify-between lg:flex-row flex-col p-[1.2rem] bg-white rounded-[1.5rem] gap-8 shadowbox" initial={{ opacity: 0, x: "-100"}} animate={controls4} transition={{ duration: 1.6 }} ref={ref4}>
          <div className="md:w-[30rem] xsm:w-[17rem] h-auto flex flex-col justify-center items-center">
              <h1 className="text-xl text-black font-bold uppercase">
                PHOTOGHRAPHER PORTFOLIO
              </h1>
              <p className="pro__textp font-bold mt-2">
              The website to present your work is great as a photographer from the best and most beautiful way to view your work.              </p>
              <div className="flex gap-[1rem] justify-center mt-[1rem]">
                <p className="stackp">React</p>
                <p className="stackp">Tailwind</p>
              </div>
              <div className="flex gap-[1rem] justify-center mt-[2rem]">
                <a
                  className="flex items-center text-[#2d2e32] font-semibold"
                  target="_blank"
                  href="https://photography-app-blue.vercel.app/"
                  rel="noreferrer"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="rounded-[1.5rem] lg:w-[53rem] lg:h-[22rem] w-auto h-auto shadowbox overflow-hidden">
              <a href="https://photography-app-blue.vercel.app/"
                 target="_blank"
              >
                <img loading="lazy" className="md:h-[100%] md:object-cover" src={photography} alt="" />
              </a>
            </div>
          </motion.div>

          <motion.div className="md:w-[80%] w-full lg:h-[25rem] md:h-[43rem] xsm:h-[35rem] xsm:w-[365px] items-center flex justify-between lg:flex-row flex-col p-[1.2rem] bg-white rounded-[1.5rem] gap-8 shadowbox" initial={{ opacity: 0, x: "100"}} animate={controls5} transition={{ duration: 1.6 }} ref={ref5}>
            <div className="rounded-[1.5rem] lg:w-[53rem] lg:h-[22rem] w-auto h-auto shadowbox overflow-hidden">
              <a href="https://ecommerce-shope.vercel.app/"
                 target="_blank"
              >
                <img loading="lazy" className="screen" src={ecommerce} alt="" />
              </a>
            </div>
            <div className="md:w-[30rem] xsm:w-[17rem] h-auto flex flex-col justify-center items-center">
              <h1 className="text-xl text-black font-bold uppercase">
              ECOMMERCE STORE
              </h1>
              <p className="pro__textp font-bold mt-2">
              Enter a world of design excellence with our curated collection of clean, modern and stylish design. Unleash your creativity and transform your surroundings with carefully designed pieces.
              </p>
              <div className="flex gap-[1rem] justify-center mt-[1rem]">
                <p className="stackp">React</p>
                <p className="stackp">Tailwind</p>
              </div>
              <div className="flex gap-[1rem] justify-center mt-[2rem]">
                <a
                  className="flex items-center text-[#2d2e32] font-semibold"
                  target="_blank"
                  href="https://ecommerce-shope.vercel.app//"
                  rel="noreferrer"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
