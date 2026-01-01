var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor")
var imgdiv = document.querySelector(".imgdiv")

main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x - 7,
        y: dets.y - 7
    })
})

imgdiv.addEventListener("mouseenter", ()=>{
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 2.6
    })
})
imgdiv.addEventListener("mouseleave", ()=>{
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale:1
    })
})