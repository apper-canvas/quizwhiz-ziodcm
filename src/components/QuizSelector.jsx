import { useState } from 'react';
import { motion } from 'framer-motion';
import getIcon from '../utils/iconUtils';
import quizData from '../data/quizData';

const QuizSelector = ({ onStartQuiz }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  const topicKeys = Object.keys(quizData);
  
  const renderTopicCards = () => {
    return topicKeys.map(topicKey => {
      const topic = quizData[topicKey];
      const Icon = getIcon(topic.icon);
      const isSelected = selectedTopic === topicKey;
      
      return (
        <motion.div
          key={topicKey}
          className={`
            card p-5 text-center cursor-pointer transition-all
            ${isSelected ? 'ring-2 ring-primary scale-105' : 'hover:shadow-soft hover:scale-102'}
          `}
          onClick={() => {
            setSelectedTopic(topicKey);
            setSelectedLevel(null);
          }}
          whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-3">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-1">{topic.name}</h3>
          <p className="text-surface-600 dark:text-surface-400 text-sm">{topic.description}</p>
        </motion.div>
      );
    });
  };
  
  const renderLevelCards = () => {
    if (!selectedTopic) return null;
    
    const topic = quizData[selectedTopic];
    const levelKeys = Object.keys(topic.levels);
    
    return (
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-4">Select Difficulty Level</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {levelKeys.map(levelKey => {
            const level = topic.levels[levelKey];
            const isSelected = selectedLevel === levelKey;
            const questionCount = level.questions.length;
            
            let difficultyIcon = 'Sparkles'; // Easy
            if (levelKey === 'medium') difficultyIcon = 'Zap';
            if (levelKey === 'hard') difficultyIcon = 'Flame';
            
            const Icon = getIcon(difficultyIcon);
            
            return (
              <motion.div
                key={levelKey}
                className={`
                  card p-4 text-center cursor-pointer transition-all
                  ${isSelected ? 'ring-2 ring-primary scale-105' : 'hover:shadow-soft hover:scale-102'}
                  ${questionCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                onClick={() => questionCount > 0 && setSelectedLevel(levelKey)}
                whileHover={{ scale: questionCount > 0 ? (isSelected ? 1.05 : 1.02) : 1 }}
                whileTap={{ scale: questionCount > 0 ? 0.98 : 1 }}
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{level.name}</h4>
                <p className="text-surface-500 dark:text-surface-400 text-sm">
                  {questionCount} questions
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Choose Your Quiz</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {renderTopicCards()}
      </div>
      
      {renderLevelCards()}
      
      {selectedTopic && selectedLevel && (
        <motion.div className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button onClick={() => onStartQuiz(selectedTopic, selectedLevel)} className="btn-primary px-8 py-3 text-lg">
            Start {quizData[selectedTopic].name} Quiz ({quizData[selectedTopic].levels[selectedLevel].name})
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default QuizSelector;