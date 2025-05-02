import { motion } from 'framer-motion';
import { FaPenAlt, FaVideo, FaMicrophone, FaRobot, FaImages, FaLaptopCode, FaTv, FaBullhorn, FaChartLine } from 'react-icons/fa';
import { GiSpeaker, GiFilmProjector } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const personalServices = [
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
    }
  ];

  const agencyServices = [
    {
      title: "Digital Media Buying",
      icon: <FaChartLine className="text-3xl text-blue-600" />,
    },
    {
      title: "Social Media Management",
      icon: <FaBullhorn className="text-3xl text-purple-600" />,
    },
    {
      title: "Website Development",
      icon: <FaLaptopCode className="text-3xl text-red-600" />,
    },
    {
      title: "Video Production",
      icon: <GiFilmProjector className="text-3xl text-green-600" />,
    },
    {
      title: "TV/Radio (Planning & Buying)",
      icon: <FaTv className="text-3xl text-yellow-600" />,
    },
    {
      title: "Billboard Campaign",
      icon: <FaImages className="text-3xl text-indigo-600" />,
    },
    {
      title: "Influencer's Campaign",
      icon: <FaBullhorn className="text-3xl text-pink-600" />,
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

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-1">
            {personalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-transparent mb-10 lg:mb-0"
              >
                <div className='flex items-center justify-center flex-col'>
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-md font-bold text-gray-800 dark:text-white">{service.title}</h3></div>
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

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-1">
            {agencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-transparent mb-10 lg:mb-0"
              >
                <div className='flex items-center justify-center flex-col'>
                  <div className="w-16 h-16 rounded-full bg-purple-50 dark:bg-gray-700 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-md font-bold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                  </div>
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