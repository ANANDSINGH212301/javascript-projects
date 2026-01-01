function bubble() {
    let clutter = "";
    for (let i = 1; i <= 120; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble" id="${i}">${rn}</div>`
    }
    document.querySelector(".bottom").innerHTML = clutter;
}
let score = 0;
function scoreup(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
let time = 60;
function runtimer(){
    let timer = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#time").textContent = time;
        }else{
            clearInterval(timer)
            document.querySelector(".bottom").innerHTML = "<h1>Game over</h1>";
        }
    },1000)
}
let hitnum = 0;
function gethit(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitnum;
}
function playgame(){
        document.querySelectorAll(".bubble").forEach(function (ele){
        ele.addEventListener("click",function(bub){
            let target = Number(bub.target.innerHTML)
            console.log(hitnum)
            console.log(target);
            scoreup()
            bubble()
            gethit()
            playgame()
        })
     })
}
gethit();
runtimer();
bubble();
playgame();