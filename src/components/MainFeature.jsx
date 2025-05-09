import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

// Quiz data
const quizData = [
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: [
      { id: "a", text: "Venus" },
      { id: "b", text: "Mars" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Saturn" }
    ],
    correctAnswer: "b",
    explanation: "Mars is called the Red Planet because of the reddish iron oxide on its surface."
  },
  {
    id: 2,
    question: "What is the capital of Japan?",
    options: [
      { id: "a", text: "Beijing" },
      { id: "b", text: "Seoul" },
      { id: "c", text: "Tokyo" },
      { id: "d", text: "Bangkok" }
    ],
    correctAnswer: "c",
    explanation: "Tokyo is the capital and largest city of Japan."
  },
  {
    id: 3,
    question: "Which element has the chemical symbol 'O'?",
    options: [
      { id: "a", text: "Osmium" },
      { id: "b", text: "Oxygen" },
      { id: "c", text: "Gold" },
      { id: "d", text: "Tungsten" }
    ],
    correctAnswer: "b",
    explanation: "Oxygen is represented by the chemical symbol 'O' on the periodic table."
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: [
      { id: "a", text: "Vincent van Gogh" },
      { id: "b", text: "Pablo Picasso" },
      { id: "c", text: "Leonardo da Vinci" },
      { id: "d", text: "Michelangelo" }
    ],
    correctAnswer: "c",
    explanation: "The Mona Lisa was painted by Leonardo da Vinci in the early 16th century."
  },
  {
    id: 5,
    question: "Which planet is closest to the Sun?",
    options: [
      { id: "a", text: "Venus" },
      { id: "b", text: "Mars" },
      { id: "c", text: "Earth" },
      { id: "d", text: "Mercury" }
    ],
    correctAnswer: "d",
    explanation: "Mercury is the closest planet to the Sun in our solar system."
  },
  {
    id: 6,
    question: "What's the largest ocean on Earth?",
    options: [
      { id: "a", text: "Atlantic Ocean" },
      { id: "b", text: "Indian Ocean" },
      { id: "c", text: "Arctic Ocean" },
      { id: "d", text: "Pacific Ocean" }
    ],
    correctAnswer: "d",
    explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
  },
  {
    id: 7,
    question: "Which country is known as the Land of the Rising Sun?",
    options: [
      { id: "a", text: "China" },
      { id: "b", text: "Japan" },
      { id: "c", text: "Thailand" },
      { id: "d", text: "South Korea" }
    ],
    correctAnswer: "b",
    explanation: "Japan is known as the Land of the Rising Sun because from China, Japan appears to be in the direction where the Sun rises."
  }
];

