//creating a function to make the computer create a choice.
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);

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

//testing function playRound
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

