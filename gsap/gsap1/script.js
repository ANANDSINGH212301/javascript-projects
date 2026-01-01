var tl = gsap.timeline()


tl.from(".nav h1",{
    y:30,
    opacity:0,
    duration:1.3,
    delay:0.5,
})
tl.from(".nav h2",{
    y:30,
    opacity:0,
    duration:0.7,
    stagger:0.2
})




gsap.from(".mid h1",{
    y:30,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:".mid h1",
        scroller:"body",
        markers:true,
        start:"top 65%",
        end:"top 60%",
        scrub:2
    }
})
