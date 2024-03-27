//let boxes=document.querySelectorAll(".box");
//let resetbtn=document.querySelector(".reset");
//let newgame=document.querySelector("#newbtn");
//let msgcon=document.querySelector(".msg-container");
//let msg=document.querySelector("#msg");
//let turnO=true;//player1 true= o false=x
//
//const winPatterns=[
//[0,1,2],
//[0,3,6],
//[0,4,8],
//[1,4,7],
//[2,5,8],
//[2,4,6],
//[3,4,5],
//[6,7,8],
//];
//
//const resetGame=()=>{
//turnO=true;
//enableBoxes();
//msgcon.classList.add("hide");
//};
//
//boxes.forEach((box)=>{
//box.addEventListener("click",()=>{
//console.log("box was clicked");
//if(turnO){
//box.innerText="O";
//turnO=false;
//}else{
//box.innerText="X";
//turnO=true;
//}
//box.disabled=true;
//checkWinner();
//});
//
//});
//
//const disableBoxes=()=>{
//for(let box of boxes){
//box.disabled=true;
//}
//};
//const enableBoxes=()=>{
//for(let box in boxes){
//box.disabled=false;
//box.innerText="";
//}
//};
//
//
//const showWinner= (winner)=>{
//msg.innerText='congratulations, Winner is ${winner}';
//msgcon.classList.remove("hide");
//};
//
//
//const checkWinner = () => {
//for(let pattern of winPatterns){
//let val1= boxes[pattern[0]].innerText;
//let val2=boxes[pattern[1]].innerText;
//let val3=boxes[pattern[2]].innerText;
//
//if(val1 !="" && val2 !="" && val3 !=""){
//if(val1 === val2 && val2 === val3){
//console.log("winner",val1);
//showWinner(val1);
//
//}
//
//}
//
//}
//};
//
//newgame.addEventListener("click",resetGame);
//resetbtn.addEventListener("click",resetGame);
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);