import { BallCanvas } from './canvas';
import css from "../assets/tech/css.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.png";
import reduxtoolkit from "../assets/tech/redux.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


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
          name: "Git/Github",
          icon: git,
        },
        
      ];

  return (
    <section id="tech" className='overflow-hidden max-w-6xl mx-auto mt-12 p-4 text-white h-[50%]'>
        <div className='flex flex-row flex-wrap justify-center gap-3'>
        {technologies.map((technology) => (
            <div data-aos="fade-up" data-aos-duration="1000" className='w-28 h-28' key={technology.name} title={technology.name}>
                <BallCanvas icon={technology.icon} />
            </div>
        ))}
    </div>
    </section>
  )
}

export default Tech;