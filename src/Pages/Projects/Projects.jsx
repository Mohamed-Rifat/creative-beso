import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";

const YouTubePlayer = ({ videoId, title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
            {!isLoaded ? (
                <button
                    type="button"
                    onClick={() => setIsLoaded(true)}
                    className="group relative block h-full w-full cursor-pointer"
                    aria-label={`Play ${title}`}
                >
                    <img
                        src={thumbnailUrl}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />

                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
                        <svg
                            className="ml-1 h-7 w-7 text-purple-600"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M8 5.14v13.72a1 1 0 0 0 1.53.85l10.36-6.86a1 1 0 0 0 0-1.7L9.53 4.29A1 1 0 0 0 8 5.14Z" />
                        </svg>
                    </span>
                </button>
            ) : (
                <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                    title={title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    frameBorder="0"
                />
            )}
        </div>
    );
};

const getYouTubeId = (url) => {
    if (!url) return null;

    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.hostname === "youtu.be") {
            return parsedUrl.pathname.replace("/", "").split("/")[0] || null;
        }
        if (
            parsedUrl.hostname.includes("youtube.com") &&
            parsedUrl.searchParams.get("v")
        ) {
            return parsedUrl.searchParams.get("v");
        }
        if (parsedUrl.hostname.includes("youtube.com")) {
            const match = parsedUrl.pathname.match(/\/embed\/([^/]+)/);

            if (match) {
                return match[1];
            }
        }

        return null;
    } catch {
        return null;
    }
};

const getGoogleDrivePreviewUrl = (url) => {
    if (!url || !url.includes("drive.google.com")) {
        return null;
    }

    try {
        const match = url.match(/\/file\/d\/([^/]+)/);

        if (!match) {
            return null;
        }

        const fileId = match[1];

        return `https://drive.google.com/file/d/${fileId}/preview`;
    } catch {
        return null;
    }
};

const isInstagramReel = (url) => {
    return Boolean(url && url.includes("instagram.com/reel"));
};

