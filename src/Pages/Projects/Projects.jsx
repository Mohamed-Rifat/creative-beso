import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
const Projects = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('all');
    const audioRefs = useRef([]);
    const videoRefs = useRef([]);

    useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute("src", "https://www.instagram.com/embed.js");
        script.async = true;
        script.onload = () => {
            if (window.instgrm) window.instgrm.Embeds.process();
        };
        document.body.appendChild(script);
    }, []);

    const projectsData = {
        all: [
            {
                id: 24,
                title: "AI Project 1",
                package: "package4",
                videoUrl: "https://youtu.be/zw7r416d_Vw?si=pVB0gePiAKOHWfpx",
            },
            {
                id: 25,
                title: "AI Project 2",
                package: "package4",
                videoUrl: "https://youtu.be/NaKb_4gnVhA?si=9ACMSbuiaKMSSf1G",
            },
            {
                id: 26,
                title: "AI Project 3",
                package: "package4",
                videoUrl: "https://youtu.be/Z3yoMz_czVQ?si=VwN-vJmcBydr5Rxx",
            },
            {
                id: 27,
                title: "AI Project 4",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1rFhUlMiPH1CGtq9g3AKqItpYCOFkrhri/preview",
            },
            {
                id: 7,
                title: "Ministry of Youth Radio Campagin 2025",
                package: "package2",
                audioUrl: "/audio/1-Ministry-of-Youth - RadioCampaign 2025.mp3",
            },
            {
                id: 8,
                title: "Remas Land Ramadan 2025",
                package: "package2",
                audioUrl: "/audio/2-Remas Land - Ramadan 2025 Ad.mp3",
            },
            {
                id: 9,
                title: "Elbehairy Paints 2025",
                package: "package2",
                audioUrl: "/audio/3-El Behairy Paints - 2025 Campaign.mp3",
            },
            {
                id: 10,
                title: "Business Ya Shabab 2025",
                package: "package2",
                audioUrl: "/audio/4-Business Ya Shabab - 2025 Conference Ad.mp3",
            },
            {
                id: 11,
                title: "Vemto Paints",
                package: "package2",
                audioUrl: "/audio/5-Vemto Paints -Commercial.mp3",
            },
            {
                id: 12,
                title: "Leona Pet Insurance",
                package: "package2",
                audioUrl: "/audio/6-Leona Pet Insurance - Comic Sketch.mp3",
            },
            {
                id: 13,
                title: "Sofimer Med",
                package: "package2",
                audioUrl: "/audio/7-Sofimer Med - Commercial 2025.mp3",
            },
            {
                id: 14,
                title: "Si Perfume",
                package: "package2",
                audioUrl: "/audio/8-SI Perfume - Social Media Ad 2024.mp3",
            },
            {
                id: 15,
                title: "Royal Oud",
                package: "package2",
                audioUrl: "/audio/9-Royal Oud - Arabic Voiceover Spot.mp3",
            },
            {
                id: 16,
                title: "Pure Perfume",
                package: "package2",
                audioUrl: "/audio/10-Pure Perfume - Podcast Ad.mp3",
            },
            {
                id: 17,
                title: "Story Post Episode",
                package: "package2",
                audioUrl: "/audio/11-StoryPost Episode - Storytelling.mp3",
            },
            {
                id: 18,
                title: "Ibn Tulun Mosque",
                package: "package2",
                audioUrl: "/audio/12-Ibn Tulun Mosque - Documentary VO.mp3",
            },
            {
                id: 19,
                title: "Makanak Stores - Brand Teaser",
                package: "package2",
                audioUrl: "/audio/13-Makanak Stores - Brand Teaser.mp3",
            },
            {
                id: 20,
                title: "Leona Insurance",
                package: "package2",
                audioUrl: "/audio/14-Leona Insurance - Pet Carnival Ad.mp3",
            },
            {
                id: 21,
                title: "Lebaladna Mega Day",
                package: "package3",
                videoUrl: "https://www.instagram.com/reel/DJSD7VECkBA/?utm_source=ig_embed&amp;utm_campaign=loading",
            },
            {
                id: 22,
                title: "Tech Shift Summit 2025",
                package: "package3",
                videoUrl: "https://www.instagram.com/reel/DF8FHqbC9vy/?utm_source=ig_embed&amp;utm_campaign=loading",
            },
            {
                id: 23,
                title: "Egypt Cheese Festival",
                package: "package3",
                videoUrl: "https://www.instagram.com/reel/DDXk3doOsrp/?utm_source=ig_embed&amp;utm_campaign=loading",
            },
            {
                id: 1,
                title: "Elbehairy Paints Ad- 2025",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://www.youtube.com/embed/GOPffB-n0NY",
            },
            {
                id: 2,
                title: "Sofico Baby & Kids Ad - 2024",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://www.youtube.com/embed/5g4Kb8eWM14?si=2IvHCekcfQtWTU4X",
            },
            {
                id: 3,
                title: "Remas Land Ad- Ramadan 2025",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://www.youtube.com/embed/872dDPCLve0?si=nTxOOt8Pk50g0zoT",
            },
            {
                id: 4,
                title: "SI PERFUME OFFICIAL AD - SI.loving",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://www.youtube.com/embed/P4tPrDLbDb0?si=WYzoZtPCVewrdU8-",
            },
            {
                id: 5,
                title: "TV production - sofimer",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://drive.google.com/file/d/1kaG7Qwwr3tGvDrpaRNnMMpLgDDwXLrOK/preview",
            },
            {
                id: 6,
                title: "Leona Pet Insurance",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://www.youtube.com/embed/Ozwcd67QBfM?si=n7mGaILDcqN_PJJE",
            },
        ],
        package1: [
            {
                id: 1,
                title: "Elbehairy Paints Ad- 2025",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://www.youtube.com/embed/GOPffB-n0NY",
            },
            {
                id: 2,
                title: "Sofico Baby & Kids Ad - 2024",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://www.youtube.com/embed/5g4Kb8eWM14?si=2IvHCekcfQtWTU4X",
            },
            {
                id: 3,
                title: "Remas Land Ad- Ramadan 2025",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://www.youtube.com/embed/872dDPCLve0?si=nTxOOt8Pk50g0zoT",
            },
            {
                id: 4,
                title: "SI PERFUME OFFICIAL AD - SI.loving",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://www.youtube.com/embed/P4tPrDLbDb0?si=WYzoZtPCVewrdU8-",
            },
            {
                id: 5,
                title: "TV production - sofimer",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://drive.google.com/file/d/1kaG7Qwwr3tGvDrpaRNnMMpLgDDwXLrOK/preview",
            },
            {
                id: 6,
                title: "Leona Pet Insurance",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://www.youtube.com/embed/Ozwcd67QBfM?si=n7mGaILDcqN_PJJE",
            },
        ],
        package2: [
            {
                id: 7,
                title: "Ministry of Youth Radio Campagin 2025",
                package: "package2",
                audioUrl: "/audio/1-Ministry-of-Youth - RadioCampaign 2025.mp3",
            },
            {
                id: 8,
                title: "Remas Land Ramadan 2025",
                package: "package2",
                audioUrl: "/audio/2-Remas Land - Ramadan 2025 Ad.mp3",
            },
            {
                id: 9,
                title: "Elbehairy Paints 2025",
                package: "package2",
                audioUrl: "/audio/3-El Behairy Paints - 2025 Campaign.mp3",
            },
            {
                id: 10,
                title: "Business Ya Shabab 2025",
                package: "package2",
                audioUrl: "/audio/4-Business Ya Shabab - 2025 Conference Ad.mp3",
            },
            {
                id: 11,
                title: "Vemto Paints",
                package: "package2",
                audioUrl: "/audio/5-Vemto Paints -Commercial.mp3",
            },
            {
                id: 12,
                title: "Leona Pet Insurance",
                package: "package2",
                audioUrl: "/audio/6-Leona Pet Insurance - Comic Sketch.mp3",
            },
            {
                id: 13,
                title: "Sofimer Med",
                package: "package2",
                audioUrl: "/audio/7-Sofimer Med - Commercial 2025.mp3",
            },
            {
                id: 14,
                title: "Si Perfume",
                package: "package2",
                audioUrl: "/audio/8-SI Perfume - Social Media Ad 2024.mp3",
            },
            {
                id: 15,
                title: "Royal Oud",
                package: "package2",
                audioUrl: "/audio/9-Royal Oud - Arabic Voiceover Spot.mp3",
            },
            {
                id: 16,
                title: "Pure Perfume",
                package: "package2",
                audioUrl: "/audio/10-Pure Perfume - Podcast Ad.mp3",
            },
            {
                id: 17,
                title: "Story Post Episode",
                package: "package2",
                audioUrl: "/audio/11-StoryPost Episode - Storytelling.mp3",
            },
            {
                id: 18,
                title: "Ibn Tulun Mosque",
                package: "package2",
                audioUrl: "/audio/12-Ibn Tulun Mosque - Documentary VO.mp3",
            },
            {
                id: 19,
                title: "Makanak Stores - Brand Teaser",
                package: "package2",
                audioUrl: "/audio/13-Makanak Stores - Brand Teaser.mp3",
            },
            {
                id: 20,
                title: "Leona Insurance",
                package: "package2",
                audioUrl: "/audio/14-Leona Insurance - Pet Carnival Ad.mp3",
            },
        ],
        package3: [
            {
                id: 21,
                title: "Lebaladna Mega Day",
                package: "package3",
                videoUrl: "https://www.instagram.com/reel/DJSD7VECkBA/?utm_source=ig_embed&amp;utm_campaign=loading",
            },
            {
                id: 22,
                title: "Tech Shift Summit 2025",
                package: "package3",
                videoUrl: "https://www.instagram.com/reel/DF8FHqbC9vy/?utm_source=ig_embed&amp;utm_campaign=loading",
            },
            {
                id: 23,
                title: "Egypt Cheese Festival",
                package: "package3",
                videoUrl: "https://www.instagram.com/reel/DDXk3doOsrp/?utm_source=ig_embed&amp;utm_campaign=loading",
            },
        ],
        package4: [
            {
                id: 24,
                title: "AI Project 1",
                package: "package4",
                videoUrl: "https://youtu.be/zw7r416d_Vw?si=pVB0gePiAKOHWfpx",
            },
            {
                id: 25,
                title: "AI Project 2",
                package: "package4",
                videoUrl: "https://youtu.be/NaKb_4gnVhA?si=9ACMSbuiaKMSSf1G",
            },
            {
                id: 26,
                title: "AI Project 3",
                package: "package4",
                videoUrl: "https://youtu.be/Z3yoMz_czVQ?si=VwN-vJmcBydr5Rxx",
            },
            {
                id: 27,
                title: "AI Project 4",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1rFhUlMiPH1CGtq9g3AKqItpYCOFkrhri/preview",
            },
        ],
    };

    useEffect(() => {
        const filter = searchParams.get('filter');
        if (filter && ['package4', 'package2', 'package3', 'package1'].includes(filter)) {
            setActiveFilter(filter);
        }
    }, [searchParams]);

    const handleFilterChange = (filterType) => {
        setActiveFilter(filterType);
        navigate(`?filter=${filterType}`);
    };

    const filteredProjects = activeFilter === 'all'
        ? projectsData.all
        : projectsData[activeFilter];
    const handlePlay = (currentIndex) => {
        audioRefs.current.forEach((audio, index) => {
            if (audio && index !== currentIndex) {
                audio.pause();
                audio.currentTime = 0;
            }
        });

        videoRefs.current.forEach((video, index) => {
            if (video && index !== currentIndex) {
                video.pause();
                video.currentTime = 0;
            }
        });
    };
    return (
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold dark:text-white mb-4"
                    >
                        My <span className="text-purple-600 dark:text-purple-400">Projects</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                        Explore my professional voice over work across different categories
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2">
                    {['all', 'package4', 'package2', 'package3', 'package1'].map((filterType) => (
                        <motion.button
                            key={filterType}
                            onClick={() => handleFilterChange(filterType)}
                            className={`px-4 py-2 text-sm md:text-base md:px-6 md:py-2 rounded-full font-medium ${activeFilter === filterType
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                                }`}
                        >
                            {filterType === 'all' ? 'All Projects' :
                                filterType === 'package4' ? 'AI Production' :
                                    filterType === 'package2' ? 'Voice Over' :
                                        filterType === 'package3' ? 'Event Host' :
                                            filterType === 'package1' ? 'Creative Copywriting' : ''}
                        </motion.button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-transparent dark:bg-transparent overflow-hidden"
                        >
                            {project.videoUrl ? (
                                <div>
                                    <div className={`w-full ${project.videoUrl.includes("instagram.com/reel") ? 'aspect-square instagram-container' : 'aspect-video'}`}>
                                        {project.videoUrl.includes("instagram.com/reel") ? (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-2">
                                                <blockquote
                                                    className="instagram-media w-full h-full"
                                                    data-instgrm-permalink={project.videoUrl.split("?")[0]}
                                                    data-instgrm-version="14"
                                                    data-instgrm-captioned
                                                    style={{ 
                                                        width: '100%',
                                                        maxWidth: '100%',
                                                        minWidth: '100%',
                                                        height: '100%',
                                                        margin: 0,
                                                        padding: 0,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                </blockquote>
                                            </div>
                                        ) : project.videoUrl.includes("youtube") || project.videoUrl.includes("youtu.be") ? (
                                            <iframe
                                                className="w-full h-full"
                                                src={project.videoUrl.replace("youtu.be", "www.youtube.com/embed")}
                                                title={project.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                frameBorder="0"
                                            ></iframe>
                                        ) : project.videoUrl.includes("drive.google.com") ? (
                                            <iframe
                                                className="w-full h-full"
                                                src={project.videoUrl.replace("/view", "/preview")}
                                                title={project.title}
                                                allow="autoplay; encrypted-media"
                                                allowFullScreen
                                                frameBorder="0"
                                            ></iframe>
                                        ) : (
                                            <video
                                                controls
                                                className="w-full h-full object-cover"
                                                ref={(el) => (videoRefs.current[index] = el)}
                                                onPlay={() => handlePlay(index)}
                                            >
                                                <source src={project.videoUrl} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-1">
                                            {project.title}
                                        </h3>
                                        {project.description && (
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                                {project.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="p-4">
                                    <div className="flex items-start mb-3">
                                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                                            <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                                Audio Project
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <audio
                                        controls
                                        className="w-full mt-2"
                                        ref={(el) => (audioRefs.current[index] = el)}
                                        onPlay={() => handlePlay(index)}
                                    >
                                        <source src={project.audioUrl} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            )}
                            <div className="px-4 pb-4">
                                <div className="flex flex-wrap gap-1 md:gap-2">
                                    {project.package === "package1" && (
                                        <>
                                            <span className="inline-block px-2 md:px-3 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                                                Creative CopyWriting
                                            </span>
                                            <span className="inline-block px-2 md:px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                                                Voice Over
                                            </span>
                                        </>
                                    )}
                                    {project.package === "package2" && (
                                        <span className="inline-block px-2 md:px-3 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                                            Voice Over
                                        </span>
                                    )}
                                    {project.package === "package3" && (
                                        <span className="inline-block px-2 md:px-3 py-1 text-xs rounded-full bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200">
                                            Event Host
                                        </span>
                                    )}
                                    {project.package === "package4" && (
                                        <span className="inline-block px-2 md:px-3 py-1 text-xs rounded-full bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200">
                                            AI Production
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;