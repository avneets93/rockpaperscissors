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

cumputerPlay();
// function for single round of play
// parameters: playerSelection(case insensitive) and computerSelection - 
//return a string that declares the winner

// function for a game. This will call single round function to play a 5 round 
// game that keeps score and reports a winner or loser at the end.
