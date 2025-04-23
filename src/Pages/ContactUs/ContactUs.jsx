import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import profile from './../../assets/profilePic.jpg';

const ContactPage = () => {
  const contactInfo = {
    phone: '+201127260087',
    email: 'basem.raafat1999@gmail.com',
    social: {
      whatsapp: 'https://wa.me/201127260087',
      tiktok: 'https://www.tiktok.com/@basemraafat99?_t=ZS-8vPGvMZzbB1&_r=1',
      facebook: 'https://www.facebook.com/share/1ENwNUi38F/?mibextid=qi2Omg',
      youtube: 'https://www.youtube.com/@basemraafat99',
      instagram: 'https://www.instagram.com/basemraafat99?igsh=azFvcDI2OWtpcnFh'
    }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="text-purple-600 dark:text-purple-400">Us</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We welcome your questions and inquiries. Choose the method that suits you best.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <div className="p-8 sm:p-10">
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-100 dark:border-purple-900 shadow-lg"
              >
                <img src={profile} alt="Basem Raafat Picture" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300" />
              </motion.div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center cursor-pointer bg-gray-50 dark:bg-gray-700 p-4 rounded-xl transition-all"
                onClick={() => window.location.href = `tel:${contactInfo.phone}`}
              >
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 p-3 rounded-lg text-purple-600 dark:text-purple-300">
                  <FaPhoneAlt className="h-5 w-5" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contactInfo.phone}</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center cursor-pointer bg-gray-50 dark:bg-gray-700 p-4 rounded-xl transition-all"
                onClick={() => window.location.href = `mailto:${contactInfo.email}`}
              >
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 p-3 rounded-lg text-purple-600 dark:text-purple-300">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contactInfo.email}</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-6">
                <h3 className="text-xl font-medium text-center text-gray-900 dark:text-white mb-6">
                  Follow Us on Social Media
                </h3>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  <motion.a
                    href={contactInfo.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-green-100 dark:bg-green-900 p-4 rounded-xl text-green-600 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 transition-all shadow-md flex flex-col items-center w-20"
                  >
                    <FaWhatsapp className="h-6 w-6 mb-1" />
                  </motion.a>

                  <motion.a
                    href={contactInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-100 dark:bg-blue-900 p-4 rounded-xl text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all shadow-md flex flex-col items-center w-20"
                  >
                    <FaFacebook className="h-6 w-6 mb-1" />
                  </motion.a>

                  <motion.a
                    href={contactInfo.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-black p-4 rounded-xl text-white hover:bg-gray-800 transition-all shadow-md flex flex-col items-center w-20"
                  >
                    <FaTiktok className="h-6 w-6 mb-1" />
                  </motion.a>

                  <motion.a
                    href={contactInfo.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-red-100 dark:bg-red-900 p-4 rounded-xl text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-all shadow-md flex flex-col items-center w-20"
                  >
                    <FaYoutube className="h-6 w-6 mb-1" />
                  </motion.a>

                  <motion.a
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl text-white hover:from-purple-600 hover:to-pink-600 transition-all shadow-md flex flex-col items-center w-20"
                  >
                    <FaInstagram className="h-6 w-6 mb-1" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;