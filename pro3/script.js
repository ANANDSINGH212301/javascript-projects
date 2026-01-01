function  load(){
    let tl = gsap.timeline()


tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
})
tl.from(".yellow2", {
    top: "100%",
    delay: 0.5,
    duration: 0.5,
},"anim")
tl.to(".onload h1", {
    delay:0.5,
    duration:0.4,
    color:"black",
},"anim")
tl.to(".onload",{
   display:"none"
})
}
load();

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
//     scroll: true 
// });