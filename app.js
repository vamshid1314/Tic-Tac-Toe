let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#Rst-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");

let turnO = true; 
let count=0;

let winningPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true; 
    count=0;
    boxesEnable();
    msgContainer.classList.add("hide");
};

boxesDisable = () => {
    for(box of boxes){
        box.disabled = true;
    }
};

boxesEnable = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{

        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true; 
        }

        box.disabled = "true";

        checkWinner();

        if(count === 9){
          noWinner();  
        }
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    count=0;
};

const noWinner = () => {
    msg.innerText = "Oops! moves are completed";
    msgContainer.classList.remove("hide");
    count=0;
};

const checkWinner = () => {
    count++;

    for(pattern of winningPattern){
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                let winner = pos1;
                showWinner(winner);
                boxesDisable();
                if(count === 9){
                    noWinner();  
                  }
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);
btn.addEventListener("click", resetGame);