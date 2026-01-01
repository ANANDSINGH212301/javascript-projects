var slide  = document.querySelector(".fill")
var cross = document.querySelector(".fill i")
var menu = document.querySelector(".nav i")


var tl = gsap.timeline()

tl.to(".fill",{
    right: "0",
    stagger: 0.3
})
tl.from(".fill h3",{
    x:80,
    stagger: 0.3,
    opacity:0,
    duration:0.6
})
tl.from(".fill i",{
    opacity:0,
    duration:0.3
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})
cross.addEventListener("click",()=>{
    tl.reverse()
})