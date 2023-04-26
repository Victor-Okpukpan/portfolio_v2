import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHive, FaGlobe, FaPhone, FaAt } from "react-icons/fa";
AOS.init();

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: FaHive,
      label: "Name",
      value: "Victor Okpukpan",
    },
    {
      id: 2,
      icon: FaGlobe,
      label: "Location",
      value: "Akwa-Ibom, Nigeria",
    },
    {
      id: 3,
      icon: FaPhone,
      label: "Call Me",
      value: "+234 806 991 9416",
    },
    {
      id: 4,
      icon: FaAt,
      label: "Email",
      value: "vokpukpan@gmail.com",
    },
  ];
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_jwbrf2v",
        "template_mklkzti",
        {
          from_name: form.name,
          to_name: "Victor Okpukpan",
          email_id: form.email,
          to_email: "vokpukpan@gmail.com",
          message: form.message,
        },
        "vWEgfFhiGnZnU7Az_"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent. I will get back to you as soon as possible!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <section
      id="contact"
      data-aos="fade-right"
      data-aos-duration="1000"
      className="flex flex-col w-full gap-5 md:gap-36 p-1 lg:px-7 items-start justify-center max-w-screen-lg mx-auto text-white xl:mt-12 md:flex-row overflow-hidden"
    >
      <div className="flex flex-col w-full md:w-1/2 p-5 rounded-2xl md:px-14 lg:px-0">
        <p className="uppercase text-gray-400 font-medium">Get in touch</p>
        <h3 className="text-3xl md:text-4xl font-bold text-purple-600">
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="text-sm py-4 px-6 bg-transparent text-gray-400 rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="text-sm py-4 px-6 bg-transparent text-gray-400 rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="text-sm py-4 px-6 bg-transparent text-gray-400 rounded-lg outline-none font-medium"
            />
          </label>
          <motion.button
            animate={{ y: [0, 12, 2, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 1 }}
            className="text-gray-400 hover:text-white text-sm font-medium transition duration-200 ease-in border-purple-600 border py-3 px-8 mb-2 rounded-lg outline-none w-fit"
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </div>
      <div className="p-8 mt-9 overflow-hidden">
        <h3 className="text-3xl md:text-4xl font-bold text-purple-600 whitespace-nowrap">
          Contact Info.
        </h3>
        <ul className="mt-12 flex flex-col">
          {contactInfo.map((info) => (
            <li key={info.id} className="flex items-center space-x-2">
              <div>
                {<info.icon className="pr-1 text-3xl text-purple-600" />}
              </div>
              <div className="p-4 flex flex-col justify-center border-l border-l-gray-400 h-full">
                <label className="font-bold text-white">{info.label}</label>
                <p className="text-sm text-gray-400">{info.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
