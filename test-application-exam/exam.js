// Define an array of questions and answers
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>", "<js>", "<Scripting>", "<script>"],
        answer: 3
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The <body> section", "The <head> section", "both section", "None of the above"],
        answer: 0
    },
    {
        question: "What is the file extension for JavaScript files?",
        options: ["java", "js", "javascript", "script"],
        answer: 1
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["variable", "var", "v", "declare"],
        answer: 1
    },
    {
        question: "Which function is used to display a dialog box with a message in JavaScript?",
        options: ["alert()", "confirm()", "prompt()", " log()"],
        answer: 0
    },
    {
        question: "Which of the following is a valid way to comment in JavaScript?",
        options: [" <!-- This is a comment -->", " // This is a comment", "/* This is a comment */", "** This is a comment **"],
        answer: 2
    },
    {
        question: "What is the correct way to write a conditional statement in JavaScript?",
        options: [" if/then/else", "when/then/otherwise", "choose/then/else", "if/else"],
        answer: 3
    },
    {
        question: "Which operator is used to concatenate strings in JavaScript?",
        options: ["+", "-", "*", "/"],
        answer: 0
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: [" pop()", " remove()", "delete()", " shift()"],
        answer: 0
    },
    {
        question: "Which of the following is not a valid JavaScript data type?",
        options: ["boolean", "string", "float", "object"],
        answer: 2
    }

];

// make random question and answer
function randomquestions(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

questions = randomquestions(questions);

var currentQuestion = 0;
var totalQuestions = questions.length;
var score = 0;

// Function to display the current question
function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionElements = document.getElementById("options").getElementsByTagName("span");

    questionElement.textContent = questions[currentQuestion].question;

    for (var i = 0; i < optionElements.length; i++) {
        optionElements[i].textContent = questions[currentQuestion].options[i];
    }
}

// Function to check the selected answer
function checkAnswer() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        var answer = parseInt(selectedAnswer.value);

        if (answer === questions[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion >= totalQuestions) {
            displayResult();
        }
        else {
            displayQuestion();
        }

        selectedAnswer.checked = false;
    }
}

// Function to display the result
function displayResult() {
    var resultContainer = document.getElementById("result-container");
    var resultElement = document.getElementById("result");

    resultElement.textContent = "You scored " + score + " out of " + totalQuestions + " correct.";

    resultContainer.style.display = "block";
}

// Event listener for the "Check Answer" button
document.getElementById("check-answer-btn").addEventListener("click", checkAnswer);

// Display the first question
displayQuestion();
