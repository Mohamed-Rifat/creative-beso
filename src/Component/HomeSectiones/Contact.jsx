import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernContact = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [isCopiedPhone, setIsCopiedPhone] = useState(false);
    const [isCopiedEmail, setIsCopiedEmail] = useState(false);

    const contactMethods = [
        {
            title: "WhatsApp",
            description: "Let's chat directly on WhatsApp for quick collaboration and project discussions",
            href: "https://wa.me/201127260087",
            bg: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
            border: "border-emerald-200 dark:border-emerald-800",
            iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
            textColor: "text-emerald-800 dark:text-emerald-200",
            hoverGlow: "hover:shadow-emerald-500/20",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
        },
        {
            title: "Email",
            description: "Send me an email for detailed project proposals and professional inquiries",
            href: "mailto:basem.raafat1999@gmail.com",
            bg: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
            border: "border-blue-200 dark:border-blue-800",
            iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
            textColor: "text-blue-800 dark:text-blue-200",
            hoverGlow: "hover:shadow-blue-500/20",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "Phone",
            description: "Call me directly for immediate discussions and urgent project needs",
            href: "tel:01127260087",
            bg: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
            border: "border-purple-200 dark:border-purple-800",
            iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
            textColor: "text-purple-800 dark:text-purple-200",
            hoverGlow: "hover:shadow-purple-500/20",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
            ),
        },
    ];

    const copyToClipboardPhone = (text) => {
        navigator.clipboard.writeText(text);
        setIsCopiedPhone(true);
        setTimeout(() => setIsCopiedPhone(false), 2000);
    };
    const copyToClipboardEmail = (text) => {
        navigator.clipboard.writeText(text);
        setIsCopiedEmail(true);
        setTimeout(() => setIsCopiedEmail(false), 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative min-h-screen w-full py-20 bg-slate-50 dark:bg-gray-900 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
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
                    className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="flex flex-col items-center gap-4 text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Let's Build
                        </span>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2"
                        />

                        <span className="text-gray-600 dark:text-gray-300 text-2xl md:text-4xl font-light mt-2">
                            Something Amazing Together
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4"
                    >
                        Ready to turn your vision into reality? Let's connect and create something extraordinary.
                        I'm here to bring your ideas to life with cutting-edge solutions.
                    </motion.p>
                </motion.div>


                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            onHoverStart={() => setActiveCard(index)}
                            onHoverEnd={() => setActiveCard(null)}
                            className="relative group"
                        >
                            <a
                                href={method.href}
                                target={method.href.startsWith('http') ? '_blank' : '_self'}
                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                className={`block ${method.bg} ${method.border} border-2 rounded-2xl p-8 transition-all duration-500 group-hover:shadow-2xl ${method.hoverGlow} backdrop-blur-sm h-full flex flex-col justify-between`}
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${method.iconBg.replace('bg-gradient-to-br', 'bg-gradient-to-r')}`} />

                                <div className="relative z-10 flex flex-col justify-between h-full">
                                    <div>
                                        <div className={`${method.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            <div className="text-white">
                                                {method.icon}
                                            </div>
                                        </div>

                                        <h3 className={`text-xl font-semibold mb-3 ${method.textColor} group-hover:text-white transition-colors duration-300`}>
                                            {method.title}
                                        </h3>
                                        <p className={`${method.textColor} group-hover:text-white/90 transition-colors duration-300 leading-relaxed opacity-90`}>
                                            {method.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex items-center text-sm font-medium transition-colors duration-300">
                                        <span className={`${method.textColor} group-hover:text-white transition-colors duration-300`}>
                                            Get in touch
                                        </span>
                                        <motion.svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            animate={{ x: activeCard === index ? 4 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                        </motion.svg>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Prefer Traditional Methods?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Here's my direct contact information
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => copyToClipboardPhone("01127260087")}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                {isCopiedPhone ? "Copied!" : "Copy Phone Number"}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => copyToClipboardEmail("basem.raafat1999@gmail.com")}
                                className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                {isCopiedEmail ? "Copied!" : "Copy Email"}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {activeCard !== null && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className={`fixed bottom-8 right-8 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg ${contactMethods[activeCard]?.iconBg}`}
                        >
                            Click to connect via {contactMethods[activeCard]?.title}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ModernContact;