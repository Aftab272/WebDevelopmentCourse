function rollDice() {
  let randomNum1 = Math.floor(Math.random() * 6) + 1;
  let randomNum2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById("dice1").src = "images/dice" + randomNum1 + ".png";
  document.getElementById("dice2").src = "images/dice" + randomNum2 + ".png";

  let resultText = "";
  if (randomNum1 > randomNum2) {
    resultText = "🏆 Player 1 Wins!";
  } else if (randomNum2 > randomNum1) {
    resultText = "🏆 Player 2 Wins!";
  } else {
    resultText = "🤝 It's a Draw!";
  }

  document.getElementById("result").innerText = resultText;
}