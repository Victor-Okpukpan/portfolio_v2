import React from "react";

import TasteDelight from "../assets/Taste Delight.png";
import RealtorClone from "../assets/Realtor clone.png";
import Portfolio from "../assets/Portfolio.png";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Projects = ({index}) => {
  const projectItems = [
    {
      id: 1,
      src: RealtorClone,
      alt: "Realtor Estate Website",
      title: "Realtor Clone", 
      demo: "https://realtor-clone-by-victor.vercel.app/",
      code: "https://github.com/Victor-Okpukpan/realtor-clone-react",
      description: "A fully functional real estate website built with React, Tailwind CSS and Firebase.",
    },
    {
      id: 2,
      src: TasteDelight,
      alt: "Restaurant Website",
      title: "Taste Delight Restaurant", 
      demo: "https://taste-delight.vercel.app/",
      code: "https://github.com/Victor-Okpukpan/Taste-Delight-2.0",
      description: "A responsive restaurant website built with HTML, CSS, and JavaScript.",
    },
    {
      id: 3,
      src: Portfolio,
      alt: "Portfolio Website",
      title: "Portfolio Website v1", 
      demo: "https://vokpukpan.vercel.app/",
      code: "https://github.com/Victor-Okpukpan/Portfolio-Website",
      description: "My first portfolio website built with HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <section id="projects" className="w-full m-auto p-1">
      <div className="max-w-screen-lg p-5 mx-auto md:px-14 lg:px-7">
        <p className='uppercase text-gray-400 font-medium'>My Works</p>
        <h3 className="text-purple-600 mb-12 text-3xl md:text-4xl font-bold">
          Projects.
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-0">
          {projectItems.map(({ id, src, title, demo, code, description, alt }) => (
            <Tilt key={index} className="xs:w-[250px] w-full">
              <motion.div data-aos="flip-right"
    data-aos-duration="1000" className="w-full shadow-card">     
            <div options={{
              max: 45,
              scale: 1,
              speed: 450,
            }} className="border border-gray-500 overflow-hidden rounded-lg min-h-[280px] ">
            <div key={id} className="rounded-tr-lg ">
              <img
                src={src}
                alt={alt}
                className="rounded transition duration-200 "
              />
            </div>
            <div>
              <div className="text-gray-400 w-full px-6 py-3 border border-gray-500 text-center text-sm font-bold">
                <h1>{title}</h1>
              </div>
              <div className="text-gray-400 w-full px-6 py-3 border border-gray-500 text-xs">
                <p>{description}</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button onClick={() => window.open(demo)} className="text-sm md:text-base rounded text-gray-400 hover:text-white w-1/2 px-6 py-3 m-4 hover:scale-110 transition ease-in duration-200 border border-gray-500 hover:border-white">
                  Demo
              </button>
              <button onClick={() => window.open(code)} className="text-sm md:text-base rounded text-gray-400 hover:text-white w-1/2 px-6 py-3 m-4 hover:scale-110 transition ease-in duration-200 border border-gray-500 hover:border-white">
                  Code
              </button>
            </div>
          </div>
              </motion.div>
            </Tilt>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
