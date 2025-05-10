import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import MainFeature from '../components/MainFeature';
import QuizSelector from '../components/QuizSelector';
import getIcon from '../utils/iconUtils';

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  const BrainIcon = getIcon('Brain');
  const AwardIcon = getIcon('Award');
  const ArrowRightIcon = getIcon('ArrowRight');

  const handleStartQuiz = () => {
    setIsSelecting(true);
  };
  
  const handleSelectQuiz = (topicKey, levelKey) => {
    setSelectedTopic(topicKey);
    setSelectedLevel(levelKey);
    setIsStarted(true);
    
    toast.info(`Starting ${topicKey} quiz (${levelKey} level). Good luck!`);
  };
  
  const handleReset = () => setIsStarted(false);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  // Benefits section data
  const benefits = [
    {
      title: "Test Your Knowledge",
      description: "Challenge yourself with a variety of multiple-choice questions across different topics.",
      icon: "Lightbulb"
    },
    {
      title: "Instant Feedback",
      description: "Get immediate feedback on your answers to learn and improve as you go.",
      icon: "CheckCircle"
    },
    {
      title: "Track Progress",
      description: "See your final score and performance stats to measure your knowledge growth.",
      icon: "BarChart"
    }
  ];
  
  if (isStarted) {
    return <MainFeature onReset={handleReset} topicKey={selectedTopic} levelKey={selectedLevel} />;
  }
  
  if (isSelecting) {
    return (
      <QuizSelector onStartQuiz={handleSelectQuiz} />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.section 
        className="text-center py-8 md:py-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
            <BrainIcon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Test Your Knowledge with QuizWhiz
        </h1>
        
        <p className="text-lg md:text-xl text-surface-600 dark:text-surface-300 mb-8 max-w-2xl mx-auto">
          Challenge yourself with our interactive quiz. Answer multiple-choice questions, get instant feedback, and see how much you know!
        </p>
        
        <motion.button
          onClick={handleStartQuiz}
          className="btn-primary group text-lg px-6 py-3 inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Quiz
          <ArrowRightIcon className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-8 md:py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = getIcon(benefit.icon);
            
            return (
              <motion.div 
                key={index}
                className="card p-6 flex flex-col items-center text-center hover:shadow-soft dark:hover:border-primary/30 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-surface-600 dark:text-surface-300">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-8 md:py-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="card p-8 md:p-10 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 border-none">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <AwardIcon className="w-6 h-6 text-accent" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Test Your Knowledge?
          </h2>
          
          <p className="text-surface-600 dark:text-surface-300 mb-6 max-w-2xl mx-auto">
            Challenge yourself with our interactive quiz and see how many questions you can answer correctly!
          </p>
          
          <motion.button
            onClick={handleStartQuiz}
            className="btn-primary text-lg px-6 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Take the Quiz Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;