let player1Choice = null;
let player2Choice = null;
let score1 = 0;
let score2 = 0;
let round = 1;
const totalRounds = 3;

function selectChoice(player, choice) {
  if (round > totalRounds) return;

  if (player === 1) {
    player1Choice = choice;
  } else {
    player2Choice = choice;
  }

  if (player1Choice && player2Choice) {
    playRound();
  }
}

function playRound() {
  let result = "";

  if (player1Choice === player2Choice) {
    result = "Draw!";
  } else if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "scissors" && player2Choice === "paper")
  ) {
    result = "Player 1 wins this round!";
    score1++;
  } else {
    result = "Player 2 wins this round!";
    score2++;
  }

  document.getElementById("result").innerText = result;
  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;

  player1Choice = null;
  player2Choice = null;

  round++;
  updateRoundInfo();

  if (round > totalRounds) {
    declareFinalWinner();
  }
}

function updateRoundInfo() {
  if (round <= totalRounds) {
    document.getElementById("round-info").innerText = `Round ${round} of ${totalRounds}`;
  }
}

function declareFinalWinner() {
  let finalResult = "";
  if (score1 > score2) {
    finalResult = "🏆 Player 1 wins the game!";
  } else if (score2 > score1) {
    finalResult = "🏆 Player 2 wins the game!";
  } else {
    finalResult = "🤝 It's a tie!";
  }
  document.getElementById("result").innerText = finalResult;
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  round = 1;
  player1Choice = null;
  player2Choice = null;
  document.getElementById("score1").innerText = "0";
  document.getElementById("score2").innerText = "0";
  document.getElementById("result").innerText = "Waiting for both players...";
  document.getElementById("round-info").innerText = `Round 1 of ${totalRounds}`;
}
