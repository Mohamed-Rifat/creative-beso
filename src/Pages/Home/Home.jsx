import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1v from "./../../assets/banner1v.jpg"
import banner2v from "./../../assets/banner2v.png"
import banner3v from "./../../assets/banner3v.jpg"
import banner4v from "./../../assets/banner4v.png"
import banner1h from "./../../assets/banner1h.png"
import banner2h from "./../../assets/banner2h.jpg"
import banner3h from "./../../assets/banner3h.png"
import banner4h from "./../../assets/banner4h.png"
import aboutImg from "./../../assets/aboutMe.png"
import project1 from './../../assets/creative.png';
import project2 from './../../assets/voice.png';
import project3 from './../../assets/event.jpg';
import brand1 from './../../assets/BrandIcons/brandIcon1.png';
import brand2 from './../../assets/BrandIcons/brandIcon2.png';
import brand3 from './../../assets/BrandIcons/brandIcon3.png';
import brand4 from './../../assets/BrandIcons/brandIcon4.png';
import brand5 from './../../assets/BrandIcons/brandIcon5.png';
import brand6 from './../../assets/BrandIcons/brandIcon6.png';
import brand7 from './../../assets/BrandIcons/brandIcon7.png';
import brand8 from './../../assets/BrandIcons/brandIcon8.png';
import brand9 from './../../assets/BrandIcons/brandIcon9.png';
import brand10 from './../../assets/BrandIcons/brandIcon10.png';
import brand11 from './../../assets/BrandIcons/brandIcon11.png';
import brand12 from './../../assets/BrandIcons/brandIcon12.png';
import brand13 from './../../assets/BrandIcons/brandIcon13.png';
import brand14 from './../../assets/BrandIcons/brandIcon14.png';
import brand15 from './../../assets/BrandIcons/brandIcon15.png';
import brand16 from './../../assets/BrandIcons/brandIcon16.png';
import brand17 from './../../assets/BrandIcons/brandIcon17.png';
import brand18 from './../../assets/BrandIcons/brandIcon18.png';
import brand19 from './../../assets/BrandIcons/brandIcon19.png';
import brand20 from './../../assets/BrandIcons/brandIcon20.png';
import brand22 from './../../assets/BrandIcons/brandIcon22.png';
import brand23 from './../../assets/BrandIcons/brandIcon23.png';
import brand24 from './../../assets/BrandIcons/brandIcon24.png';
import brand25 from './../../assets/BrandIcons/brandIcon25.png';
import brand26 from './../../assets/BrandIcons/brandIcon26.png';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaPenAlt, FaVideo, FaMicrophone, FaRobot, FaImages} from 'react-icons/fa';
import { GiSpeaker} from 'react-icons/gi';
import { Link } from 'react-router-dom';
const imagesh = [banner1h, banner2h, banner3h, banner4h];
const imagesv = [banner1v, banner2v, banner3v, banner4v];
const projects = [
  {
    id: 1,
    title: "Creative Copywriting",
    description: "The Voice Behind Creative Words",
    image: project1,
    filter: "Creative Copywriting",
    link: "/projects?filter=package1"
  },
  {
    id: 2,
    title: "Voice Over",
    description: "Voice Performance",
    image: project2,
    filter: "Voice Over",
    link: "/projects?filter=package2"
  },
  {
    id: 3,
    title: "Event host",
    description: "Voice for Events",
    image: project3,
    filter: "Event host",
    link: "/projects?filter=package3"
  }
];

const clients = [
  { name: 'LibyaTV', logo: brand1 },
  { name: 'Egypt Cheese Festival', logo: brand2 },
  { name: 'Radio2', logo: brand3 },
  { name: 'Al-Azhar University - Faculty of Mass Communication', logo: brand4 },
  { name: 'ٍStoryPost', logo: brand5 },
  { name: 'ResalaTrainingCenter', logo: brand6 },
  { name: 'Solvera', logo: brand7 },
  { name: 'Story Sailors', logo: brand8 },
  { name: 'Business', logo: brand9 },
  { name: 'brand10', logo: brand10 },
  { name: 'mightCinema', logo: brand11 },
  { name: 'SoficoBaby', logo: brand12 },
  { name: 'Vemto', logo: brand13 },
  { name: 'LovingPerfume', logo: brand14 },
  { name: 'Goldenbazaar', logo: brand15 },
  { name: 'Elbehairy', logo: brand16 },
  { name: 'Ministry of Youth and Sports', logo: brand17 },
  { name: 'ٌRemasLand', logo: brand18 },
  { name: 'brand19', logo: brand19 },
  { name: 'GhadamisCity', logo: brand20 },
  { name: 'TechShift', logo: brand22 },
  { name: 'SofiMer', logo: brand23 },
  { name: 'UnionMediaProduction', logo: brand24 },
  { name: 'Pure', logo: brand25 },
  { name: 'Besaraha', logo: brand26 },
];

