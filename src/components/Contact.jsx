import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { slideIn } from '../utils/motion';

const Contact = () => {
    const formRef = useRef();
    const [ form, setForm ] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [ loading, setLoading ] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            'service_jwbrf2v', 
            'template_mklkzti',
            {
                from_name: form.name,
                to_name: 'Victor Okpukpan',
                email_id: form.email,
                to_email: 'vokpukpan@gmail.com',
                message: form.message
            },
            'vWEgfFhiGnZnU7Az_'
        ).then(() => {
            setLoading(false)
            alert("Message sent. I will get back to you as soon as possible!");

            setForm({
                name: '',
                email: '',
                message: '',
            })
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong")
        })
    };

  return (
    <div className='max-w-screen-lg p-4 mx-auto text-white xl:mt-12 xl:flex-row flex overflow-hidden'>
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            className='flex flex-col w-full p-8 rounded-2xl md:w-[80%] lg:w-[60%] md:px-14 lg:px-0'
        >
            <p className='uppercase text-gray-400 font-medium'>Get in touch</p>
            <h3 className='text-4xl font-bold text-purple-600'>Contact.</h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='mt-12 flex flex-col gap-8'
            >
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Name</span>
                    <input 
                        type="text"
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your name?"
                        className='py-4 px-6 bg-transparent text-gray-400 rounded-lg outline-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Email</span>
                    <input 
                        type="email"
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your email?"
                        className='py-4 px-6 bg-transparent text-gray-400 rounded-lg outline-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Message</span>
                    <textarea 
                        rows="7"
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What do you want to say?"
                        className='py-4 px-6 bg-transparent text-gray-400 rounded-lg outline-none font-medium'
                    />
                </label>
                <motion.button animate={{y: [0, 10, 2, 0]}} transition={{ repeat: Infinity, duration: 1, delay: 1}} className="text-gray-400 border-purple-600 border py-3 px-8 mb-2 rounded-lg outline-none w-fit">
                    {loading ? "Sending..." : "Send"}
                </motion.button>
            </form>
        </motion.div>
    </div>
  )
}

export default Contact