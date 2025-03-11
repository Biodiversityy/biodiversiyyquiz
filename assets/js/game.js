const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "What is biodiversity?",
    choice1: "The variety of ecosystems found on Earth",
    choice2: "The number of species that go extinct every year",
    choice3: "The variety of life, including species, genetics, and ecosystems",
    choice4: "The number of plants in a specific area",
    answer: 3
  },
 
  {
    question: "Who first introduced the term biodiversity hotspot?",
    choice1: "E.O. Wilson",
    choice2: "Norman Myers",
    choice3: "Charles Darwin",
    choice4: "Alexander von Humboldt",
    answer: 2
  },
  {
    question: "What are the two criteria for an area to qualify as a biodiversity hotspot?",
    choice1: "Must be a tropical region and have more than 1,000 species",
    choice2: " Must have at least 1,500 vascular plant species and have lost at least 70% of its habitat",
    choice3: "Must have a large human population and endangered species",
    choice4: "Must have more than 50% of the world endemic species and no human activity",
    answer: 2
  },
  {
    question: "How many biodiversity hotspots are recognized globally as of 2011?",
    choice1: "25",
    choice2: "34",
    choice3: "36",
    choice4: "40",
    answer: 3
  },
  {
    question: "What is an example of genetic diversity mentioned in the document?",
    choice1: "The variety of trees in a rainforest",
    choice2: " The genetic similarity of cheetahs",
    choice3: "The number of birds in a region",
    choice4: "The different types of oceans on Earth",
    answer: 2
  },
  {
    question: "Which rainforest is home to over 10% of the world’s known species?",
    choice1: "Congo Rainforest",
    choice2: "Amazon Rainforest",
    choice3: " Sundarbans",
    choice4: "Western Ghats",
    answer: 2
  },
  {
    question: "What percentage of marine species depend on coral reefs?",
    choice1: "10%",
    choice2: "25%",
    choice3: "50%",
    choice4: "75%",
    answer: 2
  },
  {
    question: "What is the main threat to bananas (Cavendish variety)?",
    choice1: "Climate change",
    choice2: " Low water supply",
    choice3: " Panama disease",
    choice4: "Lack of pollinators",
    answer: 3
  },
  {
    question: "Which species is considered the most endangered wild cat?",
    choice1: "Bengal Tiger",
    choice2: "Iberian Lynx",
    choice3: " Snow Leopard",
    choice4: "Lion-Tailed Macaque",
    answer: 2
  },
  {
    question: "What is an 'Arribada'?",
    choice1: "A method of farming in the Amazon",
    choice2: "A coral bleaching event",
    choice3: " A mass nesting event of Olive Ridley turtles",
    choice4: " A traditional fishing technique",
    answer: 3
  },
  {
    question: "What is the primary function of a gene bank?",
    choice1: " Store financial information about farmers",
    choice2: "Preserve the genetic material of crops and animals",
    choice3: "Monitor pollution levels in marine ecosystems",
    choice4: "Study ancient human DNA",
    answer: 2
  },
   {
    question: "What is an example of an endemic species in Madagascar?",
    choice1: "Cheetah",
    choice2: "Snow Leopard",
    choice3: "Lemurs",
    choice4: "Orangutan",
    answer: 3
  },
  {
    question: "What is the role of pollinators in agriculture?",
    choice1: "They control pests",
    choice2: "They increase soil fertility",
    choice3: "They help plants reproduce by transferring pollen",
    choice4: "They produce oxygen",
    answer: 3
  },
  {
    question: "What is the main reason for the decline of the Mediterranean monk seal?",
    choice1: "Climate change",
    choice2: "Hunting and habitat destruction",
    choice3: "Overpopulation",
    choice4: " Oil spills",
    answer: 2
  },
  {
    question: "Which animal is referred to as the 'Pink Dolphin'?",
    choice1: "Bottlenose Dolphin",
    choice2: "Amazon River Dolphin",
    choice3: "Irrawaddy Dolphin",
    choice4: "Indo-Pacific Dolphin",
    answer: 2
  },
  {
    question: "What does 'Jhum Cultivation' refer to?",
    choice1: "Large-scale farming",
    choice2: "A form of shifting agriculture in Northeast India",
    choice3: "A deep-sea fishing method",
    choice4: "A coral reef conservation technique",
    answer: 2
  },
  {
    question: "Which biodiversity hotspot is known as the 'lungs of the planet'?",
    choice1: "Amazon Rainforest",
    choice2: "Indo-Burma Region",
    choice3: "Sundarbans",
    choice4: "Western Ghats",
    answer: 1
  },
  {
    question: "18. Which city is home to the Yamuna Biodiversity Park?",
    choice1: "Mumbai",
    choice2: "Delhi",
    choice3: "Kolkata",
    choice4: "Chennai",
    answer: 2
  },
  {
    question: "What is the primary threat to the Bengal Tiger?",
    choice1: "Habitat loss and poaching",
    choice2: "Cold weather",
    choice3: "Marine pollution",
    choice4: "Genetic similarity",
    answer: 1
  },
  {
    question: "What is the function of Marine Protected Areas (MPAs)?",
    choice1: "Promote deep-sea mining",
    choice2: "Limit human activities to protect marine biodiversity",
    choice3: "Encourage unrestricted fishing",
    choice4: "Build artificial reefs",
    answer: 2
  },
  {
    question: "What is the significance of the Western Ghats?",
    choice1: "It is the highest mountain range in the world",
    choice2: "It is one of the youngest mountain ranges",
    choice3: "It is a UNESCO World Heritage Site and a biodiversity hotspot",
    choice4: "It has no endemic species",
    answer: 3
  },
  {
    question: "What is a major threat to coral reefs?",
    choice1: "Increased oxygen levels",
    choice2: "Coral bleaching due to rising sea temperatures",
    choice3: "Excessive rainfall",
    choice4: "Overpopulation of marine life",
    answer: 2
  },
  {
    question: "What is the role of the Kayapo people in the Amazon?",
    choice1: "They mine gold to protect biodiversity",
    choice2: "They build dams to control deforestation",
    choice3: "They manage over 10.6 million hectares of land using traditional ecological knowledge",
    choice4: "They hunt endangered species",
    answer: 3
  },
  {
    question: "What is the Mediterranean Basin known for?",
    choice1: "Its extreme cold temperatures",
    choice2: "Having more than 50% of its plant species as endemic",
    choice3: "Its large desert regions",
    choice4: "Lack of human influence",
    answer: 2
  },
  {
    question: "What is a Turtle Excluder Device (TED)?",
    choice1: "A device used to track turtle migration",
    choice2: "A tool that prevents turtles from getting caught in fishing nets",
    choice3: "A machine that incubates turtle eggs",
    choice4: "A conservation law",
    answer: 2
  },
  {
    question: "Which animal is called the Asian Unicorn?",
    choice1: "Indian Rhino",
    choice2: "Saola",
    choice3: "Snow Leopard",
    choice4: "Red Panda",
    answer: 2
  },
  {
    question: "What is the main environmental concern with the Ghazipur Garbage Mountain?",
    choice1: "Excessive plant growth",
    choice2: "High methane emissions and groundwater pollution",
    choice3: "Decreasing population of birds",
    choice4: "Overuse of fertilizers",
    answer: 2
  },
  {
    question: "Why is the Ridge Forest important for Delhi?",
    choice1: "It is the largest tiger reserve in India",
    choice2: "It acts as the 'lungs of Delhi,' absorbing carbon dioxide and improving air quality",
    choice3: "It is a popular location for industrial development",
    choice4: "It is the driest region in India",
    answer: 2
  },
  {
    question: "What is the economic contribution of the Great Barrier Reef to Australia?",
    choice1: "$100 million per year",
    choice2: "$500 million per year",
    choice3: "$6.4 billion per year",
    choice4: "It does not contribute to the economy",
    answer: 3
  },
  {
    question: "What was the aim of the LIFE LynxConnect Project?",
    choice1: "Protect marine life in the Mediterranean",
    choice2: "Restore the Iberian Lynx population",
    choice3: "Expand agricultural lands in Africa",
    choice4: "Control air pollution in urban cities",
    answer: 2
  }

];

//CONSTANTS
const INCORRECT_TAX = 1;
const MAX_QUESTIONS = 30;

// Start Game & Timer
startGame = () => {
  questionCounter = 0;
  score = 100;
  availableQuesions = [...questions];
  getNewQuestion();

  // Timer
  setInterval(function () {
    score--;
    scoreText.innerText = score;

    if (score === 0) {
      localStorage.setItem("mostRecentScore", score);

      //go to the end page
      return window.location.assign("../../assets/html/end.html");
    }
  }, 1000);
};

// Display Next Random Question and Answers
getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    //go to the end page
    return window.location.assign("../html/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  // Get Answers
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

//Get User's Choice
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "incorrect") {
      decrementScore(INCORRECT_TAX);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

//Penalty for wrong choice
decrementScore = num => {
  score -= num;
  scoreText.innerText = score;
};


startGame();