const testimonials = [
  {
    name: "Dr.Dina Laban ",
    title: "Sofico baby&kids - Brand manager",
    message: "باسم كان له تأثير كبير على حملاتنا الإعلانية. إبداعه في صياغة المحتوى وصوته المميز ساعدانا في تحقيق معدلات تفاعل غير مسبوقة.",
    rating: 5,
  },
  {
    name: " Mrs.Zainab",
    title: "Remas Land - Marketing manager",
    message: "العمل مع باسم كان تجربة رائعة. احترافيته في إدارة الحسابات وقدرته على تحويل الأفكار إلى واقع ملموس تستحق الإشادة.",
    rating: 5,
  },
  {
    name: "Mrs.Nada Elsayed",
    title: "Business Ya Shabab - Project Manager",
    message: "باسم ليس فقط مبدعاً في كتابة المحتوى، بل يتمتع برؤية استراتيجية ممتازة ساعدتنا في تطوير أعمالنا بشكل ملحوظ.",
    rating: 5,
  },
  {
    name: "Mr.Refaat Qassem",
    title: " Elbehairy Paints - Marketing manager",
    message: "التعامل مع باسم كان أكثر من رائع! عنده شغف حقيقي بكل تفصيلة، وده بيبان في النتيجة النهائية اللي دايمًا بتفوق التوقعات.",
    rating: 5,
  },
  {
    name: "Mr. Abdulsalam Al-Arabi",
    title: "Documentary Filmmaker - Libyan Television",
    message: `صوتك عذب ومميز ما شاء الله، استمتعت لصوتك واعجبت به هلبا ..
اهو الشغل الجامد على قولتكم في مصر.
شغل مميز وهيعمل صدى وان شاء الله تكون انطلاقه سلسله وثائقيات.
ربي يبارك فيك وفي عملك` ,
    rating: 5,
  }
];
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full flex flex-col border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
      <RiDoubleQuotesL className="absolute top-6 left-6 text-4xl text-blue-100 dark:text-blue-900/50" />
      <RiDoubleQuotesR className="absolute bottom-6 right-6 text-4xl text-blue-100 dark:text-blue-900/50" />

      <div className="text-right">
        <h4 className="font-bold text-lg text-gray-800 dark:text-white">{testimonial.name}</h4>
        <p className="text-blue-600 dark:text-blue-400 text-sm">{testimonial.title}</p>
        <div className="flex justify-end mt-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      <div className="flex-grow mb-6">
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10">
          {testimonial.message}
        </p>
      </div>
    </div>
  );
};
const voiceServices = [
 {
       title: "Creative Copywriting",
       icon: <FaPenAlt className="text-3xl text-blue-500" />,
     },
     {
       title: "Creative Reels",
       icon: <FaVideo className="text-3xl text-purple-500" />,
     },
     {
       title: "Event Hosting",
       icon: <GiSpeaker className="text-3xl text-red-500" />,
     },
     {
       title: "Voice Over",
       icon: <FaMicrophone className="text-3xl text-green-500" />,
     },
     {
       title: "AI Creation",
       icon: <FaRobot className="text-3xl text-yellow-500" />,
     },
     {
       title: "Presentation & Storyboard",
       icon: <FaImages className="text-3xl text-indigo-500" />,
     }]
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const images = isMobile ? imagesv : imagesh;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=" dark:bg-gray-800 pt-16">
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-cover w-full bg-center scale-105 transition-all duration-1000" style={{ backgroundImage: `url(${images[currentImage]})` }} />
        <div className="absolute inset-0 bg-black bg-opacity-75" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg animate-slide-up">
            Welcome to Beso’s World
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl leading-relaxed text-gray-200 animate-slide-up delay-100">
            A space of diverse creativity that puts your brand or product in the spotlight.
            Where ideas turn into engaging Ads that tell your story and achieve <span className="text-white font-semibold">real impact</span>.
          </p>
          <button onClick={() => { document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="mt-12 animate-bounce text-white hover:text-blue-400 transition duration-300"
            aria-label="Scroll Down"
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </section>

      <section id='about-section' className="bg-gray-50 dark:bg-gray-800 w-full overflow-x-hidden py-16 px-4" >
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">About</span> Me
            </h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full">
            </motion.div>
          </motion.div>
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full md:w-1/2 space-y-6 text-center md:text-left px-4 py-8">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Who is Basem?
              </h3>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                A multi-skilled creative and business developer with 3+ years of experience in advertising, voice-over, and brand development through content.
                Worked with top Egyptian brands on TV, radio, and digital campaigns — across both B2B and B2C sectors.
                I help brands grow through:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {['Creative Copywriting', 'Voice Over', 'Event Hosting', 'All Media Solutions'].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    className="flex items-center gap-2 w-full sm:w-auto"
                  >
                    <div className={`min-w-8 h-8 rounded-full ${index === 0 ? 'bg-blue-100 dark:bg-blue-900' :
                      index === 1 ? 'bg-purple-100 dark:bg-purple-900' :
                        index === 2 ? 'bg-indigo-100 dark:bg-indigo-900' :
                          'bg-pink-100 dark:bg-pink-900'
                      } flex items-center justify-center flex-shrink-0`}>
                      <svg className={`w-4 h-4 ${index === 0 ? 'text-blue-600 dark:text-blue-400' :
                        index === 1 ? 'text-purple-600 dark:text-purple-400' :
                          index === 2 ? 'text-indigo-600 dark:text-indigo-400' :
                            'text-pink-600 dark:text-pink-400'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 whitespace-nowrap">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
               <Link to='/about'>
               More About Me 
               </Link>
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full md:w-1/2 relative group px-4">
              <div className="absolute"></div>
              <img src={aboutImg} alt="About" className="relative w-full h-auto scale-150" loading="lazy" decoding="async" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6 dark:text-white"
            >
              My <span className="text-purple-600 dark:text-purple-400">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
              className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mx-auto rounded-full mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Discover my professional voice projects that bring stories to life
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="group relative overflow-hidden rounded-md shadow-2xl hover:shadow-purple-500/20 "
              >
                <div className="relative h-96 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover blur-sm group-hover:blur-0" loading="lazy" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
                  <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-lg text-gray-200 mb-6">{project.description}</p>
                  </div>

                  <motion.a
                    href={project.link}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold shadow-lg hover:bg-purple-50 transition-all duration-300 transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100 -translate-y-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-16"
          >
            <Link to="/projects?filter=all" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300">
              Explore Full Portfolio
              <svg className="w-5 h-5 ml-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 bg-white dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-6">
              Trusted By <span className="text-purple-600 dark:text-purple-400">Leading Brands</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I've had the privilege of collaborating with these industry leaders
            </p>
          </motion.div>

          <div className="relative w-full py-10 overflow-x-hidden md:overflow-x-visible">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10 pointer-events-none" />

            <div className="relative overflow-hidden">
              <div className="mb-10">
                <motion.div
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    duration: 40,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                  className="flex space-x-16 w-max"
                >
                  {[...clients, ...clients].map((client, i) => (
                    <div key={`row1-${i}`} className="flex items-center justify-center">
                      <img src={client.logo} alt={client.name} className="h-14 md:h-20 transition duration-500 hover:scale-105" loading="lazy" decoding="async" width="160" height="80"/>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div>
                <motion.div
                  animate={{ x: ['-50%', '0%'] }}
                  transition={{
                    duration: 40,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                  className="flex space-x-16 w-max"
                >
                  {[...clients, ...clients].map((client, i) => (
                    <div key={`row2-${i}`} className="flex items-center justify-center">
                      <img src={client.logo} alt={client.name} className="h-12 md:h-16 transition duration-500 hover:scale-105" loading="lazy" decoding="async" width="128" height="64"/>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Client Feedback
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Genuine Experiences from Clients Who Trusted My Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:mx-32">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium hover:shadow-lg transition-all duration-300">
              <Link to='/contact'>
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 dark:text-white"
            >
              Professional <span className="text-purple-600 dark:text-purple-400"> Services</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
              className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mx-auto rounded-full mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Premium voice-over solutions with distinctive tonality and broadcast quality, tailored for diverse media platforms
            </motion.p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-1">
            {voiceServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-transparent"
              >
                <div className='flex items-center justify-center flex-col'>
                <div className="w-16 h-16 rounded-full bg-purple-50 dark:bg-gray-700 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                </div>
               
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-16"
          >
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Link to='/services'>
                More Services
                <svg className="w-5 h-5 ml-3 inline-block animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </Link>
            </button>
          </motion.div>
        </div>
      </section>
      
      <section className="w-full py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6 dark:text-white"
            >
              Contact <span className="text-purple-600 dark:text-purple-400">Me</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
              className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mx-auto rounded-full mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              You're not just working with a freelancer —you're gaining a partner who knows how to turn ideas into results. ✨
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "WhatsApp",
                description: "Chat with me directly on WhatsApp",
                href: "https://wa.me/201127260087",
                bg: "bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900",
                iconBg: "bg-gradient-to-br from-green-500 to-teal-500",
                textColor: "text-green-800 dark:text-green-200",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
              },
              {
                title: "Instagram",
                description: "Follow me and DM on Instagram",
                href: "https://www.instagram.com/basemraafat99?igsh=azFvcDI2OWtpcnFh",
                bg: "bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900",
                iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
                textColor: "text-pink-800 dark:text-pink-200",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
              {
                title: "Phone",
                description: "Direct call to 01127260087",
                href: "tel:01127260087",
                bg: "bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900",
                iconBg: "bg-gradient-to-br from-purple-500 to-indigo-500",
                textColor: "text-purple-800 dark:text-purple-200",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                ),
              },
            ].map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`${method.bg} p-10 rounded-2xl shadow-md hover:shadow-lg hover:shadow-purple-400/20 transition duration-300 flex flex-col items-center text-center justify-center`}
              >
                <div className={`${method.iconBg} p-4 rounded-full mb-6`}>
                  {React.cloneElement(method.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${method.textColor}`}>
                  {method.title}
                </h3>
                <p className={`${method.textColor} opacity-80 text-base`}>
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}