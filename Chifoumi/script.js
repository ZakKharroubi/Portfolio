const buttons = document.querySelectorAll("button");

let computerScore = 0;
let playerScore = 0;
let computerCount = document.getElementById('computer-score');
let playerCount = document.getElementById('player-score');
let roundWinner = document.getElementById('round-winner')
let playerChoice = document.getElementById('player-choice');
let computerChoice = document.getElementById('computer-choice');

for (let i = 0; buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const player = buttons[i].innerHTML;
        const bot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let result = "";

        if (player === bot) {
            result = "Vous êtes à égalité";
            roundWinner.innerHTML = result;
        } else if ((player === "PIERRE 👊" && bot === "CISEAUX ✌") || (player === "FEUILLE ✋" && bot === "PIERRE 👊") || (player === "CISEAUX ✌" && bot === "FEUILLE ✋")) {
            result = "La victoire revient au joueur";
            roundWinner.innerHTML = result;
            playerScore++;
        } else {
            result = "La victoire revient à l'ordinateur"
            roundWinner.innerHTML = result;
            computerScore++;

        }

        computerCount.innerHTML = computerScore;
        playerCount.innerHTML = playerScore;
        playerChoice.innerHTML = player;
        computerChoice.innerHTML = bot;
    });
}