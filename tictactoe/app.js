let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector(".newgamebtn");
let turno = true;
let count=0;
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

msgcontainer.classList.add("hide");
let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const reset = ()=> {
  for (let each of boxes) {
    each.innerText = "";
    each.disabled = false;
  }
  msgcontainer.classList.add("hide");
  count=0;
}
const disablebox=()=>{
  for(let each of boxes){
    each.disabled=true;
  }
};

const gameover= () => {
   msg.innerText = "Match is a tie";
   msgcontainer.classList.remove("hide");
};
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("box clicked");
    if(turno){
      box.innerHTML="O";
      turno=false;
    }else{
      box.innerHTML="X";
      turno=true;
    }
    box.disabled = true;
    count++;

    let iswinner = checkwinner();
    if(count==9 && !iswinner){
      gameover();
    }
  });
});

const checkwinner= ()=>{
      for(let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
          if(pos1 == pos2 && pos2 == pos3){
               showwinner(pos1);
              return true;
          }
        }
      
      }
};

const showwinner = (pos1) =>{
    msg.innerText = `Winner is ${pos1}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};

resetbtn.addEventListener("click",reset);
newgamebtn.addEventListener("click",reset);
