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

const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click',()=>{
    if (player===5 || computer===5){
        const result = document.querySelector('.score');
        if (player>computer){
            result.textContent = "Player Won!";
        }
        else if(computer> player){
            result.textContent = "Computer Won!";
        }
        else result.textContent = "It's a tie!";
        player = 0;
        computer = 0;
        }
    else{
        let computerSelection = cumputerPlay();
        let playerSelection = button.id.toUpperCase();
        let roundResult = playRound(playerSelection,computerSelection);
        
        const comp = document.querySelector('.comp-turn');
        comp.textContent = computerSelection;
        const round = document.querySelector('.round');
        round.textContent = roundResult;
        const score = document.querySelector('.score');
        score.textContent = `Player: ${player} Computer: ${computer}`;        
    }
    }); 
});