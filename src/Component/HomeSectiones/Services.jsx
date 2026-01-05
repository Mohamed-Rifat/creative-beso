import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPenAlt, FaVideo, FaMicrophone, FaRobot, FaImages } from 'react-icons/fa';
import { GiSpeaker } from 'react-icons/gi';

const Services = () => {
  const voiceServices = [
    {
      title: "Creative Copywriting",
      icon: <FaPenAlt className="text-2xl text-blue-500" />,
    },
    {
      title: "Creative Reels",
      icon: <FaVideo className="text-2xl text-purple-500" />,
    },
    {
      title: "Event Hosting",
      icon: <GiSpeaker className="text-2xl text-red-500" />,
    },
    {
      title: "Voice Over",
      icon: <FaMicrophone className="text-2xl text-green-500" />,
    },
    {
      title: "AI Creation",
      icon: <FaRobot className="text-2xl text-yellow-500" />,
    },
    {
      title: "Presentation & Storyboard",
      icon: <FaImages className="text-2xl text-indigo-500" />,
    },
  ];

  return (
    <section className="w-full py-16 bg-slate-100 dark:bg-[#121929]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Professional Services
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Premium voice-over solutions with distinctive tonality and broadcast quality
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {voiceServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="group text-center"
            >
              <div className=" p-4 md:p-6  transition-all duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-gray-800 dark:text-white leading-tight">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link 
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            More Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;