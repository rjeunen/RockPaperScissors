//creating a function to make the computer create a choice.
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 1){
        return "Rock";
    } else if(computerChoice === 2){
        return "paper";
    } else{
        return "Scissors";
    }
}
//Checking if function getComputerChoice works.
console.log(getComputerChoice());

