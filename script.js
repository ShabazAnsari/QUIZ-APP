const questions = [
    {
        question: "What is the purpose of the display: flex property in CSS?",
        options: ["To create a grid layout", "To center an element vertically", "To display elements in a row or column", "To hide an element"],
        answer: "To display elements in a row or column"
    },
    {
        question: "Which JavaScript function is used to convert a JSON object to a string?",
        options: ["JSON.parse()", "JSON.stringify()", "eval()", "parseInt()"],
        answer: "JSON.stringify()"
    },
    {
        question: "Which of the following CSS properties is used to center an element horizontally?",
        options: ["margin-left: auto;", "margin-right: auto;", "text-align: center;", "justify-content: center;"],
        answer: "justify-content: center;"
    },
    {
        question: "Which of the following is a feature of the slice() method in JavaScript?",
        options: ["It returns a new array with a specified length", "It removes elements from an array", "It inserts elements at a specified position", "It returns a subset of an array"],
        answer: "It returns a subset of an array"
    },
    {
        question: "What is the purpose of the parseInt() function in JavaScript?",
        options: ["To convert a string to a floating-point number", "To convert a string to an integer", "To convert a number to a string", "To evaluate a mathematical expression"],
        answer: "To convert a string to an integer"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("answer-container");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.querySelector(".score");
const scoreValueElement = document.getElementById("score-value");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectOption(option, button));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption, button) {
    const currentQuestion = questions[currentQuestionIndex];
    const allOptions = optionsElement.querySelectorAll("button");

    allOptions.forEach(option => option.style.pointerEvents = "none");

    if (selectedOption === currentQuestion.answer) {
        button.style.backgroundColor = "#00ff00"; 
        score++;
    } else {
        button.style.backgroundColor = "#990000"; 
    }

    nextButton.disabled = false;
}

function showScore() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
    scoreElement.style.display = "block"; 
    scoreValueElement.innerText = `${score} / ${questions.length}`;
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.disabled = true;
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", handleNextQuestion);
showQuestion();
