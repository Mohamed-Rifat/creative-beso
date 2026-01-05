import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import project1 from './../../assets/AiVideoEditors.png';
import project2 from './../../assets/creative.png';
import project3 from './../../assets/voice.png';
import project4 from './../../assets/event.jpg';


const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "AI Production",
            description: "Crafting compelling AI-generated narratives that captivate audiences and drive engagement through intelligent storytelling algorithms",
            image: project1,
            tags: ["AI Content", "Machine Learning", "Natural Language", "Neural Networks"],
            link: "/projects?filter=package4",
            gradient: "from-purple-500 to-indigo-500",
            bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20"
        },
        {
            id: 2,
            title: "Creative Copywriting",
            description: "Crafting compelling narratives that captivate audiences and drive engagement through powerful storytelling",
            image: project2,
            tags: ["Content", "Storytelling", "Brand Voice"],
            link: "/projects?filter=package1",
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
        },
        {
            id: 3,
            title: "Voice Over",
            description: "Professional voice performances that bring characters and messages to life with emotional depth",
            image: project3,
            tags: ["Narration", "Character", "Commercial"],
            link: "/projects?filter=package2",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
        },
        {
            id: 4,
            title: "Event Host",
            description: "Dynamic event hosting that creates memorable experiences and engages audiences seamlessly",
            image: project4,
            tags: ["Live Events", "MC", "Moderation"],
            link: "/projects?filter=package3",
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative w-full py-20 bg-slate-100 dark:bg-gray-900 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/10 dark:to-purple-950/10" />
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"
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
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Creative Portfolio
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                            className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full origin-left"
                        />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Explore my diverse range of voice and creative projects that bring stories to life
                        and create unforgettable experiences.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="group relative"
                        >
                            <div className={`relative h-96 rounded-md overflow-hidden shadow-xl ${project.bgGradient} border border-gray-200 dark:border-gray-700 backdrop-blur-sm`}>

                                <motion.div
                                    className="relative h-full w-full overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        animate={{
                                            filter: hoveredProject === project.id ? 'blur(0px)' : 'blur(8px)'
                                        }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                </motion.div>
                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">

                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tag}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: tagIndex * 0.1 + 0.3 }}
                                                className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium border border-white/30"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="transform group-hover:-translate-y-2 transition-transform duration-500"
                                    >
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-200 text-sm leading-relaxed mb-4 opacity-90 line-clamp-2">
                                            {project.description}
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="transform group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4"
                                    >
                                        <Link
                                            to={project.link}
                                            className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-r hover:from-white hover:to-gray-100"
                                        >
                                            <span>View Project</span>
                                            <motion.svg
                                                className="w-4 h-4 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                animate={{ x: hoveredProject === project.id ? 4 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </motion.svg>
                                        </Link>
                                    </motion.div>
                                </div>

                                <motion.div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;