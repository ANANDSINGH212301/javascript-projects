let curser = document.querySelector(".curser")
let curserblur = document.querySelector(".curserblur")
let navele = document.querySelectorAll(".nav h4")
let choice = document.querySelectorAll(".choice")
document.addEventListener("mousemove",function(dets){
    curser.style.left = dets.x+"px"
    curser.style.top = dets.y+"px"
    curserblur.style.left = dets.x-250+"px"
    curserblur.style.top = dets.y-250 +"px"
})

navele.forEach(function(element){
    element.addEventListener("mouseenter",function(){
         curser.style.scale = 4,
         curser.style.border = "1px solid white",
         curser.style.backgroundColor = "transparent"

    })
    element.addEventListener("mouseleave",function(){
         curser.style.scale = 1,
         curser.style.border = "none",
         curser.style.backgroundColor = "#a9dd00"
    })
})
choice.forEach(function(element){
    element.addEventListener("mouseenter",function(){
         curser.style.scale = 4,
         curser.style.border = "1px solid white",
         curser.style.backgroundColor = "transparent"

    })
    element.addEventListener("mouseleave",function(){
         curser.style.scale = 1,
         curser.style.border = "none",
         curser.style.backgroundColor = "#a9dd00"
    })
})


gsap.to(".nav",{
    backgroundColor:"black",
    height:"115px",
    duration: 0.5,
    scrollTrigger:{
        trigger:".nav",
        scroll:"body",
        start:"top -10%",
        end:"top -10%",
        scrub:1
    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroll:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:1,
    }

})

gsap.from(".aboutus img , .mid",{
     y:50,
     opacity:0,
     duration:1,
     scrollTrigger:{
         trigger:".aboutus img , .mid",
         scroll:"body",
         start:"top 80%",
         end:"top 80%",
         scrub:2
    }
})
gsap.from(".card",{
    y:50,
    scale:0.8,
    opacity:0,
    duration:1.5,
    stagger:0.7,
    scrollTrigger:{
        Trigger:".aboutus",
        scroller:"body",
        start:"190% 70%",
        end:"210% 65%",
        scrub:2
    }
})
gsap.from(".page3 .colon1",{
    x:-50,
    y:-50,
    scrollTrigger:{
        trigger:".page3 .colon1",
        scroller:"body",
        scrub:1,
        start:"200px 70%",
        end:"200px 60%"
    }
})
gsap.from(".page3 .colon2",{
    x:50,
    y:50,
    scrollTrigger:{
        trigger:".page3 .colon2",
        scroller:"body",
        scrub:1,
        start:"-200px 70%",
        end:"-200px 60%",
    }
})
gsap.from(".allchoice h1",{
     y:50,
    duration:1,
    scrollTrigger:{
        trigger:".allchoice h1",
        scroller:"body",
        start:"-80vh 80%",
        end:"-80vh 75%",
        scrub:1,
    }
})

function locomotion() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotion();