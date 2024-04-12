let boxes= document.querySelectorAll(".box");
let rstBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcont= document.querySelector(".msg-container");
let mseg = document.querySelector("#msg");
let turnO = true;
const winp = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
    const resetGame = () => {
        turnO = true;
        enableBox();
        msgcont.classList.add("hide");
}   

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWin();
    });
});
    const disableBox = () => {
        for (let box of boxes){
            box.disabled=true;
        }
    }
    const enableBox = () => {
        for (let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
    const showWin = (win) => {
        mseg.innerText= "Hurrah!! You Won";
        msgcont.classList.remove("hide");
        disableBox();
    }
    const checkWin= () =>{
        for(let pattern of winp) {
            let pos1val = boxes[pattern[0]].innerText
            let pos2val = boxes[pattern[1]].innerText
            let pos3val = boxes[pattern[2]].innerText   

            if (pos1val !=""&& pos2val !="" && pos3val !=""){
                if(pos1val === pos2val && pos2val === pos3val){
                    showWin(pos1val);
                }
            }
        }
    };
   
    newbtn.addEventListener("click",resetGame);
    rstBtn.addEventListener("click",resetGame);