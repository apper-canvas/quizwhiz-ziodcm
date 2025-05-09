import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import getIcon from '../utils/iconUtils';

const NotFound = () => {
  const navigate = useNavigate();
  
  const AlertCircleIcon = getIcon('AlertCircle');
  const HomeIcon = getIcon('Home');

  return (
    <motion.div 
      className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-20 h-20 mb-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ type: 'spring', delay: 0.2 }}
      >
        <AlertCircleIcon className="w-10 h-10 text-primary" />
      </motion.div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
      
      <p className="text-lg text-surface-600 dark:text-surface-300 mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      
      <motion.button
        onClick={() => navigate('/')}
        className="btn-primary inline-flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        Back to Home
      </motion.button>
    </motion.div>
  );
};

export default NotFound;