function navanim() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to(".bottom", {
            height: "7.5vw",
            duration: 0.5
        })
        tl.to(".nav-part-2 h5", {
            display: "block",
            duration: 0.1
        })
        tl.from(".nav-part-2 h5 span", {
            color:"darkgray",
            stagger:{
                amount : 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part-2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to(".bottom", {
            height: 0,
            duration: 0.2
        })
    })
}
navanim();

function hoveron(){
    var relem = document.querySelectorAll(".right-elem")

relem.forEach(element => {
    element.addEventListener("mouseenter", () => {
        gsap.to(element.childNodes[3],{
            opacity : 1,
            scale : 1
        })
        console.log(element.getClientRects().x)
    })
    element.addEventListener("mouseleave", () => {
        gsap.to(element.childNodes[3],{
            opacity : 0,
            scale:0
        })
    })
    element.addEventListener("mousemove", (dets) => {
       gsap.to(element.childNodes[3],{
        x:dets.x - element.getBoundingClientRect().x-50,
        y:dets.y - element.getBoundingClientRect().y-150
       })
    })
});
}
hoveron()

