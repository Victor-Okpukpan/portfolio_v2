import { FaGithub, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <section
      data-aos="fade-left"
      data-aos-duration="1000"
      id="home"
      className="pt-4 overflow-hidden"
    >
      <div className="max-w-6xl p-1 mx-auto h-screen mt-1 sm:mt-0 overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center items-start px-5 md:pl-20 tracking-widest">
          <p className="font-bold text-2xl sm:text-4xl lg:text-left text-gray-300 mb-6">
            Hi, I'm Victor - a{" "}
            <span className="text-purple-600">Frontend Developer</span> and{" "}
            <span className="text-purple-600">Content Writer</span>
          </p>
          <p className="text-gray-400 mb-6 text-sm sm:text-lg ">
            I am dedicated to crafting visually appealing and user-friendly
            websites and web services that are modern, interactive, and
            engaging. I am passionate about leveraging web development to shape
            the future of the digital landscape. With my expertise, I am
            committed to creating cutting-edge online experiences and
            contributing to the realization of innovative web solutions.
          </p>
          <motion.button
            onClick={() => window.location.replace("#contact")}
            animate={{ y: [0, 12, 2, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 1 }}
            className="text-sm md:text-base font-medium text-gray-400 hover:text-white transition ease-in duration-200 border-purple-600 border py-3 px-8 mb-2 rounded"
          >
            Contact Me
          </motion.button>
          <div className="w-full max-w-[200px] pt-6 flex items-center justify-between text-white">
            <FaFacebookF
              onClick={() =>
                window.open("https://www.facebook.com/sasha.blackshire.1/")
              }
              className="cursor-pointer hover:scale-125 transition ease-in duration-200"
              size={20}
            />
            <FaLinkedin
              onClick={() =>
                window.open("https://www.linkedin.com/in/victor-okpukpan/")
              }
              className="cursor-pointer hover:scale-125 transition ease-in duration-200"
              size={20}
            />
            <FaTwitter
              onClick={() => window.open("https://twitter.com/victorokpukpan_")}
              className="cursor-pointer hover:scale-125 transition ease-in duration-200"
              size={20}
            />
            <FaGithub
              onClick={() => window.open("https://github.com/Victor-Okpukpan")}
              className="cursor-pointer hover:scale-125 transition ease-in duration-200"
              size={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
