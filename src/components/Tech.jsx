import React from 'react';
import { BallCanvas } from './canvas';
import css from "../assets/tech/css.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.png";
import reduxtoolkit from "../assets/tech/redux.png";

const Tech = () => {
    const technologies = [
        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Redux Toolkit",
          icon: reduxtoolkit,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Three JS",
          icon: threejs,
        },
        {
          name: "git",
          icon: git,
        },
        
      ];

  return (
    <div>
        <div className='max-w-6xl mx-auto flex flex-row flex-wrap justify-center gap-10 text-white h-[50%] z-[-1]'>
        {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
            </div>
        ))}
    </div>
    </div>
  )
}

export default Tech;