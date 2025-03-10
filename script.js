let wins = 0;
let losses = 0;
let ties = 0;
let options = ["R", "P", "S"];

window.alert("Hey there, let's play Rock, Paper, Scissors!");

const playGame = function () {
  let playerChoice = prompt(
    'Type "R" for rock, "P" for paper, or "S" for scissors'
  );

  if (playerChoice === null) {
    return;
  }

  playerChoice = playerChoice.toUpperCase();

  if (playerChoice !== "R" || playerChoice !== "P" || playerChoice !== "S") {
    window.alert("Sorry, I didn't understand that input.");
    playGame();
  }

  let computerOption = Math.floor(Math.random() * options.length);
  let computerChoice = options[computerOption];
  let computerWord;

  if (computerChoice === "R") {
    computerWord = "Rock";
  } else if (computerChoice === "P") {
    computerWord = "Paper";
  } else {
    computerWord = "Scissors";
  }

  if (playerChoice === computerChoice) {
    ties++;
    window.alert("The computer also chose " + computerWord + "!");
  } else if (
    (playerChoice === "R" && computerChoice === "S") ||
    (playerChoice === "P" && computerChoice === "R") ||
    (playerChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("The computer chose " + computerWord + ". You win!");
  } else {
    losses++;
    window.alert("The computer chose " + computerWord + ". You lose!");
  }
};
