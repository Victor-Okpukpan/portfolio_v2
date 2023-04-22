import React from "react";

import TasteDelight from "../assets/Taste Delight.png";
import RealtorClone from "../assets/Realtor clone.png";
import Portfolio from "../assets/Portfolio.png";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Projects = ({index}) => {
  const projectItems = [
    {
      id: 1,
      src: RealtorClone,
      title: "Realtor Clone", 
      demo: "https://realtor-clone-by-victor.vercel.app/",
      code: "https://github.com/Victor-Okpukpan/realtor-clone-react",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ab? Adipisci reiciendis expedita cum, quos ",
    },
    {
      id: 2,
      src: TasteDelight,
      title: "Taste Delight Restaurant", 
      demo: "https://taste-delight.vercel.app/",
      code: "https://github.com/Victor-Okpukpan/Taste-Delight-2.0",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ab? Adipisci reiciendis expedita cum, quos ",
    },
    {
      id: 3,
      src: Portfolio,
      title: "Portfolio Website v1", 
      demo: "https://vokpukpan.vercel.app/",
      code: "https://github.com/Victor-Okpukpan/Portfolio-Website",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ab? Adipisci reiciendis expedita cum, quos ",
    },
  ];

  return (
    <div id="projects" className="w-full m-auto p-4">
      <div className="max-w-screen-lg p-8 mx-auto md:px-14 lg:px-0">
        <p className='uppercase text-gray-400 font-medium'>My Works</p>
        <h1 className="text-purple-600 mb-12 text-3xl font-bold">
          Projects.
        </h1>

        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {projectItems.map(({ id, src, title, demo, code, description }) => (
            <Tilt className="xs:w-[250px] w-full">
              <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full shadow-card">     
            <div options={{
              max: 45,
              scale: 1,
              speed: 450,
            }} className="border border-gray-500 overflow-hidden rounded-lg min-h-[280px] ">
            <div key={id} className="rounded-tr-lg ">
              <img
                src={src}
                alt=""
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
              <button onClick={() => window.open(demo)} className="text-white w-1/2 px-6 py-3 m-4 hover:scale-110 transition ease-in duration-200 border border-gray-500">
                  Demo
              </button>
              <button onClick={() => window.open(code)} className="text-white w-1/2 px-6 py-3 m-4 hover:scale-110 transition ease-in duration-200 border border-gray-500">
                  Code
              </button>
            </div>
          </div>
              </motion.div>
            </Tilt>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