const MainFeature = ({ onReset }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question
  const [timerRunning, setTimerRunning] = useState(true);
  
  // Import icons
  const CheckIcon = getIcon('Check');
  const XIcon = getIcon('X');
  const TimerIcon = getIcon('Timer');
  const ChevronRightIcon = getIcon('ChevronRight');
  const RefreshCwIcon = getIcon('RefreshCw');
  const AwardIcon = getIcon('Award');
  const TrophyIcon = getIcon('Trophy');
  const BarChart2Icon = getIcon('BarChart2');
  const HelpCircleIcon = getIcon('HelpCircle');
  const AlertCircleIcon = getIcon('AlertCircle');

  // Timer effect
  useEffect(() => {
    if (!timerRunning || quizCompleted) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Time's up for this question
      if (!isAnswered) {
        handleOptionSelect(null); // Mark as incorrect
        toast.error("Time's up!");
      }
    }
  }, [timeLeft, timerRunning, isAnswered, quizCompleted]);

  const handleOptionSelect = (optionId) => {
    if (isAnswered) return;
    
    setSelectedOption(optionId);
    setIsAnswered(true);
    setTimerRunning(false);
    
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = optionId === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      toast.success("Correct answer!");
    } else {
      toast.error(
        optionId === null 
          ? "Time's up! You didn't select an answer." 
          : "Incorrect answer!"
      );
    }
    
    // Record the user's answer
    setUserAnswers([
      ...userAnswers, 
      { 
        questionId: currentQuestion.id,
        selectedOptionId: optionId,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(30);
      setTimerRunning(true);
    } else {
      setQuizCompleted(true);
      
      // Determine message based on score
      const percentage = (score / quizData.length) * 100;
      let message;
      
      if (percentage >= 80) {
        message = "Excellent! You're a quiz master!";
      } else if (percentage >= 60) {
        message = "Good job! You have solid knowledge!";
      } else if (percentage >= 40) {
        message = "Not bad! Keep learning to improve!";
      } else {
        message = "You might want to study more. Keep trying!";
      }
      
      toast.info(message);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setTimeLeft(30);
    setTimerRunning(true);
    toast.info("Quiz restarted! Good luck!");
  };

  const getOptionClass = (optionId) => {
    if (!isAnswered) {
      return "bg-white dark:bg-surface-800 border-surface-200 dark:border-surface-700 hover:border-primary dark:hover:border-primary";
    }
    
    const currentQuestion = quizData[currentQuestionIndex];
    
    if (optionId === currentQuestion.correctAnswer) {
      return "bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-500";
    }
    
    if (optionId === selectedOption && optionId !== currentQuestion.correctAnswer) {
      return "bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-500";
    }
    
    return "bg-white dark:bg-surface-800 border-surface-200 dark:border-surface-700 opacity-60";
  };

  // Calculate statistics for results screen
  const calculateStats = () => {
    const totalQuestions = quizData.length;
    const correctAnswers = score;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    return {
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      percentage
    };
  };

  if (quizCompleted) {
    const stats = calculateStats();
    
    return (
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card p-6 md:p-8">
          <div className="text-center mb-8">
            <motion.div 
              className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: 'spring' }}
            >
              <TrophyIcon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Quiz Completed!</h2>
            <p className="text-lg text-surface-600 dark:text-surface-300">
              You scored {stats.correctAnswers} out of {stats.totalQuestions}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="neumorphic p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <AwardIcon className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold">Score</span>
              </div>
              <p className="text-2xl font-bold">{stats.percentage}%</p>
            </div>
            
            <div className="neumorphic p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <BarChart2Icon className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold">Performance</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <span className="text-green-500 dark:text-green-400 block text-xl font-bold">{stats.correctAnswers}</span>
                  <span className="text-xs">Correct</span>
                </div>
                <div>
                  <span className="text-red-500 dark:text-red-400 block text-xl font-bold">{stats.incorrectAnswers}</span>
                  <span className="text-xs">Incorrect</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Question Overview</h3>
            <div className="space-y-3">
              {userAnswers.map((answer, index) => {
                const question = quizData.find(q => q.id === answer.questionId);
                const selectedOption = question.options.find(opt => opt.id === answer.selectedOptionId);
                
                return (
                  <div key={index} className="flex items-start p-3 rounded-lg bg-surface-50 dark:bg-surface-800/40 border border-surface-200 dark:border-surface-700">
                    <div className="mr-3 mt-1">
                      {answer.isCorrect ? 
                        <CheckIcon className="w-5 h-5 text-green-500" /> : 
                        <XIcon className="w-5 h-5 text-red-500" />
                      }
                    </div>
                    <div>
                      <p className="font-medium mb-1">{question.question}</p>
                      <p className="text-sm text-surface-600 dark:text-surface-400">
                        {answer.selectedOptionId === null ? (
                          <span className="text-red-500 dark:text-red-400">No answer selected (time ran out)</span>
                        ) : (
                          <span>
                            Your answer: <span className={answer.isCorrect ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}>
                              {selectedOption?.text || "N/A"}
                            </span>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <motion.button
              onClick={restartQuiz}
              className="btn-primary inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCwIcon className="w-5 h-5 mr-2" />
              Restart Quiz
            </motion.button>
            
            <motion.button
              onClick={onReset}
              className="btn-outline inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Return Home
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

  return (
    <motion.div 
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card overflow-visible">
        {/* Progress bar and timer */}
        <div className="bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 p-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-2 sm:mb-0 w-full sm:w-auto">
            <p className="text-sm text-surface-600 dark:text-surface-400 mb-1">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </p>
            <div className="w-full sm:w-40 h-2 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: `${((currentQuestionIndex) / quizData.length) * 100}%` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          
          <div className={`
            flex items-center justify-center p-2 rounded-full
            ${timeLeft < 10 ? 'text-red-500 dark:text-red-400' : 'text-surface-600 dark:text-surface-400'}
          `}>
            <TimerIcon className="w-5 h-5 mr-1" />
            <span className="font-mono font-bold">{timeLeft}s</span>
          </div>
        </div>
        
        {/* Question */}
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold mb-6">{currentQuestion.question}</h3>
          
          {/* Options */}
          <div className="space-y-3 mb-8">
            <AnimatePresence>
              {currentQuestion.options.map((option) => (
                <motion.button
                  key={option.id}
                  className={`
                    w-full text-left p-4 rounded-xl border border-2 transition-all
                    flex items-center
                    ${getOptionClass(option.id)}
                    ${!isAnswered && 'hover:shadow-soft'}
                  `}
                  onClick={() => !isAnswered && handleOptionSelect(option.id)}
                  disabled={isAnswered}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={!isAnswered ? { scale: 1.02 } : {}}
                >
                  <div className="w-8 h-8 rounded-full bg-surface-100 dark:bg-surface-700 flex items-center justify-center mr-3 shrink-0">
                    <span className="font-medium">{option.id.toUpperCase()}</span>
                  </div>
                  
                  <span className="flex-grow">{option.text}</span>
                  
                  {isAnswered && option.id === currentQuestion.correctAnswer && (
                    <CheckIcon className="w-5 h-5 text-green-500 shrink-0 ml-2" />
                  )}
                  
                  {isAnswered && option.id === selectedOption && option.id !== currentQuestion.correctAnswer && (
                    <XIcon className="w-5 h-5 text-red-500 shrink-0 ml-2" />
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Explanation (after answering) */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div 
                className="rounded-xl bg-surface-50 dark:bg-surface-800/60 border border-surface-200 dark:border-surface-700 p-4 mb-6"
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start">
                  {selectedOption === currentQuestion.correctAnswer ? (
                    <HelpCircleIcon className="w-5 h-5 text-primary shrink-0 mt-0.5 mr-2" />
                  ) : (
                    <AlertCircleIcon className="w-5 h-5 text-primary shrink-0 mt-0.5 mr-2" />
                  )}
                  <p className="text-surface-700 dark:text-surface-300">{currentQuestion.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <div className="flex justify-between">
            <div>
              <span className="text-sm text-surface-500 dark:text-surface-400">
                Score: {score}/{currentQuestionIndex + (isAnswered ? 1 : 0)}
              </span>
            </div>
            
            {isAnswered && (
              <motion.button
                onClick={handleNextQuestion}
                className="btn-primary inline-flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentQuestionIndex < quizData.length - 1 ? (
                  <>
                    Next Question
                    <ChevronRightIcon className="ml-2 w-5 h-5" />
                  </>
                ) : (
                  <>
                    See Results
                    <TrophyIcon className="ml-2 w-5 h-5" />
                  </>
                )}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainFeature;