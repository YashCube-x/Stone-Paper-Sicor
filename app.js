let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userpara = document.querySelector("#user-score"); 
const comppara = document.querySelector("#comp-score"); 


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Fixed extra spaces
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText = "Draw Game! Play again.";
};

const showWinner = (useWin, userchoice, compChoice) => {
    if (useWin) {
        userScore++; 
        userpara.innerText = userScore
        msg.innerText = `You Win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
                compScore++; 
                comppara.innerText = compScore;


        msg.innerText = `You Lose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let useWin = false;
        if (userchoice === "rock") {
            useWin = compChoice === "scissors";
        } else if (userchoice === "paper") {
            useWin = compChoice === "rock";
        } else if (userchoice === "scissors") {
            useWin = compChoice === "paper";
        }
        showWinner(useWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked", userchoice);
        playGame(userchoice); // Now it correctly calls playGame
    });
});
