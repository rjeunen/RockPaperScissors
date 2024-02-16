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

//adding a function to get a choice from the player
function getPlayerChoice(){
    const playerSelection = prompt("Enter your choice: Rock, Paper or Scissors?: ");
    return playerSelection;
}

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

//adding a function to play a game. A game is 5 rounds.
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
    

    /*
    Hieronder de uitleg zonder loop.
    Zou je geen loop willen of kunnen gebruiken is het letterlijk de code herhalen.
    spelerkeuze
    computerkeuze
    1ronde
    de als statement om de punten te tellen
    REPEAT voor het aantal rondes dat je wilt spelen.
    */

}

//call function play a game
playGame();