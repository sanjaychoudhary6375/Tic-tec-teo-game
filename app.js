let boxs = document.querySelectorAll(".box");
let resultBtn = document.querySelector(".result");
let msgContainer = document.querySelector(".magContainer");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".newBtn");
let tureO = true;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (tureO) {
            box.innerHTML = "O";
            tureO = false;
        } else {
            box.innerHTML = "X";
            tureO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const  disabledBoxs = () => {
    for (const box of boxs) {
        box.disabled = true;
    }
} 

const enbleBoxs = () =>{
    for (const box of boxs) {
        box.disabled = false;
    boxs.innerText = "";

    }
}

const resetBtn = () => {
    tureO = true;
    enbleBoxs();
    msgContainer.classList.add("magContainer");
    boxs.forEach((box) => {
        box.innerText = "";
    });
}

const showWinner = (winner) => {
    msg.innerHTML = ` you are winner! ${winner}`;
    msg.style.color = 'white';
    msg.style.textAlign = 'center';
    msg.style.textTransform = 'capitalize';
    msg.style.fontSize = '20px';
    msgContainer.classList.remove("magContainer");
    disabledBoxs();
}

const checkWinner = () => {
    for (const petan of winPattern) {
        let new1Val = boxs[petan[0]].innerText;
        let new2Val = boxs[petan[1]].innerText;
        let new3Val = boxs[petan[2]].innerText;
        if (new1Val != "" && new2Val != "" && new3Val != "") {
            if (new1Val === new2Val && new2Val === new3Val) {
                console.log("winner");

                showWinner(new1Val);
            } else {
                new1Val != new2Val && new2Val != new3Val
            }
        }
    }
}

resultBtn.addEventListener("click",resetBtn);
newBtn.addEventListener("click",resetBtn);