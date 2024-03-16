//creating a function to make the computer create a choice.
function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 1){
        return "rock";
    } else if(computerChoice === 2){
        return "paper";
    } else{
        return "scissors";
    }
}
//Checking if function getComputerChoice works.
//console.log(getComputerChoice());


/*
//adding a function to get a choice from the player
//Function was commented out because of the evenListeners on the added buttons.
function getPlayerChoice(){
    const playerSelection = prompt("Enter your choice: Rock, Paper or Scissors?: ");
    return playerSelection;
}
*/
//adding a function to play a single round.
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return `It is a tie! You both chose ${computerSelection}`;
    } else if(playerSelection == "rock" && computerSelection == "paper"){
        return `You lose,' ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        return `You win, ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        return `You win, ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        return `You lose, ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection == "scissors" && computerSelection == "rock"){
        return `You lose, ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        return `You win, ${playerSelection} beats ${computerSelection}`;
    } else{
        return `You did not enter a valid choice`;
    }
}

//eventListeners for the new buttons.
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

let playerScore = 0;
let computerScore = 0;

const score = document.querySelector("#displayResult");

const div = document.createElement("div");
div.style.marginTop = "20px";
div.textContent = `${playerScore} - ${computerScore}`;
score.appendChild(div);


buttonRock.addEventListener("click", setPlayerChoiceRock);
buttonPaper.addEventListener("click", setPlayerChoicePaper);
buttonScissors.addEventListener("click", setPlayerChoiceScissors);

function setPlayerChoiceRock(){
    playerSelection = "rock";
    let result = playRound("rock", getComputerChoice());
    if(result.includes("win")){
        playerScore++;
    } else{
        computerScore++;
    }
    console.log(result);
    div.textContent = `${playerScore} - ${computerScore}`;
    score.appendChild(div);
    checkScore();
    div.textContent = `${playerScore} - ${computerScore}`;
}
function setPlayerChoicePaper(){
    playerSelection = "paper";
    let result = playRound("paper", getComputerChoice());
    if(result.includes("win")){
        playerScore++;
    } else{
        computerScore++;
    }
    console.log(result);
    div.textContent = `${playerScore} - ${computerScore}`;
    score.appendChild(div);
    checkScore();
    div.textContent = `${playerScore} - ${computerScore}`;
}
function setPlayerChoiceScissors(){
    playerSelection = "scissors";
    let result = playRound("scissors", getComputerChoice());
    if(result.includes("win")){
        playerScore++;
    } else{
        computerScore++;
    }
    console.log(result);
    div.textContent = `${playerScore} - ${computerScore}`;
    score.appendChild(div);
    checkScore();
    div.textContent = `${playerScore} - ${computerScore}`;
}
function checkScore(){
    if (playerScore === 5){
        alert(`You win, score: ${playerScore} - ${computerScore}`);
        playerScore = 0;
        computerScore = 0;
    } else if(computerScore === 5){
        alert(`You lose, score: ${playerScore} - ${computerScore}`);
        playerScore = 0;
        computerScore = 0;
    }
}



//adding a function to play a game. A game is 5 rounds.
/*
function playGame(){
    //variables to keep the score
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const resultRound = playRound(playerSelection, computerSelection);
    console.log(resultRound);

    
    //loop to play 5 rounds
    for(i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        //result Round bevat de winnaar van 1 rond - is eigenlijk de functiecall playRound
        const resultRound = playRound(playerSelection, computerSelection);
        console.log(resultRound);

        //count winning rounds
        if(resultRound.includes("win")){
            playerScore++;
        } else if(resultRound.includes("lose")){
            computerScore++;
        } else{
            tieScore++;
        }
    }
    console.log(`the score is: Player ${playerScore} VS computer ${computerScore} and the game had ${tieScore} tie rounds`);
    



}
*/

//call function play a game
//playGame();