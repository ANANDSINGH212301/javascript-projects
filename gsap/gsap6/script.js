
function splitText(){

var h1 = document.querySelector(".main h1");
var h1Text = document.querySelector(".main h1").textContent;


var splitedText = h1Text.split("");
var halfCount = h1Text.length / 2;

var clutter = "";


splitedText.forEach((elem, idx) => {
    if (idx < halfCount) {
        clutter += `<span class="a">${elem}</span>`
    }
    else {
        clutter += `<span class="b">${elem}</span>`
    }
})
h1.innerHTML = clutter
}
splitText()


gsap.from(".a",{
    y:50,
    duration:0.8,
    stagger:0.1,
    opacity:0
})
gsap.from(".b",{
    y:50,
    duration:0.8,
    stagger:-0.1,
    opacity:0
})


