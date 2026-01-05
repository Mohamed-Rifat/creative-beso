import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutImg from "./../../assets/aboutMe.png";

const About = () => {
  const skills = ['Creative Copywriting', 'Voice Over', 'Event Hosting', 'All Media Solutions'];

  return (
    <section id="about-section" className="bg-slate-50 dark:bg-[#121929] w-full overflow-x-hidden py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">About Me</span> 
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left px-4 py-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Who is Basem?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A multi-skilled creative and business developer with 3+ years of experience in advertising, voice-over, and brand development through content.
              Worked with top Egyptian brands on TV, radio, and digital campaigns — across both B2B and B2C sectors.
              I help brands grow through:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {skills.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  className="flex items-center gap-2 w-full sm:w-auto"
                >
                  <div
                    className={`min-w-8 h-8 rounded-full ${
                      index === 0
                        ? 'bg-blue-100 dark:bg-blue-900'
                        : index === 1
                        ? 'bg-purple-100 dark:bg-purple-900'
                        : index === 2
                        ? 'bg-indigo-100 dark:bg-indigo-900'
                        : 'bg-pink-100 dark:bg-pink-900'
                    } flex items-center justify-center flex-shrink-0`}
                  >
                    <svg
                      className={`w-4 h-4 ${
                        index === 0
                          ? 'text-blue-600 dark:text-blue-400'
                          : index === 1
                          ? 'text-purple-600 dark:text-purple-400'
                          : index === 2
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-pink-600 dark:text-pink-400'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 whitespace-nowrap">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Link to="/about">More About Me</Link>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative group px-4"
          >
            <div className="absolute"></div>
            <img
              src={aboutImg}
              alt="About"
              className="relative w-full h-auto scale-150"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;