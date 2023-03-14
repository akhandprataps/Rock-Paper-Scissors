const playertext=document.querySelector("#player");
const computertext=document.querySelector("#computer");
const resulttext=document.querySelector("#result");
const choicebtns=document.querySelectorAll(".choicebtn");
let player;
let computer;
let result;
choicebtns.forEach(button =>button.addEventListener("click",()=>{
    player=button.textContent
    computerTurn()
    playertext.textContent=`player:${player}`;
    computertext.textContent=`computer:${computer}`;
    resulttext.textContent=checkwiner();
    
}));
function computerTurn(){
    const randNum=Math.floor(Math.random()* 3) + 1;
    switch(randNum){
        case 1:
            computer="Rock";
            break;
        case 2:
            computer="Paper";
            break;
        case 3:
            computer="Scissor";
            break;
    }

}
function checkwiner(){
    if(player==computer){
        return "Draw!";
    }
    else if(computer=="Rock"){
        return (player=="Paper")? "You win!": "You lose!";
    }
    else if(computer=="Paper"){
        return (player=="Scissor")? "You win!": "You lose!";
    }
    else if(computer=="Scissor"){
        return (player=="Rock")? "You win!": "You lose!";
    }
}