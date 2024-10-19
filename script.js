function playgame (rounds) {
    let P1=0;
    let P2=0;
    let x;
    for(let i=0;i<rounds;i++){
    do {
        x = prompt("Enter r: Rock , p: Paper , s: Scissors to challenge the Computer");
        if (x===null){
            break;
        }
        x=x.trim().toUpperCase();
        if (x!='R' && x!='P' && x!='S'){
            alert("Invalid input, Try Again");
        }
        } while (x!='R' && x!='P' && x!='S');
        if (x===null){
            break;
            }
    let player = getHumanChoice(x);
    let comp = getComputerChoice();
    let result =playground(player,comp)

    if (result=='tie'){
        P1++;
        P2++;
        alert('Tie');
    } else if (result == 'player'){
        P1++;
        alert('Player Wins');
    }
    else{
        P2++;
        alert('Computer Wins');
    }
    
}

return x===null ?  null : [P1 , P2] ;
}
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getHumanChoice(x){
    let choice = x.toUpperCase()=='R' ? "rock": x.toUpperCase()=='P' ? 'paper' : x.toUpperCase()=='S' ? "scissors" : 'Invalid';
    return choice;
}

function playground (p,c) {
    if (p=='rock' && c=='rock' || p=='paper' && c=='paper' || p=='scissors' && c=='scissors'){
        return "tie";
    } else if (p=='rock' && c=='scissors' || p=='paper' && c=='scissors' || p=='scissors' && c=='paper'){
        return "player";
    } else {
        return 'comp';
    }
    
}
let rounds;
do {
     rounds = prompt('Enter number of rounds to be played');
    if (rounds=== null){
        break
    }
    else if (isNaN(rounds) || rounds.trim()===""){
        alert("Error: That's not a valid number. Please try again.");
    }
} while (isNaN(rounds) || rounds.trim()==='');

let result = playgame(parseInt(rounds));
if (rounds==0 || rounds ===null ){
    alert("No rounds played");
}
else if (result ===null){
    alert("Match Cancelled");
}
else if (result[0]==result[1]){
    alert(`It's a tie ${result[0]} : ${result[1]} `);
}
else if (result[0]>result[1]){
    alert(`Player wins ${result[0]} : ${result[1]}`);
    }
else{
    alert(`Computer wins ${result[0]} : ${result[1]}`); 
    }

