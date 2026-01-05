import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import brand1 from "./../../assets/BrandIcons/brandIcon1.png";
import brand2 from "./../../assets/BrandIcons/brandIcon2.png";
import brand3 from "./../../assets/BrandIcons/brandIcon3.png";
import brand4 from "./../../assets/BrandIcons/brandIcon4.png";
import brand5 from "./../../assets/BrandIcons/brandIcon5.png";
import brand6 from "./../../assets/BrandIcons/brandIcon6.png";
import brand7 from "./../../assets/BrandIcons/brandIcon7.png";
import brand8 from "./../../assets/BrandIcons/brandIcon8.png";
import brand9 from "./../../assets/BrandIcons/brandIcon9.png";
import brand10 from "./../../assets/BrandIcons/brandIcon10.png";
import brand11 from "./../../assets/BrandIcons/brandIcon11.png";
import brand12 from "./../../assets/BrandIcons/brandIcon12.png";
import brand13 from "./../../assets/BrandIcons/brandIcon13.png";
import brand14 from "./../../assets/BrandIcons/brandIcon14.png";
import brand15 from "./../../assets/BrandIcons/brandIcon15.png";
import brand16 from "./../../assets/BrandIcons/brandIcon16.png";
import brand17 from "./../../assets/BrandIcons/brandIcon17.png";
import brand18 from "./../../assets/BrandIcons/brandIcon18.png";
import brand19 from "./../../assets/BrandIcons/brandIcon19.png";
import brand20 from "./../../assets/BrandIcons/brandIcon20.png";
import brand21 from "./../../assets/BrandIcons/brandIcon21.png";
import brand22 from "./../../assets/BrandIcons/brandIcon22.png";
import brand23 from "./../../assets/BrandIcons/brandIcon23.png";
import brand24 from "./../../assets/BrandIcons/brandIcon24.png";
import brand25 from "./../../assets/BrandIcons/brandIcon25.png";
import brand26 from "./../../assets/BrandIcons/brandIcon26.png";

const ClientsPage = () => {
  const brands = [
    brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9,
    brand10, brand11, brand12, brand13, brand14, brand15, brand16, brand17,
    brand18, brand19, brand20, brand21, brand22, brand23, brand24, brand25, brand26,
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.08),transparent_70%)] -z-10"></div>
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
             Trusted by Leading Brands
            </span>
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We’ve had the privilege of collaborating with outstanding brands that believe in creativity, storytelling, and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6 justify-items-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-full h-full object-contain drop-shadow-lg hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Want to collaborate with us?
          </h3>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
            >
              Start Your Project
              <FiArrowRight className="ml-2 text-xl" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsPage;
