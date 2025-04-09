// tasks 
// 1. sabse pahle ye pta kro ki mouse rectangle par aaya and move hua ya nahi 
// 2. ab ye calculate kro ki hum center se left par hai ya center se right par hai 
// 3. ab ye calculate kro ki hum center se kitna left par hai, jitna left par hai utna intensity se coler red lagao 
// 3rd ka solution hai using gsap map range we will do this 

// 1✅
var rect= document.querySelector("#center")
rect.addEventListener("mousemove",function(details){
    var rectanglelocation=rect.getBoundingClientRect();
    // details.clintX gives the location of the mouse at x axis
    var insiderectval=details.clientX-rectanglelocation.left; // this will give how much we inside the rectangle
    // 2✅
    if(insiderectval < rectanglelocation.width/2)
    {
        var redcolor=gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4
        });
    }
    else{
        var bluecolor= gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`
        });
    }
})
// ab bana rhe hai jab mouse leave kre to bg color white ho jaaye
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
        delay:.2,
    })
})
// mapRange(inMin,inMax,outMin,outMax,valuetoMap)


 