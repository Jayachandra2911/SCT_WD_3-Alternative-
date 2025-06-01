const questions = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Berlin", "Paris", "Madrid"],
    correct: 2
  },
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "2 + 2 = ?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style System",
      "Colorful Style Syntax"
    ],
    correct: 1
  },
  {
    question: "Who is the founder of Microsoft?",
    answers: ["Elon Musk", "Steve Jobs", "Bill Gates", "Mark Zuckerberg"],
    correct: 2
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: ["<link>", "<a>", "<href>", "<hyper>"],
    correct: 1
  },
  {
    question: "What does JS stand for?",
    answers: [
      "JavaSystem",
      "JustScript",
      "JavaScript",
      "JumboScript"
    ],
    correct: 2
  },
  {
  question: "Which symbol is used for comments in JavaScript?",
  answers: ["//", "/* */", "#", "<!-- -->"],
  correct: 0
},
{
  question: "Which of the following is a JavaScript framework?",
  answers: ["Laravel", "React", "Django", "Flask"],
  correct: 1
},
  {
    question: "Which company developed the React library?",
    answers: ["Google", "Microsoft", "Apple", "Meta (Facebook)"],
    correct: 3
  }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.getElementById("result-container").classList.add("hide");
  document.getElementById("question-container").classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const questionObj = questions[currentQuestionIndex];
  document.getElementById("question").textContent = questionObj.question;

  const buttonsContainer = document.getElementById("answer-buttons");
  buttonsContainer.innerHTML = "";

  questionObj.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(index);
    buttonsContainer.appendChild(btn);
  });

  document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(index) {
  const questionObj = questions[currentQuestionIndex];
  const isCorrect = index === questionObj.correct;

  if (isCorrect) score++;

  Array.from(document.getElementById("answer-buttons").children).forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === questionObj.correct) {
      btn.style.backgroundColor = "green";
    } else if (idx === index && !isCorrect) {
      btn.style.backgroundColor = "red";
    }
  });

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("question-container").classList.add("hide");
  document.getElementById("result-container").classList.remove("hide");
  document.getElementById("score").textContent = `${score} / ${questions.length}`;
}

window.onload = startQuiz;
