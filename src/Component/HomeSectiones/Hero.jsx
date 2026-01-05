import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import banner1v from "./../../assets/banner1v.jpg";
import banner2v from "./../../assets/banner2v.png";
import banner3v from "./../../assets/banner3v.jpg";
import banner4v from "./../../assets/banner4v.png";
import banner1h from "./../../assets/banner1h.png";
import banner2h from "./../../assets/banner2h.jpg";
import banner3h from "./../../assets/banner3h.png";
import banner4h from "./../../assets/banner4h.png";

const imagesh = [banner1h, banner2h, banner3h, banner4h];
const imagesv = [banner1v, banner2v, banner3v, banner4v];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateScreen = () => setIsMobile(window.innerWidth <= 768);
        updateScreen();
        window.addEventListener("resize", updateScreen);
        return () => window.removeEventListener("resize", updateScreen);
    }, []);

    const images = useMemo(() => (isMobile ? imagesv : imagesh), [isMobile]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={currentImage}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 sm:px-12">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white bg-clip-text drop-shadow-lg"
                >
                    Welcome to
                </motion.h1>
                <span className=" text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"> Beso's World</span>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-3xl text-gray-200 text-lg md:text-2xl leading-relaxed font-light"
                >
                    A space of diverse creativity that puts your brand or product in the
                    spotlight. Transforming <span className="font-semibold text-white">ideas</span> into
                    <span className="font-semibold text-blue-400"> captivating stories </span>
                    with real impact.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    onClick={() =>
                        document
                            .getElementById("about-section")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="mt-14 text-white hover:text-blue-400 transition-all duration-300"
                    aria-label="Scroll Down"
                >
                    <motion.svg
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </motion.svg>
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
