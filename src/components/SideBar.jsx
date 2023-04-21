import React, { useState } from "react";
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
    <div className="fixed bg-black h-14 w-full md:bg-transparent z-[100]">
      {!nav ? (
       <div className=" ">
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
            className="w-[75%] flex justify-center items-center space-x-2 font-medium shadow-md p-4 rounded-full m-2 bg-purple-600 text-white hover:scale-110 transition ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span>Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center space-x-2 font-medium shadow-md p-4 rounded-full m-2 bg-purple-600 text-white hover:scale-110 transition ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span>Projects</span>
          </a>
          <a
            onClick={handleNav}
            href=""
            className="w-[75%] flex justify-center items-center space-x-2 font-medium shadow-md p-4 rounded-full m-2 bg-purple-600 text-white hover:scale-110 transition ease-in duration-200"
          >
            <BsPerson size={20} />
            <span>Resume</span>
          </a>
          <a
            onClick={handleNav}
            href=""
            className="w-[75%] flex justify-center items-center space-x-2 font-medium shadow-md p-4 rounded-full m-2 bg-purple-600 text-white hover:scale-110 transition ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span>Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="hidden md:block fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href=""
            className="rounded-full m-2 p-4 shadow-md hover:scale-110 bg-gray-100 cursor-pointer transition ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>

          <a
            href=""
            className="rounded-full m-2 p-4 shadow-md hover:scale-110 bg-gray-100 cursor-pointer transition ease-in duration-200"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href=""
            className="rounded-full m-2 p-4 shadow-md hover:scale-110 bg-gray-100 cursor-pointer transition ease-in duration-200"
          >
            <BsPerson size={20} />
          </a>
          <a
            href=""
            className="rounded-full m-2 p-4 shadow-md hover:scale-110 bg-gray-100 cursor-pointer transition ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;