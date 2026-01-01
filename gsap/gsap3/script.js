var initialPath = `M 10 100 Q 445 100 850 100`
var finalPath = `M 10 100 Q 445 100 850 100`
var string = document.querySelector(".string")


string.addEventListener("mousemove",(dets)=>{
     initialPath = `M 10 100 Q ${dets.x} ${dets.y} 850 100`
     gsap.to("svg path",{
        attr:{
            d:initialPath
        },
        duration:0.3,
        easing:"power3.out"
     })
})
string.addEventListener("mouseleave",(dets)=>{
     path = `M 10 100 Q 445 100 850 100`
     gsap.to("svg path",{
        attr:{
            d:path
        },
        ease:"elastic.out(1,0.2)",
        duration:0.5
     })
})
