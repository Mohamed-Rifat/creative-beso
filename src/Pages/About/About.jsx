import React from "react";
import { motion } from "framer-motion";
import banner from './../../assets/basem cover.jpg'
const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500 ">
      <div className="relative h-[30rem] w-full container mx-auto max-w-7xl">
        <img src={banner} alt="Basem Raafat Cover" className="w-full h-full "/>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">Basem Raafat</h1>
          <p className="text-lg md:text-2xl text-gray-200 mt-2">From Voice to Vision — Creative Storyteller</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14"
      >
        <section className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-2xl font-bold mb-3">🎓 The Foundation</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I’m Basem Raafat — a graduate of the Faculty of Mass Communication, Al-Azhar University, Cairo, class of 2021. This is where the foundation was laid for every step that would turn into tangible work.
          </p>
        </section>

        <section className="border-l-4 border-pink-500 pl-4">
          <h2 className="text-2xl font-bold mb-3">🎙 Where It All Started</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In 2021, my voice opened the first door. I began as a voice-over artist, then as a creative copywriter, and within a year, I worked on diverse projects for ads, promos, and content both inside and outside Egypt.
          </p>
        </section>

        <section className="border-l-4 border-yellow-500 pl-4">
          <h2 className="text-2xl font-bold mb-3">💡 From Voice to Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In 2023, I took practical steps to grow and advance in the job market by managing client accounts as an "account manager" at one of the largest advertising agencies. This opportunity allowed me to transform ideas and creative concepts into campaigns across TV, radio, and digital—working with numerous brands across various industries.
          </p>
        </section>

        <section className="border-l-4 border-green-500 pl-4">
          <h2 className="text-2xl font-bold mb-3">👔 More Than a Creative</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            By early 2024, I was promoted to Business Developer. While building content and ideas, I was also crafting business strategies. My responsibilities expanded to delivering comprehensive (B2B & B2C) content solutions with a skilled team behind me.
          </p>
        </section>

        <section className="border-l-4 border-purple-500 pl-4">
          <h2 className="text-2xl font-bold mb-3">🧠 Knowledge Shared, Voices Raised</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I’ve also worked as a public speaker and trainer, delivering:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-600 dark:text-gray-300 space-y-2">
            <li>Courses in voice performance and narration.</li>
            <li>
              Workshops on advertising production, where I proudly represented "Radio Masr" as a speaker at creative events in major universities:
              <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
                <li>Misr International University (MIU)</li>
                <li>The Canadian International College (CIC)</li>
              </ul>
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default AboutMe;
