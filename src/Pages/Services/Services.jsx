import { motion } from 'framer-motion';
import { FaPenAlt, FaVideo, FaMicrophone, FaRobot, FaImages, FaLaptopCode, FaTv, FaBullhorn, FaChartLine } from 'react-icons/fa';
import { GiSpeaker, GiFilmProjector } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const personalServices = [
    {
      title: "Creative Copywriting",
      icon: <FaPenAlt className="text-3xl text-blue-500" />,
      description: "Crafting compelling narratives and persuasive content that resonates with your audience and drives action."
    },
    {
      title: "Creative Reels",
      icon: <FaVideo className="text-3xl text-purple-500" />,
      description: "Producing engaging short-form video content optimized for social media platforms and maximum engagement."
    },
    {
      title: "Event Hosting",
      icon: <GiSpeaker className="text-3xl text-red-500" />,
      description: "Professional event moderation with charismatic presence and ability to engage diverse audiences."
    },
    {
      title: "Voice Over",
      icon: <FaMicrophone className="text-3xl text-green-500" />,
      description: "Versatile voice talent for commercials, narrations, animations, and corporate presentations."
    },
    {
      title: "AI Creation",
      icon: <FaRobot className="text-3xl text-yellow-500" />,
      description: "Leveraging AI tools for innovative content creation, automation, and creative problem-solving."
    },
    {
      title: "Presentation & Storyboard",
      icon: <FaImages className="text-3xl text-indigo-500" />,
      description: "Developing visually compelling presentations and detailed storyboards for effective communication."
    }
  ];

  const agencyServices = [
    {
      title: "Digital Media Buying",
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      description: "Strategic media planning and purchasing across digital platforms for optimal campaign performance."
    },
    {
      title: "Social Media Management",
      icon: <FaBullhorn className="text-3xl text-purple-600" />,
      description: "End-to-end social media strategy, content planning, and community management."
    },
    {
      title: "Website Development",
      icon: <FaLaptopCode className="text-3xl text-red-600" />,
      description: "Building responsive, user-friendly websites that convert visitors into customers."
    },
    {
      title: "Video Production",
      icon: <GiFilmProjector className="text-3xl text-green-600" />,
      description: "Full-service video production from concept development to final delivery."
    },
    {
      title: "TV/Radio (Planning & Buying)",
      icon: <FaTv className="text-3xl text-yellow-600" />,
      description: "Comprehensive broadcast media planning and buying services for maximum reach."
    },
    {
      title: "Billboard Campaign",
      icon: <FaImages className="text-3xl text-indigo-600" />,
      description: "Strategic outdoor advertising campaigns with impactful creative execution."
    },
    {
      title: "Influencer's Campaign",
      icon: <FaBullhorn className="text-3xl text-pink-600" />,
      description: "Authentic influencer partnerships and campaign management for brand growth."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-blue-500">Services</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive creative and digital solutions tailored to your brand's unique needs
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center"
          >
            Personal <span className="text-blue-500">Expertise</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            {personalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-md p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center"
          >
            Agency <span className="text-purple-500">Powered</span> Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            {agencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-md p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 rounded-full bg-purple-50 dark:bg-gray-700 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-28 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-10 text-center text-white shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Brand?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our comprehensive services
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold shadow-lg transition-all">
            <Link to='/contact'>
            Contact Us
            </Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;