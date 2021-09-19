const readlinesync = require("readline-sync");

const chalk = require("chalk");

var score = 0;

const questions = [
  {
    question: "Who was the first Indian woman in Space?",
    answer: "Kalpana Chawla",
  },

  {
    question: "Who was the first Indian Scientist to win a Nobel Prize?",
    answer: "CV Raman",
  },
  {
    question: " India's largest city by population",
    answer: "Delhi",
  },
  {
    question: "Where is the headquarters of ISRO located?",
    answer: "Banglore",
  },
  {
    question: "Which is India’s smallest state?",
    answer: "Goa",
  },
  {
    question: "Which is the biggest Indian state?",
    answer: "Rajasthan",
  },
  {
    question: "Who is known as the Flying Sikh of India?",
    answer: "Milkha Singh",
  },
  {
    question: "What comes before sunday and after friday?",
    answer: "Saturday",
  },
];

const topScorers = [
  {
    name: "Rahul",
    score: 6,
  },
  {
    name: "Dinesh",
    score: 5,
  },
  {
    name: "Akshay",
    score: 5,
  },
];

//ex01 to ex04: do it all together

const name = readlinesync.question(chalk.cyan("What is your Name ? \n"));

const data = name.charAt(0).toUpperCase() + name.slice(1);

function welcometheUser() {
  console.log(
    chalk.green(
      "\nWelcome " +
        chalk.yellow(data) +
        " to" +
        " 'Do You Know India Quiz ?' \n" +
        "\nLets start the Quiz\n" +
        "-------------------\n"
    )
  );
}

function asktheQuestion(question, answer) {
  let userInput = readlinesync.question(chalk.cyanBright(question));

  console.log("You have entered : " + userInput);

  // ex08: condition to check the answer

  if (userInput.toUpperCase() === answer.toUpperCase()) {
    rightAnswer();
  } else {
    wrongAnswer(answer);
  }

  console.log("Current score:", score);
  console.log(chalk.yellowBright("------------------------------\n"));
}

//ex06 Increment score if right answer

function rightAnswer() {
  console.log(chalk.green("Right answer "));
  score++;
}

function wrongAnswer(answer) {
  console.log(chalk.redBright("Wrong answer 👎"));
  console.log("The correct answer is '" + answer + "'.");
}

function showScores() {
  congrasorTryagain();
  for (let i = 0; i < topScorers.length; i++) {
    console.log(
      chalk.yellow(
        "Top Scorers of the game are : \n" +
          topScorers[i].name +
          topScorers[i].score
      )
    );
  }
}

function congrasorTryagain() {
  if (score !== 0) {
    console.log(chalk.green("CONGRATULATIONS! 'You have Scored' : " + score));
    var userHasBeatenHighScore = hasUserBeatenHighScore();
    console.log(
      chalk.green(
        "\n" +
          userHasBeatenHighScore +
          chalk.yellowBright("------------------------ \n")
      )
    );
  } else {
    console.log(
      chalk.redBright("TRY AGAIN! " + "'You have scored'" + score + "\n")
    );
    console.log(chalk.yellowBright("------------------------------\n"));
  }
}

// bonus homework: has the user beaten high score?
function hasUserBeatenHighScore() {
  var maxScore = 0;
  for (var i = 0; i < topScorers.length; i++) {
    var currentHighScore = topScorers[i].score;
    if (currentHighScore > maxScore) {
      maxScore = currentHighScore;
    }
  }

  if (score > maxScore) {
    return (
      "CONGRATULATIONS AGAIN! You have broken the HIGH SCORE RECORDS. 👏\n" +
      "Kindly, send me the screenshot of your score to update the scoreboard.\n"
    );
  } else {
    return "";
  }
}

function playGame() {
  for (var i = 0; i < questions.length; i++) {
    let singleQuestion = questions[i];

    asktheQuestion(singleQuestion.question, singleQuestion.answer);
  }
}
welcometheUser();
playGame();
showScores();
