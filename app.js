let gameseq = [];
let userseq = [];

let btns = ["btn1", "btn2", "btn3", "btn4"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random()*4);
    let randomcolor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomcolor}`)
    gameseq.push(randomcolor);
    console.log(gameseq);
    btnFlash(randombtn);
};

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
};

function btnPress(){
    let currbtn = this;
    btnFlash(currbtn);
    let userColor = currbtn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
};

function checkAns(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerHTML = `Game Over ! Your score was <b> ${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor = "white"
        },250);
        reset();
    }
};

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
};