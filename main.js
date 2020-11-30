//Initialize an array that stores the values for the games choice selection

let gameChoices = ["rock", "paper", "scissors"];

let playerWinCount = 0;
let computerWinCount = 0;

//Randomly generate one of the choices from this array and return the value

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"


function game(){
    
    playRound();

    let leaderboard = console.log("The computer has won " + computerWinCount + " times." + " The player has won " + playerWinCount + " times.");

    while ( computerWinCount < 5 && playerWinCount < 5 ){
        game();
        return leaderboard;
    };

    function playRound(playerSelection, computerSelection){
        //Use Math. random() function to get the random number between(0-1, 1 exclusive
        //Multiply it by the array length to get the numbers between(0-arrayLength).
        //Use Math. floor() to get the index ranging from(0 to arrayLength-1).
        
        let computerPlay = () =>{
            return gameChoices[Math.floor(Math.random() * gameChoices.length)];
        }
        computerSelection = computerPlay();
        playerSelection = prompt("What is your choice?: ");
        playerSelection = playerSelection.toLowerCase();
    
            if(gameChoices.includes(playerSelection) === true){
            determineWinner();
            } else {
            alert("Choose between: Rock, Paper, or Scissors.")
            };

        function determineWinner(){
        if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" ){
            console.log("You have won!");
            return playerWinCount++;
        } else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors" ){
            console.log("You have tied!");
        } else {
            console.log("You have lost!");
            return computerWinCount++;
        }
        };
    }
}

game();

//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
//At this point you should be using console.log() to display the results of each round and the winner at the end.