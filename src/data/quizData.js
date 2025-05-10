// Quiz data organized by topics and difficulty levels
const quizData = {
  history: {
    name: "History",
    icon: "BookOpen",
    description: "Test your knowledge of historical events and figures throughout time.",
    levels: {
      easy: {
        name: "Easy",
        questions: [
          {
            id: 1,
            question: "Who was the first President of the United States?",
            options: [
              { id: "a", text: "Thomas Jefferson" },
              { id: "b", text: "George Washington" },
              { id: "c", text: "Abraham Lincoln" },
              { id: "d", text: "John Adams" }
            ],
            correctAnswer: "b",
            explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
          },
          {
            id: 2,
            question: "In which year did World War I begin?",
            options: [
              { id: "a", text: "1914" },
              { id: "b", text: "1916" },
              { id: "c", text: "1918" },
              { id: "d", text: "1920" }
            ],
            correctAnswer: "a",
            explanation: "World War I began in 1914 and ended in 1918."
          },
          {
            id: 3,
            question: "Which ancient civilization built the pyramids at Giza?",
            options: [
              { id: "a", text: "Greeks" },
              { id: "b", text: "Romans" },
              { id: "c", text: "Egyptians" },
              { id: "d", text: "Persians" }
            ],
            correctAnswer: "c",
            explanation: "The pyramids at Giza were built by the ancient Egyptians as tombs for their pharaohs."
          },
          {
            id: 4,
            question: "Which famous document begins with 'When in the Course of human events'?",
            options: [
              { id: "a", text: "The Constitution" },
              { id: "b", text: "The Declaration of Independence" },
              { id: "c", text: "The Emancipation Proclamation" },
              { id: "d", text: "The Gettysburg Address" }
            ],
            correctAnswer: "b",
            explanation: "The Declaration of Independence, adopted on July 4, 1776, begins with this phrase."
          },
          {
            id: 5,
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            options: [
              { id: "a", text: "Amelia Earhart" },
              { id: "b", text: "Bessie Coleman" },
              { id: "c", text: "Harriet Quimby" },
              { id: "d", text: "Sally Ride" }
            ],
            correctAnswer: "a",
            explanation: "Amelia Earhart was the first woman to fly solo across the Atlantic Ocean in 1932."
          },
          {
            id: 6,
            question: "Which of these countries was NOT part of the Allied Powers during World War II?",
            options: [
              { id: "a", text: "United States" },
              { id: "b", text: "Soviet Union" },
              { id: "c", text: "Great Britain" },
              { id: "d", text: "Italy" }
            ],
            correctAnswer: "d",
            explanation: "Italy was part of the Axis Powers along with Germany and Japan, not the Allied Powers."
          },
          {
            id: 7,
            question: "Who was the queen of Egypt known for her relationship with Mark Antony?",
            options: [
              { id: "a", text: "Nefertiti" },
              { id: "b", text: "Cleopatra" },
              { id: "c", text: "Hatshepsut" },
              { id: "d", text: "Isis" }
            ],
            correctAnswer: "b",
            explanation: "Cleopatra VII was the last active ruler of the Ptolemaic Kingdom of Egypt and was known for her relationships with Julius Caesar and Mark Antony."
          },
          {
            id: 8,
            question: "What event marked the beginning of World War II in Europe?",
            options: [
              { id: "a", text: "Bombing of Pearl Harbor" },
              { id: "b", text: "Invasion of Poland" },
              { id: "c", text: "The Battle of Britain" },
              { id: "d", text: "D-Day landings" }
            ],
            correctAnswer: "b",
            explanation: "World War II in Europe began with Nazi Germany's invasion of Poland on September 1, 1939."
          },
          {
            id: 9,
            question: "Who painted the Mona Lisa?",
            options: [
              { id: "a", text: "Michelangelo" },
              { id: "b", text: "Raphael" },
              { id: "c", text: "Leonardo da Vinci" },
              { id: "d", text: "Donatello" }
            ],
            correctAnswer: "c",
            explanation: "The Mona Lisa was painted by Italian Renaissance artist Leonardo da Vinci in the early 16th century."
          },
          {
            id: 10,
            question: "Which U.S. President was in office during the Cuban Missile Crisis?",
            options: [
              { id: "a", text: "Harry S. Truman" },
              { id: "b", text: "Dwight D. Eisenhower" },
              { id: "c", text: "John F. Kennedy" },
              { id: "d", text: "Lyndon B. Johnson" }
            ],
            correctAnswer: "c",
            explanation: "John F. Kennedy was the U.S. President during the Cuban Missile Crisis in October 1962."
          }
        ]
      },
      medium: {
        name: "Medium",
        questions: [
          // 10 medium difficulty history questions would go here
          {
            id: 1,
            question: "Which treaty ended World War I?",
            options: [
              { id: "a", text: "Treaty of Westphalia" },
              { id: "b", text: "Treaty of Versailles" },
              { id: "c", text: "Treaty of Paris" },
              { id: "d", text: "Treaty of Tordesillas" }
            ],
            correctAnswer: "b",
            explanation: "The Treaty of Versailles was signed in 1919, officially ending World War I."
          },
          // Additional medium questions would be added...
          {
            id: 2,
            question: "Who was the leader of the Soviet Union during most of World War II?",
            options: [
              { id: "a", text: "Vladimir Lenin" },
              { id: "b", text: "Leon Trotsky" },
              { id: "c", text: "Joseph Stalin" },
              { id: "d", text: "Nikita Khrushchev" }
            ],
            correctAnswer: "c",
            explanation: "Joseph Stalin led the Soviet Union from the mid-1920s until his death in 1953, including during World War II."
          },
          // More medium history questions...
          {
            id: 3,
            question: "What event directly triggered the start of World War I?",
            options: [
              { id: "a", text: "The sinking of the Lusitania" },
              { id: "b", text: "The invasion of Poland" },
              { id: "c", text: "The assassination of Archduke Franz Ferdinand" },
              { id: "d", text: "The Treaty of Versailles" }
            ],
            correctAnswer: "c",
            explanation: "The assassination of Archduke Franz Ferdinand of Austria in Sarajevo on June 28, 1914, is considered the immediate trigger for World War I."
          },
          // ... More medium questions to complete 10 total
          {
            id: 4,
            question: "Which of these ancient civilizations developed the first known system of writing?",
            options: [
              { id: "a", text: "Sumerians" },
              { id: "b", text: "Egyptians" },
              { id: "c", text: "Chinese" },
              { id: "d", text: "Mayans" }
            ],
            correctAnswer: "a",
            explanation: "The Sumerians of Mesopotamia developed the earliest known writing system called cuneiform around 3400 BCE."
          },
          {
            id: 5,
            question: "During which period did the Renaissance primarily take place?",
            options: [
              { id: "a", text: "9th-12th centuries" },
              { id: "b", text: "14th-17th centuries" },
              { id: "c", text: "18th-19th centuries" },
              { id: "d", text: "5th-8th centuries" }
            ],
            correctAnswer: "b",
            explanation: "The Renaissance was a period of cultural, artistic, political, and economic 'rebirth' that spanned roughly from the 14th to the 17th centuries."
          },
          {
            id: 6,
            question: "What was the main cause of the French Revolution?",
            options: [
              { id: "a", text: "Foreign invasion" },
              { id: "b", text: "Religious conflict" },
              { id: "c", text: "Social and economic inequality" },
              { id: "d", text: "Dynastic disputes" }
            ],
            correctAnswer: "c",
            explanation: "Social and economic inequality, including extreme financial hardship for the lower classes while the nobility maintained privileges, was a major cause of the French Revolution."
          },
          {
            id: 7,
            question: "Who led the Communist Revolution in China?",
            options: [
              { id: "a", text: "Sun Yat-sen" },
              { id: "b", text: "Chiang Kai-shek" },
              { id: "c", text: "Mao Zedong" },
              { id: "d", text: "Deng Xiaoping" }
            ],
            correctAnswer: "c",
            explanation: "Mao Zedong led the Communist Revolution in China and established the People's Republic of China in 1949."
          },
          {
            id: 8,
            question: "What was the name of the economic plan that helped rebuild Western Europe after World War II?",
            options: [
              { id: "a", text: "New Deal" },
              { id: "b", text: "Marshall Plan" },
              { id: "c", text: "Great Society" },
              { id: "d", text: "Truman Doctrine" }
            ],
            correctAnswer: "b",
            explanation: "The Marshall Plan, named after U.S. Secretary of State George Marshall, was an American initiative to aid Western Europe in economic recovery after World War II."
          },
          {
            id: 9,
            question: "Which of these was NOT one of the original 13 American colonies?",
            options: [
              { id: "a", text: "Vermont" },
              { id: "b", text: "Georgia" },
              { id: "c", text: "Delaware" },
              { id: "d", text: "Rhode Island" }
            ],
            correctAnswer: "a",
            explanation: "Vermont was not one of the original 13 American colonies. It became the 14th state in 1791, after the Revolutionary War."
          },
          {
            id: 10,
            question: "Which country was NOT involved in the Scramble for Africa during the late 19th century?",
            options: [
              { id: "a", text: "Great Britain" },
              { id: "b", text: "United States" },
              { id: "c", text: "Belgium" },
              { id: "d", text: "Germany" }
            ],
            correctAnswer: "b",
            explanation: "The United States was not a major participant in the Scramble for Africa. European powers like Great Britain, France, Belgium, Germany, Italy, Portugal, and Spain were the main colonial powers that divided Africa among themselves."
          }
        ]
      },
      hard: {
        name: "Hard",
        questions: [
          // 10 hard difficulty history questions would go here
          {
            id: 1,
            question: "Which ancient Persian king led the invasion of Greece at the Battle of Thermopylae?",
            options: [
              { id: "a", text: "Cyrus the Great" },
              { id: "b", text: "Darius I" },
              { id: "c", text: "Xerxes I" },
              { id: "d", text: "Cambyses II" }
            ],
            correctAnswer: "c",
            explanation: "Xerxes I led the Persian invasion of Greece in 480 BCE, which included the famous Battle of Thermopylae against the 300 Spartans."
          },
          // Additional hard questions would fill out the remaining 9 spots
          {
            id: 2,
            question: "The 'Tennis Court Oath' was an important event during which historical period?",
            options: [
              { id: "a", text: "American Revolution" },
              { id: "b", text: "French Revolution" },
              { id: "c", text: "Russian Revolution" },
              { id: "d", text: "Industrial Revolution" }
            ],
            correctAnswer: "b",
            explanation: "The Tennis Court Oath was taken on June 20, 1789, by members of France's Third Estate who vowed not to separate until they had given France a constitution, marking a pivotal event in the early stages of the French Revolution."
          },
          {
            id: 3,
            question: "Who was the last Emperor of the Byzantine Empire?",
            options: [
              { id: "a", text: "Constantine XI Palaiologos" },
              { id: "b", text: "Justinian I" },
              { id: "c", text: "Basil II" },
              { id: "d", text: "Alexios I Komnenos" }
            ],
            correctAnswer: "a",
            explanation: "Constantine XI Palaiologos was the last Byzantine Emperor, ruling from 1449 until his death during the Fall of Constantinople to the Ottoman Empire in 1453."
          },
          {
            id: 4,
            question: "Which treaty established the modern borders of much of the Middle East after World War I?",
            options: [
              { id: "a", text: "Treaty of Versailles" },
              { id: "b", text: "Treaty of Sèvres" },
              { id: "c", text: "Sykes-Picot Agreement" },
              { id: "d", text: "Treaty of Lausanne" }
            ],
            correctAnswer: "c",
            explanation: "The Sykes-Picot Agreement was a 1916 secret treaty between Britain and France, with Russia's assent, that defined their spheres of influence and control in the Middle East after World War I."
          },
          {
            id: 5,
            question: "Who was the first Roman Emperor to convert to Christianity?",
            options: [
              { id: "a", text: "Julius Caesar" },
              { id: "b", text: "Augustus" },
              { id: "c", text: "Constantine the Great" },
              { id: "d", text: "Nero" }
            ],
            correctAnswer: "c",
            explanation: "Constantine the Great (Constantine I) was the first Roman Emperor to convert to Christianity. He issued the Edict of Milan in 313 CE, which established religious tolerance for Christianity in the Roman Empire."
          },
          {
            id: 6,
            question: "The July Crisis of 1914 directly preceded which historical event?",
            options: [
              { id: "a", text: "The stock market crash of 1929" },
              { id: "b", text: "The Russian Revolution" },
              { id: "c", text: "World War I" },
              { id: "d", text: "The Treaty of Versailles" }
            ],
            correctAnswer: "c",
            explanation: "The July Crisis was a series of diplomatic and political events following the assassination of Archduke Franz Ferdinand that ultimately led to the outbreak of World War I."
          },
          {
            id: 7,
            question: "Which document limited the power of the English monarchy and is often cited as an early step toward constitutional government?",
            options: [
              { id: "a", text: "Magna Carta" },
              { id: "b", text: "Declaration of the Rights of Man" },
              { id: "c", text: "Bill of Rights" },
              { id: "d", text: "Petition of Right" }
            ],
            correctAnswer: "a",
            explanation: "The Magna Carta, signed by King John in 1215, was a charter of liberties that limited the power of the English monarchy and is considered an important early document in the historical process that led to constitutional governance."
          },
          {
            id: 8,
            question: "What was the significance of the Balfour Declaration of 1917?",
            options: [
              { id: "a", text: "It established the League of Nations" },
              { id: "b", text: "It announced British support for a 'Jewish homeland' in Palestine" },
              { id: "c", text: "It granted independence to India" },
              { id: "d", text: "It formally ended World War I" }
            ],
            correctAnswer: "b",
            explanation: "The Balfour Declaration, issued by the British government in 1917, announced support for the establishment of a 'national home for the Jewish people' in Palestine, then an Ottoman region."
          },
          {
            id: 9,
            question: "Which of these was NOT a cause of the fall of the Western Roman Empire?",
            options: [
              { id: "a", text: "Military overexpansion" },
              { id: "b", text: "The Black Death pandemic" },
              { id: "c", text: "Economic troubles" },
              { id: "d", text: "Germanic invasions" }
            ],
            correctAnswer: "b",
            explanation: "The Black Death pandemic occurred in the 14th century, about 900 years after the fall of the Western Roman Empire in the 5th century. The other options were actual factors contributing to Rome's decline."
          },
          {
            id: 10,
            question: "Who was the chief architect of the Indian Constitution?",
            options: [
              { id: "a", text: "Mahatma Gandhi" },
              { id: "b", text: "Jawaharlal Nehru" },
              { id: "c", text: "B.R. Ambedkar" },
              { id: "d", text: "Sardar Vallabhbhai Patel" }
            ],
            correctAnswer: "c",
            explanation: "Dr. B.R. Ambedkar served as the Chairman of the Constitution Drafting Committee and is widely regarded as the chief architect of the Indian Constitution, which was adopted in 1950."
          }
        ]
      }
    }
  },
  science: {
    name: "Science",
    icon: "Flask",
    description: "Challenge yourself with questions about physics, chemistry, biology, and more.",
    levels: {
      easy: {
        name: "Easy",
        questions: [
          // 10 easy science questions would go here
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
          // 9 more easy science questions would be added...
        ]
      },
      medium: { name: "Medium", questions: [] },
      hard: { name: "Hard", questions: [] }
    }
  },
  geography: {
    name: "Geography",
    icon: "Globe",
    description: "Explore your knowledge of countries, capitals, landmarks, and geographical features.",
    levels: {
      easy: {
        name: "Easy",
        questions: []
      },
      medium: { name: "Medium", questions: [] },
      hard: { name: "Hard", questions: [] }
    }
  }
};

export default quizData;