const state = ["rock", "paper", "scissor"];
var player_score = 0;
var computer_score = 0;

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
        player_score++;
        const currentPlayerScore = document.querySelector('#playerscore').innerHTML = `Score: ${player_score}`;
        const result = document.querySelector('#last-match').innerHTML = `Result: ${player} beats ${computer}. Player wins!`;
    }else if(results == "LOSE"){
        computer_score++;
        const currentComputerScore = document.querySelector('#computerscore').innerHTML = `Score: ${computer_score}`;
        const result = document.querySelector('#last-match').innerHTML = `Result: ${computer} beats ${player}. Computer wins!`;
    }else{
        const result = document.querySelector('#last-match').innerHTML = 'Result: Draw, nobody wins, ya both suck.';
    }

    if(player_score == 5){
        alert("Parabéns, você venceu! (colocar algo aqui depois)\nGame over n vo coloca botao para reiniciar nao");
    }else if(computer_score == 5){
        alert("Parabéns, você não venceu! (n precisa colocar nada aqui\nGame over n vo coloca botao para reiniciar nao");
    }
}

/*function game(times){
    for(let i = 0; i < times; i++){
        let player = prompt("Rock, Paper or Scissors?: ");
        let computer = computerPlay();
        console.log(playRound(player, computer));
    }
}*/

const buttons = document.querySelectorAll("input");
buttons[0].onclick = () => playRound('rock', computerPlay());
buttons[1].onclick = () => playRound('paper', computerPlay());
buttons[2].onclick = () => playRound('scissors', computerPlay());
