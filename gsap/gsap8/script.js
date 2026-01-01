function page1anim() {
    
var tl = gsap.timeline()


tl.from("nav h1,.part2 h4 , .part2 button",{
    y:-40,
    opacity:0,
    duration:0.8,
    delay:0.3,
    stagger:0.15
})

tl.from(".left h1",{
    opacity:0,
    x:-100,
    duration:0.3
})
tl.from(".left p",{
    opacity:0,
    x:-80,
    duration:0.2
})
tl.from(".left button",{
    opacity:0,
    duration:0.1
})
tl.from(".right img",{
    opacity:0,
    duration:0.2,
    x:200
},"-=0.3")
tl.from(".coustom img",{
    opacity:0,
    duration:0.5,
    stagger:0.15,
    y:20
})

}
page1anim()

function page2anim() {
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            start: "top 50%",
            end:"top 0%",
            scrub:2,
        }
    })
    tl2.from(".services",{
        x:-100,
        opacity:0,
        duration:0.4
    })
    tl2.from("#elem1",{
        x:-200,
        opacity:0,
        duration:0.4
    },"anim1")
    tl2.from("#elem2",{
        x:200,
        opacity:0,
        duration:0.4
    },"anim1")
    tl2.from("#elem3",{
        x:-200,
        opacity:0,
        duration:0.4
    },"anim2")
    tl2.from("#elem4",{
        x:200,
        opacity:0,
        duration:0.4
    },"anim2")
}
page2anim()

function pages3anim() {
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start: "top 50%",
            end:"top 0%",
            scrub:2,
        }
    })
    tl3.from(".gray",{
       scale:0,
        duration:0.15,
    })
    tl3.from(".gray div h1",{
        x:-100,
        opacity:0,
        duration:0.4
    })
    tl3.from(".gray div p",{
        y:-50,
        opacity:0,
        duration:0.4
    },"anim3")
    tl3.from(".gray div button",{
        opacity:0,
        duration:0.3
    },"-=0.3")
    tl3.from(".gray img",{
        opacity:0,
        duration:0.3,
        x:100
    },"anim3")
    tl3.from(".services2",{
        x:-100,
        opacity:0,
        duration:0.4
    })
    tl3.from(".black",{
        scale:2.5,
        opacity:0,
        duration:0.4
    })
}
pages3anim()


