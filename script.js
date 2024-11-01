let P1=0;
let P2=0;
function playgame (option) {
    
    let player = option;
    let comp = getComputerChoice();
    let result =playground(player,comp)

    if (result=='tie'){
        P1++;
        P2++;

    } else if (result == 'player'){
        P1++;
    }
    else{
        P2++;
    }
    if (P1==5 && P2==5){
        div.textContent=`TIE`;
        body.removeChild(buttons);
        body.appendChild(again);
        again.addEventListener('click',()=>{
            P1=0;
            P2=0;
            human.textContent=`👤: ${P1}`;
            computer.textContent=`🤖: ${P2}`;
            body.removeChild(again);
            body.appendChild(buttons);
        })
    }
    if (P1==5){
        div.textContent=`👤 Wins`;
        body.removeChild(buttons);
        body.appendChild(again);
        again.addEventListener('click',()=>{
            P1=0;
            P2=0;
            div.textContent=``;
            human.textContent=`👤: ${P1}`;
            computer.textContent=`🤖: ${P2}`;
            div.appendChild(human);
            div.appendChild(computer);
            body.removeChild(again);
            body.appendChild(buttons);
        })
    }
    else if (P2==5){
        div.textContent=`🤖 Wins`;
        body.removeChild(buttons);
        body.appendChild(again);
        again.addEventListener('click',()=>{
            P1=0;
            P2=0;
            div.textContent=``;
            human.textContent=`👤: ${P1}`;
            computer.textContent=`🤖: ${P2}`;
            div.appendChild(human);
            div.appendChild(computer);
            body.removeChild(again);
            body.appendChild(buttons);
        })
    }
    else{
        human.textContent=`👤: ${P1}`;
        computer.textContent=`🤖: ${P2}`;
    }
}
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
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
const human = document.querySelector('.human');
const computer = document.querySelector('.comp');
const buttons = document.querySelector('.buttons');
const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');
const body = document.querySelector('body');

rock_btn.addEventListener('click', () => playgame('rock'));
paper_btn.addEventListener('click', () => playgame('paper'));
scissors_btn.addEventListener('click', () => playgame('scissors'));

const div=document.querySelector('#result');
const again = document.createElement('button');
again.textContent='Play Again';
// body.appendChild(again);
// body.appendChild(div);



