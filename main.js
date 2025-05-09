let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let newGameBtn=document.querySelector(".newGame")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector(".msg")
let count=0

let trunO=true;

let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(trunO)
        {
            box.innerText="O";
            trunO=false;
        } else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;
        checkWinner();
        count++;
        if(count==9)
        {
            draw();
        }
    })
})

const disabledBtns =() => {
    boxes.forEach((box)=>{
        box.disabled=true
    })
}

const enabledBtns =() => {
    boxes.forEach((box)=>{
        box.disabled=false
        box.innerText=""
    })
}

const showWinner =(winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disabledBtns();
}

const draw= () => {
    msg.innerText="Game is Draw"
    msgContainer.classList.remove("hide")
}

const checkWinner = () => {
    for(let patern of winPattern)
    {
        let pos1=boxes[patern[0]].innerText
        let pos2=boxes[patern[1]].innerText
        let pos3=boxes[patern[2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                showWinner(pos1);
            }
        }
    }
}

const resetGame= () =>{
    trunO=true;
    enabledBtns();
    msgContainer.classList.add("hide")
    count=0
}


newGameBtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)