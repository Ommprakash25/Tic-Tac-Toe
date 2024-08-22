let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let h1 = document.querySelector("h1");

let turn0 = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turn0 = true;
    count = 0;
    enableBoxes();
    resetBtn.innerText = "Reset game";
    h1.innerText = "Tic Tac Toe";
    resetBtn.style.visibility = "hidden";
    boxes.forEach((box)=>{
        box.style.backgroundColor = "#3C3D37";
    })
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        box.disabled = true;
        if(turn0){
            box.innerText = 'O';
            box.style.color = "blue";
            turn0 = false;
            if(count!=0)
                h1.innerText = "Turn for X"
        }
        else{
            box.innerText = 'X';
            box.style.color = "red";
            turn0 = true;
            h1.innerText = "Turn for O"
        }
        checkWinner();
    })
    
});

const enableBoxes = () =>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disabledBoxes = () =>{
    for (const box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) =>{
    h1.innerText = `Congratulations, Winner is ${winner}`;
    disabledBoxes();
    resetBtn.innerText = "New game";
};

const checkWinner = () =>{
    for (const pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                boxes[pattern[0]].style.backgroundColor = "green";
                boxes[pattern[1]].style.backgroundColor = "green";
                boxes[pattern[2]].style.backgroundColor = "green";
                showWinner(pos1val);
                break;
            }
            else if(count===9)
                checkDraw();
        }
    }
    if(count!=0)
        resetBtn.style.visibility = "visible";
};

const checkDraw = () =>{
    h1.innerText = "Draw";
    resetBtn.innerText = "New game";
};

resetBtn.addEventListener("click",resetGame);

const dt = new Date();
document.querySelector('span').innerHTML = `${dt.getFullYear()}`