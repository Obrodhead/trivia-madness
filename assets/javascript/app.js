var triviaQuestions = [
    {
      question: "Who was the author of the novel 'War and Peace'?",
      answers: ["Patrick Jenkins", "Leo Tolstoy", "Bono", "Neil Rheinhart"],
      correctAnswer: "Leo Tolstoy"
    },
    {
        question: "What type of animals were Napoleon and Snowball in the George Orwell book 'Animal Farm'??",
        answers: ["fish", "elk",  "boar", "wolves"],
        correctAnswer: "boar"
      },
      {
        question: "Thor is the son of which Norse god?",
        answers: ["Odin", "Apollo", "Ares","Artemis"],
        correctAnswer: "Odin"
      },
      {
        question: "Who had a flying carpet?",
        answers: ["Manny Mildred", "Justin Weaver", "Bob Weaver","Alladin"],
        correctAnswer: "Alladin"
      },
      {
        question: "What German composer was played by Gary Oldman in the film 'Immortal Beloved'?",
        answers: ["Bach", "Shwernamerna", "Beethoven", "Zalinsky"],
        correctAnswer: "Beethoven"
      },
      {
        question: "The Eisner Award is named after which influential cartoonist and writer?",
        answers: ["Will Blake", "David Eisner", "Bridget Eisner","Will Eisner"],
        correctAnswer: "Will Eisner"
      },
      {
        question: "Which color is not considered to be one of the primary colors of light?",
        answers: ["Red", "Yellow", "Green", "Blue"],
        correctAnswer: "Yellow"
      },
      {
        question: "Who wrote The Murders in the Rue Morgue??",
        answers: ["Lance Bass", "Hue Jeffries", "Edgar Allen Poe", "James Blunt"],
        correctAnswer: "Edgar Allen Poe"
      },
      {
        question: "Who aimed his Emporio clothing line at younger buyers?",
        answers: ["Giorgio Armani", "Guccio Gucci", "Mario Zario", "Feliz Milkenstein"],
        correctAnswer: "Giorgiio Armani"
      },
      {
        question: "What is the dot on the letter i named?",
        answers: ["a tiddle", "aglet", "shnerpy", "tootle"],
        correctAnswer: "a tiddle"
      },
]

// GLOBAL VARIABLES

var counter = 10; // timer that's going to count down 
var currentQuestion = 0; // pull first question from the array
var score = 0; // count correct answers
var incorrect = 0; // count incorrect answers
var timer; // set interval gives ability to clear or reset counter


// FUNCTIONS

// Replace current question with next question once answer has been selected

function nextQuestion() {
    var questionTimesUp = (triviaQuestions.length - 1) === currentQuestion; // stops displaying questions once cycle is complete all questions have been displayed
    if (questionTimesUp) {
    console.log("game over");
    displayFinalScore();
    } else {
        currentQuestion++; 
        displayQuestions(); 

    }
}

// function to clear timer clearInterval method clear timer set with seInterval + add incorrect count

function timeUp() {
    clearInterval(timer);

    incorrect++;

    nextQuestion();
}

// initialize timer count down 

function countDown() {
    counter--;

    $("#time").html(counter);

    if (counter === 0) {
        timeUp();
    }
}

// display trivia questions

function displayQuestions() {
    counter = 10;
    timer = setInterval(countDown, 1000);
    
    var question = triviaQuestions[currentQuestion].question; // retrieve current question
    var answers = triviaQuestions[currentQuestion].answers; // retrieve answer options

    $("#time").html(counter); // display timer on browser
    $("#game").html(`
        <h4>${question}<h4> 
    ${displayAnswers(answers)}
    `);
}

// display answers on page for loop

function displayAnswers(answers) {
    var result = "";
// loop through answer array 
    for (let i = 0; i < answers.length; i++) {
        result += `<p class="answer" data-answer="${answers[i]}">${answers[i]}</p>`;
        
    }

    return result;
}

// on click function to select answer to question 

$(document).on('click', ".answer", function() {
    clearInterval(timer); // clear timer after answer has been selecter and next question appears
    var userAnswer = $(this).attr("data-answer"); // 'this' represents elements clicked, attribuet to go inside element and get the value of the data answer
    var correctAnswer = triviaQuestions[currentQuestion].correctAnswer; // compare correct answer with the user answer
    // if else statement to increase score if answer equals user answer increase incorrect else guess is not equal to (false)

    if (correctAnswer === userAnswer) {

        score++;
        console.log("increasescore");
        nextQuestion(); 
    } else {

        incorrect++;
        console.log("increaseincorrect");
        nextQuestion();
    }
    
    console.log(correctAnswer);
});

// function to display results at the end of game

function displayFinalScore() {
    var finalScore = `
        <p>Correct Answers: ${score} </p>
        <p>Incorrect Answers: ${incorrect} </p>
        
        <button class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $('#game').html(finalScore);
}

// function for reset button to refresh first question for new game reset

$(document).on('click', '#reset', function() {
    
    counter = 5;
    currentQuestion = 0;
    score = 0;
    incorrect = 0;
    timer = null;

    displayQuestions();

    
});

//function for start button to begin game

$("#start").click(function() {
    $("#start").remove();
    $("#time").html(counter);
    displayQuestions();
    
});


//Yet to be completed for advanced option:
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

//if else statement for function to display congrats or bummer display





