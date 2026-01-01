const baseurl =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdown = document.querySelectorAll(".flex select");
let exbutn = document.querySelector("form button");
let fromcur = document.querySelector("#from");
let tocur = document.querySelector("#to");
let msg = document.querySelector(".msg");

for (let select of dropdown) {
    for (currcode in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        
        if (select.id === "from" && currcode === "USD") {
            newoption.selected = "selected";
        } else if (select.id === "to" && currcode === "INR") {
            newoption.selected = "selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    });
}

const updateflag = (element) => {
    let currcode = element.value;
    let cuntcode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${cuntcode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

exbutn.addEventListener("click", (evt) => {
    evt.preventDefault();
    exchangerate();
});
const exchangerate = async () => {
    let amt = document.querySelector("form input");
    let amtval = amt.value;
    if(amtval== "" || amtval<1){
        amtval = 1;
        amt.value = "1";
    }
    
    let url = `${baseurl}/${fromcur.value.toLowerCase()}/${tocur.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[tocur.value.toLowerCase()];
    let final = amtval * rate;
    
    msg.innerText = `${amtval} ${fromcur.value} = ${final} ${tocur.value}`;
};

window.addEventListener("load",exchangerate());
