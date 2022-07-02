const state = ["rock", "paper", "scissor"];

function computerPlay(){
    return state[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();
    var results;


    if(player == "rock"){
        if(computer == "paper"){
            results = "LOSE";
        }else if(computer == "scissor"){
            results = "WIN";
        }else{
            results = "DRAW";
        }
    }else if(player == "paper"){
        if(computer == "scissor"){
            results = "LOSE";
        }else if(computer == "rock"){
            results = "WIN";
        }else{
            results = "DRAW";
        }
    }else{
        if(computer == "rock"){
            results = "LOSE";
        }else if(computer == "paper"){
            results = "WIN";
        }else{
            results = "DRAW";
        }
    }
    
    if(results == "WIN"){
        return `You ${results}! ${player} beats ${computer}.`
    }else if(results == "LOSE"){
        return `You ${results}! ${computer} beats ${player}.`
    }else{
        return `${results}!`;
    }
}

function game(times){
    for(let i = 0; i < times; i++){
        let player = prompt("Rock, Paper or Scissors?: ");
        let computer = computerPlay();
        console.log(playRound(player, computer));
    }
}

const buttons = document.querySelectorAll("button");
buttons[0].onclick = () => alert(playRound('rock', computerPlay()));
buttons[1].onclick = () => alert(playRound('paper', computerPlay()));
buttons[2].onclick = () => alert(playRound('scissors', computerPlay()));