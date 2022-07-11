//Create function to make computers play
// return rock, paper or scissors
function cumputerPlay(){
    const playID = Math.floor(Math.random()*3);
    let compPlay;
    if (playID == 0) {
        compPlay = 'Rock';
    }
    else if (playID == 1) {
        compPlay = 'Paper';
    }
    else {
        compPlay = 'Scissors';
    }
    //console.log(compPlay);
    return compPlay;
}

// function for single round of play
// parameters: playerSelection(case insensitive) and computerSelection - 
//return a string that declares the winner

let player = 0;
let computer = 0;

function playRound(playerSelection,computerSelection){
    if (playerSelection == computerSelection.toUpperCase()) {
        return "Its a tie";
    }
    else if (playerSelection == 'ROCK' & computerSelection == 'Paper') {
        computer += 1;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == 'ROCK' & computerSelection == 'Scissors') {
        player += 1;
        return "You Win! Rock beats Scissors.";
    }
    else if (playerSelection == 'PAPER' & computerSelection == 'Rock') {
        player += 1;
        return "You Win! Paper beats Rock.";
    }
    else if (playerSelection == 'PAPER' & computerSelection == 'Scissors') {
        computer += 1;
        return "You Lose! Scissors beats Paper.";
    }
    else if (playerSelection == 'SCISSORS' & computerSelection == 'Rock') {
        computer += 1;
        return "You Lose! Rock beats Scissors.";
    }
    else if (playerSelection == 'SCISSORS' & computerSelection == 'Paper') {
        player += 1;
        return "You Win! Scissors beats Paper.";
    }
    else {
        return "Your input is incorrect!";
    }
}
// function for a game. This will call single round function to play a 5 round 
// game that keeps score and reports a winner or loser at the end.
function game() {
    computer = 0;
    player = 0;
    for(let i = 0; i <5; i++){
        let playerSelection = prompt("Enter your choice - Rock, Paper or Scissors");
        playerSelection = playerSelection.toUpperCase();
        let computerSelection = cumputerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
    if (player > computer){
        console.log("You win the game!");
    }
    else if (computer>player){
        console.log("Computer Wins :(");
    }
    else {
        confirm.log("Game ends in a draw! What a waste...")
    }
}
game();