let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let cnt = 0;

let turnO = true// playerX, playerY

let WinPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
            box.style.color = "#b0413e";
        }
        else{
            box.innerText = "X";
            turnO = true;
            box.style.color = "blue";
        }
        cnt++;
        box.disabled = true;

        // Checking winner for clicking each button
        checkDraw();
        checkWinner();
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is: ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkDraw = () => {
    if(cnt  === 9){
        msg.innerText = "It's a Draw";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}

const checkWinner= () => {
    for(let pattern of WinPatterns){
        //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos1Val === pos3Val){
            showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () => {
    cnt = 0;
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);