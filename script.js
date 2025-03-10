let wins = 0;
let losses = 0;
let ties = 0;
let options = ["R", "P", "S"];

alert("Hey there, let's play Rock, Paper, Scissors!");

const playGame = function () {
  let choice = prompt('Type "R" for rock, "P" for paper, or "S" for scissors');

  if (choice === null) {
    playGame();
  }

  choice = choice.toUpperCase();

  let computerOption = Math.floor(Math.random() * options.length);
  let computerChoice = options[computerOption];
};
