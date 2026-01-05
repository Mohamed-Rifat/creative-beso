import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import brand9 from './../../assets/BrandIcons/brandIcon9.png';
import brand11 from './../../assets/BrandIcons/brandIcon11.png';
import brand12 from './../../assets/BrandIcons/brandIcon12.png';
import brand17 from './../../assets/BrandIcons/brandIcon17.png';
import brand18 from './../../assets/BrandIcons/brandIcon18.png';
import brand22 from './../../assets/BrandIcons/brandIcon22.png';

const Clients = () => {
    const clients = [
        { name: 'Business', logo: brand9 },
        { name: 'mightCinema', logo: brand11 },
        { name: 'SoficoBaby', logo: brand12 },
        { name: 'Ministry of Youth and Sports', logo: brand17 },
        { name: 'RemasLand', logo: brand18 },
        { name: 'TechShift', logo: brand22 },
    ];

    return (
        <section className="relative w-full py-20 bg-slate-50 dark:bg-gray-900 overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Trusted By Leading Brands
                        </span>
                    </h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 mb-10 rounded-full origin-left"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        I've had the privilege of collaborating with these industry leaders and innovative brands
                    </motion.p>
                </motion.div>

                <div className="relative w-full py-4 overflow-x-hidden">

                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            duration: 12,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                        className="flex space-x-6 w-max py-4"
                    >
                        {[...clients, ...clients].map((client, i) => (
                            <motion.div
                                key={`client-${i}`}
                                className="flex items-center justify-center"
                            >
                                <div className="relative group">
                                    <div className="w-44 h-44 rounded-full flex items-center justify-center p-2">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className=" object-contain"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/clients"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                        >
                            <span>View All Clients</span>
                            <motion.svg
                                className="w-5 h-5 ml-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </motion.svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;