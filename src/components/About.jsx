/** @format */

import React, { useEffect, useRef } from "react";
import AboutImg from "../assets/about.jpg";
import { Link as ScrollLink } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({opacity: 1, x: 0});
    }
  }, [controls, inView]);
  return (
    <div id='about' className='w-full h-auto p-3 flex items-center py-36'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <motion.div className='col-span-2' initial={{ opacity: 1, x: '-100'}} animate={controls} transition={{ duration: 1.2 }}>
          <h1 className='text-xl tracking-widest text-[#1ca0e2] font-semibold'>
            A Little Background
          </h1>
          <h2 className='py-4 text-gray-600' ref={ref}>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind for frontend, and
            Sanity, Contentful for backend. I excel in designing and maintaining
            responsive websites that offer a smooth user experience. My
            expertise lies in crafting dynamic, engaging interfaces through
            writing clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player who
            thrives in collaborating with cross-functional teams to produce
            outstanding web applications.
          </p>
          <p className='py-2 text-gray-600'></p>
          <ScrollLink to='projects' spy={true} smooth={true} duration={500}>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </ScrollLink>
        </motion.div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img loading="lazy" src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import AboutImg from '../assets/about.jpg';
// import { motion, useAnimation } from 'framer-motion';
// import { useEffect, useRef } from 'react';
// import { useInView } from "react-intersection-observer";

// const About = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, });

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, x: 0 });
//     }
//   }, [controls, inView]);

//   return (
//     <div id='about' className='w-full md:h-auto p-2 flex items-center py-16'>
//       <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
//         <motion.div className='col-span-2' initial={{ opacity: 0, x: "-25%"}} animate={controls} transition={{ duration: 1 }} ref={ref}>
//           <h1 className='text-2xl tracking-widest text-[#5651e5] font-semibold'>
//             A Little Background
//           </h1>
//           <h2 className='py-4 text-gray-700'>Who I Am</h2>
//           <p className='py-2 text-gray-600'>
//             I specialize in building mobile responsive front-end UI applications
//             that connect with API’s and other backend technologies. I’m
//             passionate about learning new technologies and understand there is
//             more than one way to accomplish a task. Though I am most proficient
//             in building front-end applications using HTML, CSS, Javascript, and
//             React, I am a quick learner and can pick up new tech stacks as
//             needed. I believe that being a great developer is not using one
//             specific language, but choosing the best tool for the job.
//           </p>
//           <p className='py-2 text-gray-600'>
//             I started web developement in 2013 managing multiple e-commerce
//             websites on CMS platforms such as WordPress, BigCommerce, and
//             Shopify. I have experience working directly with clients and taking
//             mock wireframes all the way to deployed applications. In my spare
//             time I run Code Commerce, a Youtube channel where I teach web
//             developement and various front-end technologies.
//           </p>
//           <Link to='/#projects'>
//             <p className='py-2 text-gray-600 underline cursor-pointer'>
//               Check out some of my latest projects.
//             </p>
//           </Link>
//         </motion.div>
//         <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
//           <img src={AboutImg} className='rounded-xl' alt='/' />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


