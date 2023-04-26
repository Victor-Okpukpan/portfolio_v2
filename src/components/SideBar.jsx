import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const SideBar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <nav className="fixed bg-black h-14 w-full md:bg-transparent z-[100] overflow-hidden">
      {!nav ? (
        <div className="overflow-hidden">
          <AiOutlineMenu
            size={20}
            className="fixed top-4 right-4 transition ease-in duration-200 md:hidden text-white z-99 cursor-pointer"
            onClick={handleNav}
          />
        </div>
      ) : (
        ""
      )}
      {nav ? (
        <div className="fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center overflow-hidden z-90">
          <AiOutlineClose
            size={20}
            className="fixed top-4 right-4 transition ease-in duration-200 md:hidden text-white z-99 cursor-pointer"
            onClick={handleNav}
          />
          <a
            onClick={handleNav}
            href="#home"
            className="w-[75%] flex justify-center items-center space-x-2 font-medium shadow-md p-4 m-2 text-white hover:text-purple-600 hover:scale-110 transition ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span>Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#experience"
            className="w-[75%] flex justify-center items-center space-x-2 font-medium shadow-md p-4 m-2 text-white hover:text-purple-600 hover:scale-110 transition ease-in duration-200"
          >
            <GrProjects className="bg-white" size={20} />
            <span>Experience</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center space-x-2 font-medium shadow-md p-4 m-2 hover:text-purple-600 text-white hover:scale-110 transition ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span>Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center space-x-2 font-medium shadow-md p-4 m-2 hover:text-purple-600 text-white hover:scale-110 transition ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span>Contact</span>
          </a>
          <a
            onClick={handleNav}
            href="/Victor Okpukpan's Resume.pdf"
            download="Victor Okpukpan.pdf"
            className="w-[75%] flex justify-center items-center space-x-2 font-medium shadow-md p-4 m-2 hover:text-purple-600 text-white hover:scale-110 transition ease-in duration-200"
          >
            <BsPerson size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="hidden md:block fixed top-[25%] z-10 overflow-hidden">
        <div className="flex flex-col">
          <a
            href="#home"
            title="Home"
            className="rounded-full m-2 p-4 shadow-md hover:scale-110 bg-gray-100 cursor-pointer transition ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#experience"
            title="Experience"
            className="rounded-full m-2 p-4 shadow-md hover:scale-110 bg-gray-100 cursor-pointer transition ease-in duration-200"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            title="Projects"
            className="rounded-full m-2 p-4 shadow-md hover:scale-110 bg-gray-100 cursor-pointer transition ease-in duration-200"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#contact"
            title="Contact"
            className="rounded-full m-2 p-4 shadow-md hover:scale-110 bg-gray-100 cursor-pointer transition ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
          <a
            href="/Victor Okpukpan's Resume.pdf"
            download="Victor Okpukpan.pdf"
            title="Download Resume"
            className="rounded-full m-2 p-4 shadow-md hover:scale-110 bg-gray-100 cursor-pointer transition ease-in duration-200"
          >
            <BsPerson size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
