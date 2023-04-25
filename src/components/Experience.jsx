import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "",
    icon: '',
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Enhanced proficiency in incorporating SEO principles to design user interfaces that are intuitive and user-friendly.",
      "Providing constructive feedback to other beginner developers.",
    ],
  },
 
];
const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{ background: 'transparent', border: '1px solid'}}
        contentArrowStyle={{ borderRight: '7px solid gray'}}
        date={experience.date}
        dateClassName="text-gray-400"
        iconStyle={{ background: experience.iconBg}}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                {/* <img src={experience.icon} alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain" /> */}
            </div>
        }
    >
        <div>
        <h3 className='text-white text-xl font-bold'>{experience.title}</h3>
        <p
          className='text-gray-300 text-sm font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 text-gray-400'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-xs pl-1 tracking-widest'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <section className="max-w-screen-lg p-1 lg:p-0 mx-auto">
      <motion.div
      initial={{ y: -50, opacity: 0}}
      animate={{ y: 0, opacity: 1}}
      transition={{ type: "spring", duration: 1.25 }}
        className="max-w-screen-lg p-5 mx-auto"
      >
        <p className="uppercase text-gray-400 font-medium">My journey so far</p>
        <h3 className="text-3xl md:text-4xl font-bold text-purple-600">Work Experience.</h3>
      </motion.div>
      <div className="mt-12 flex flx-col">
        <VerticalTimeline>
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
            ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