const Projects = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState("all");
    const audioRefs = useRef([]);
    const videoRefs = useRef([]);

    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src="https://www.instagram.com/embed.js"]'
        );

        if (existingScript) {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }

            return;
        }

        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };
        document.body.appendChild(script);
    }, []);

    const projectsData = {
        all: [
            {
                id: 24,
                title: "One to one show - Bayoumi Foaud",
                package: "package4",
                videoUrl: "https://youtu.be/zw7r416d_Vw?si=pVB0gePiAKOHWfpx",
            },
            {
                id: 25,
                title: "One to one show - Yousra",
                package: "package4",
                videoUrl: "https://youtu.be/NaKb_4gnVhA?si=9ACMSbuiaKMSSf1G",
            },
            {
                id: 26,
                title: "One to one show - Karim Fahmy",
                package: "package4",
                videoUrl: "https://youtu.be/Z3yoMz_czVQ?si=VwN-vJmcBydr5Rxx",
            },
            {
                id: 99,
                title: "Bascota Ad Kuwait - Ramadan 2026 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package4",
                videoUrl: "https://youtu.be/zjbRvRW0M0s?si=-vC6yTZta33tp6td",
            },
            {
                id: 100,
                title: "Al Jazi Ad Jordan - Ramadan 2026 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package4",
                videoId: "Cb6LfKMO8JE",
                mediaType: "youtube",
            },
            {
                id: 35,
                title: "E-Bank Prouduction",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1riJ0lNQIVNhhG-2ch6LeI1Ap9ygNN6de/view?usp=sharing",
            },
            {
                id: 38,
                title: "ZORA - Ai Production",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1bLHsi9UAKp_hkSAfzYYPU07MYNdRghve/view?usp=sharing",
            },
            {
                id: 34,
                title: "Byeti Juice - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/17nBPybfM5jL-XDsEFMiklyLmePmMDdaV/view?usp=sharing",
            },
            {
                id: 27,
                title: "18 Degrees - Branding - 2026",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1rFhUlMiPH1CGtq9g3AKqItpYCOFkrhri/preview",
            },
            {
                id: 37,
                title: "Wunder Choco - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1MDHIoHltFohCxvaOx0m1Rvz2-JKIJxIZ/view?usp=sharing",
            },
            {
                id: 36,
                title: "SCRUNCH - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1f3YWDRsXt7YLoGyHRVG16l_U8nqfQLg9/view?usp=sharing",
            },
            {
                id: 32,
                title: "18 Degrees - Hotel - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1tkmpNcdZ4j2iMwvsmR9tSsbe8b0BoN-e/view?usp=sharing",
            },
            {
                id: 31,
                title: "18 Degrees - Hospital - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1p_UyFy0c3aexchq0Srx1dyQ_aIGc8OdP/view?usp=sharing",
            },
            {
                id: 33,
                title: "18 Degrees - Home - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1ajeUG5jobr2Mup-0t74UZfAE3sGK3YV4/view?usp=sharing",
            },
            {
                id: 28,
                title: "18 Degrees - Company - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1SRoxp-9-7zOwwao7MZ776seKz-7QYg-9/view?usp=sharing",
            },
            {
                id: 30,
                title: "18 Degrees - Gym - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/19bxHar1Rc-5nyf2URWPYI_T9pRZiOIHi/view?usp=sharing",
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
                id: 40,
                title: "Madar Ad Syria - Ramadan 2026 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "6prqZTsWloc",
                mediaType: "youtube",
            },
            {
                id: 5,
                title: "Bascota Ad Kuwait - Ramadan 2026 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://youtu.be/zjbRvRW0M0s?si=-vC6yTZta33tp6td",
            },
            {
                id: 3,
                title: "Remas Land Ad- Ramadan 2025",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "872dDPCLve0",
                mediaType: "youtube",
            },
            {
                id: 2,
                title: "Sofico Baby&Kids - 2024 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "5g4Kb8eWM14",
                mediaType: "youtube",
            },
            {
                id: 41,
                title: "Al Jazi Ad Jordan - Ramadan 2026 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "Cb6LfKMO8JE",
                mediaType: "youtube",
            },
            {
                id: 1,
                title: "Elbehairy Paints Ad- 2025",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "GOPffB-n0NY",
                mediaType: "youtube",
            },
            {
                id: 42,
                title: "E-Bank Ad - 2025",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "S1wKM_wyziY",
                mediaType: "youtube",
            },
            {
                id: 4,
                title: "SI PERFUME OFFICIAL AD - SI.loving",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "P4tPrDLbDb0",
                mediaType: "youtube",
            },
            {
                id: 6,
                title: "Leona Pet Insurance",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "Ozwcd67QBfM",
                mediaType: "youtube",
            },
        ],
        package1: [
            {
                id: 40,
                title: "Madar Ad Syria - Ramadan 2026 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "6prqZTsWloc",
                mediaType: "youtube",
            },
            {
                id: 5,
                title: "Bascota Ad Kuwait - Ramadan 2026 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoUrl: "https://youtu.be/zjbRvRW0M0s?si=-vC6yTZta33tp6td",
            },
            {
                id: 3,
                title: "Remas Land Ad- Ramadan 2025",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "872dDPCLve0",
                mediaType: "youtube",
            },
            {
                id: 2,
                title: "Sofico Baby&Kids - 2024 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "5g4Kb8eWM14",
                mediaType: "youtube",
            },
            {
                id: 41,
                title: "Al Jazi Ad Jordan - Ramadan 2026 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "Cb6LfKMO8JE",
                mediaType: "youtube",
            },
            {
                id: 1,
                title: "Elbehairy Paints Ad- 2025",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "GOPffB-n0NY",
                mediaType: "youtube",
            },
            {
                id: 42,
                title: "E-Bank Ad - 2025",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "S1wKM_wyziY",
                mediaType: "youtube",
            },
            {
                id: 4,
                title: "SI PERFUME OFFICIAL AD - SI.loving",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "P4tPrDLbDb0",
                mediaType: "youtube",
            },
            {
                id: 6,
                title: "Leona Pet Insurance",
                description: "Professional voice over for a major brand campaign",
                package: "package1",
                videoId: "Ozwcd67QBfM",
                mediaType: "youtube",
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
                title: "One to one show - Bayoumi Foaud",
                package: "package4",
                videoUrl: "https://youtu.be/zw7r416d_Vw?si=pVB0gePiAKOHWfpx",
            },
            {
                id: 25,
                title: "One to one show - Yousra",
                package: "package4",
                videoUrl: "https://youtu.be/NaKb_4gnVhA?si=9ACMSbuiaKMSSf1G",
            },
            {
                id: 26,
                title: "One to one show - Karim Fahmy",
                package: "package4",
                videoUrl: "https://youtu.be/Z3yoMz_czVQ?si=VwN-vJmcBydr5Rxx",
            },
            {
                id: 99,
                title: "Bascota Ad Kuwait - Ramadan 2026 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package4",
                videoUrl: "https://youtu.be/zjbRvRW0M0s?si=-vC6yTZta33tp6td",
            },
            {
                id: 100,
                title: "Al Jazi Ad Jordan - Ramadan 2026 - TVC",
                description: "Professional voice over for a major brand campaign",
                package: "package4",
                videoId: "Cb6LfKMO8JE",
                mediaType: "youtube",
            },
            {
                id: 35,
                title: "E-Bank Prouduction",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1riJ0lNQIVNhhG-2ch6LeI1Ap9ygNN6de/view?usp=sharing",
            },
            {
                id: 38,
                title: "ZORA - Ai Production",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1bLHsi9UAKp_hkSAfzYYPU07MYNdRghve/view?usp=sharing",
            },
            {
                id: 34,
                title: "Byeti Juice - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/17nBPybfM5jL-XDsEFMiklyLmePmMDdaV/view?usp=sharing",
            },
            {
                id: 27,
                title: "18 Degrees - Branding - 2026",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1rFhUlMiPH1CGtq9g3AKqItpYCOFkrhri/preview",
            },
            {
                id: 37,
                title: "Wunder Choco - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1MDHIoHltFohCxvaOx0m1Rvz2-JKIJxIZ/view?usp=sharing",
            },
            {
                id: 36,
                title: "SCRUNCH - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1f3YWDRsXt7YLoGyHRVG16l_U8nqfQLg9/view?usp=sharing",
            },
            {
                id: 32,
                title: "18 Degrees - Hotel - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1tkmpNcdZ4j2iMwvsmR9tSsbe8b0BoN-e/view?usp=sharing",
            },
            {
                id: 31,
                title: "18 Degrees - Hospital - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1p_UyFy0c3aexchq0Srx1dyQ_aIGc8OdP/view?usp=sharing",
            },
            {
                id: 33,
                title: "18 Degrees - Home - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1ajeUG5jobr2Mup-0t74UZfAE3sGK3YV4/view?usp=sharing",
            },
            {
                id: 28,
                title: "18 Degrees - Company - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/1SRoxp-9-7zOwwao7MZ776seKz-7QYg-9/view?usp=sharing",
            },
            {
                id: 30,
                title: "18 Degrees - Gym - 2025",
                package: "package4",
                videoUrl: "https://drive.google.com/file/d/19bxHar1Rc-5nyf2URWPYI_T9pRZiOIHi/view?usp=sharing",
            },
        ],
    };

    useEffect(() => {
        const filter = searchParams.get("filter");

        if (
            filter &&
            ["package4", "package2", "package3", "package1"].includes(filter)
        ) {
            setActiveFilter(filter);
        } else if (!filter) {
            setActiveFilter("all");
        }
    }, [searchParams]);

    const handleFilterChange = (filterType) => {
        setActiveFilter(filterType);

        if (filterType === "all") {
            navigate("?");
        } else {
            navigate(`?filter=${filterType}`);
        }
    };

    const filteredProjects =
        activeFilter === "all"
            ? projectsData.all
            : projectsData[activeFilter];

    const handlePlay = (currentIndex, type = "all") => {
        if (type === "audio" || type === "all") {
            audioRefs.current.forEach((audio, index) => {
                if (audio && index !== currentIndex) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
        }

        if (type === "video" || type === "all") {
            videoRefs.current.forEach((video, index) => {
                if (video && index !== currentIndex) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }
    };
    return (
        <section className="w-full bg-white py-12 dark:bg-gray-900 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 text-3xl font-bold md:text-5xl dark:text-white"
                    >
                        My{" "}
                        <span className="text-purple-600 dark:text-purple-400">
                            Projects
                        </span>
                    </motion.h2>

                    <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-600" />

                    <p className="mx-auto max-w-2xl px-4 text-base text-gray-600 dark:text-gray-300 md:text-lg">
                        Explore my professional voice over work across different
                        categories
                    </p>
                </div>

                <div className="mb-8 flex flex-wrap justify-center gap-2 px-2 md:mb-12 md:gap-4">
                    {[
                        "all",
                        "package4",
                        "package2",
                        "package3",
                        "package1",
                    ].map((filterType) => (
                        <motion.button
                            key={filterType}
                            onClick={() => handleFilterChange(filterType)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`rounded-full px-4 py-2 text-sm font-medium md:px-6 md:py-2 md:text-base ${activeFilter === filterType
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                                }`}
                        >
                            {filterType === "all"
                                ? "All Projects"
                                : filterType === "package4"
                                    ? "AI Production"
                                    : filterType === "package2"
                                        ? "Voice Over"
                                        : filterType === "package3"
                                            ? "Event Host"
                                            : "Creative Copywriting"}
                        </motion.button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => {
                        const youtubeId =
                            project.mediaType === "youtube"
                                ? project.videoId
                                : getYouTubeId(project.videoUrl);

                        const drivePreviewUrl =
                            getGoogleDrivePreviewUrl(project.videoUrl);

                        const instagram =
                            isInstagramReel(project.videoUrl);

                        const hasVideo =
                            Boolean(project.videoUrl) ||
                            Boolean(project.videoId);

                        const hasAudio = Boolean(project.audioUrl);

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: Math.min(index * 0.03, 0.3),
                                }}
                                className="overflow-hidden bg-transparent dark:bg-transparent"
                            >
                                {hasVideo ? (
                                    <div>
                                        <div
                                            className={`w-full ${instagram
                                                ? "aspect-square"
                                                : "aspect-video"
                                                }`}
                                        >
                                            {instagram ? (
                                                <div className="flex h-full w-full items-center justify-center overflow-hidden bg-gray-100 p-2 dark:bg-gray-800">
                                                    <blockquote
                                                        className="instagram-media h-full w-full"
                                                        data-instgrm-permalink={
                                                            project.videoUrl.split(
                                                                "?"
                                                            )[0]
                                                        }
                                                        data-instgrm-version="14"
                                                        data-instgrm-captioned
                                                        style={{
                                                            width: "100%",
                                                            maxWidth: "100%",
                                                            minWidth: "100%",
                                                            height: "100%",
                                                            margin: 0,
                                                            padding: 0,
                                                        }}
                                                    />
                                                </div>
                                            ) : youtubeId ? (
                                                <YouTubePlayer
                                                    videoId={youtubeId}
                                                    title={project.title}
                                                />
                                            ) : drivePreviewUrl ? (
                                                <div className="h-full w-full overflow-hidden rounded-2xl bg-black">
                                                    <iframe
                                                        className="h-full w-full"
                                                        src={drivePreviewUrl}
                                                        title={project.title}
                                                        loading="lazy"
                                                        allow="autoplay; encrypted-media; fullscreen"
                                                        allowFullScreen
                                                        frameBorder="0"
                                                    />
                                                </div>
                                            ) : (
                                                <video
                                                    controls
                                                    preload="metadata"
                                                    playsInline
                                                    className="h-full w-full rounded-2xl bg-black object-cover"
                                                    ref={(el) => {
                                                        videoRefs.current[index] =
                                                            el;
                                                    }}
                                                    onPlay={() =>
                                                        handlePlay(
                                                            index,
                                                            "video"
                                                        )
                                                    }
                                                >
                                                    <source
                                                        src={project.videoUrl}
                                                        type="video/mp4"
                                                    />

                                                    Your browser does not
                                                    support the video tag.
                                                </video>
                                            )}
                                        </div>

                                        <div className="p-4">
                                            <h3 className="mb-2 line-clamp-1 text-lg font-bold text-gray-800 dark:text-white">
                                                {project.title}
                                            </h3>

                                            {project.description && (
                                                <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                                                    {project.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ) : hasAudio ? (
                                    <div className="p-4">
                                        <div className="mb-3 flex items-start">
                                            <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                                                <svg
                                                    className="h-5 w-5 text-purple-600 dark:text-purple-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="mb-1 line-clamp-1 text-lg font-bold text-gray-800 dark:text-white">
                                                    {project.title}
                                                </h3>

                                                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                                                    Audio Project
                                                </p>
                                            </div>
                                        </div>

                                        <audio
                                            controls
                                            preload="metadata"
                                            className="mt-2 w-full"
                                            ref={(el) => {
                                                audioRefs.current[index] = el;
                                            }}
                                            onPlay={() =>
                                                handlePlay(index, "audio")
                                            }
                                        >
                                            <source
                                                src={project.audioUrl}
                                                type="audio/mpeg"
                                            />

                                            Your browser does not support the
                                            audio element.
                                        </audio>
                                    </div>
                                ) : null}

                                <div className="px-4 pb-4">
                                    <div className="flex flex-wrap gap-1 md:gap-2">
                                        {project.package === "package1" && (
                                            <>
                                                <span className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-200 md:px-3">
                                                    Creative CopyWriting
                                                </span>

                                                <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200 md:px-3">
                                                    Voice Over
                                                </span>
                                            </>
                                        )}

                                        {project.package === "package2" && (
                                            <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-200 md:px-3">
                                                Voice Over
                                            </span>
                                        )}

                                        {project.package === "package3" && (
                                            <span className="inline-block rounded-full bg-pink-100 px-2 py-1 text-xs text-pink-800 dark:bg-pink-900 dark:text-pink-200 md:px-3">
                                                Event Host
                                            </span>
                                        )}

                                        {project.package === "package4" && (
                                            <span className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800 dark:bg-orange-900 dark:text-orange-200 md:px-3">
                                                AI Production
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;