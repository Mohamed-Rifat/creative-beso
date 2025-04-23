import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MicOff } from 'lucide-react';
const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen text-black flex flex-col items-center justify-center dark:bg-gray-800 dark:text-white">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <MicOff className="w-20 h-20 text-red-500 drop-shadow-md" />
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
                    404
                </h1>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Silence on the mic... Page not found!
                </h2>

                <p className="text-lg md:text-xl max-w-2xl mb-8 opacity-90">
                    Looks like the scene you’re trying to record doesn’t exist anymore.
                    <br />
                    But hey, the homepage is just a click away — let's take it from the top.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                        Back To HomePage
                    </motion.button>
                </div>
            </motion.div>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        animate={{
                            height: [10, 30, 10],
                            opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                            duration: 1.5 + Math.random(),
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-2 bg-purple-300 rounded-full"
                        style={{ height: '10px' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default NotFoundPage;