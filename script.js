// Initial value


var hr=0;   
var min=0;
var sec=0;
var count=0;

//  this will decide timer is running or stoped,false= time is stoped,  true= time is running
var timer= false;

function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}

// to reset button 
function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    
    // 00 sting to show 00 when we presee reset th button
     
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}   



    function stopwatch(){
        if(timer==true){
            count=count+1;
            if(count==100){
                sec=sec+1;
                count=0;
            }
            if(sec==60){
                min=min+1;
                sec=0;
            }
            if(min==60){
                hr=hr+1;
                min=0;
                sec=0;
            }

            // to show double digit when the timer is running in singl digit till that should be in double digit will come
            var hrString=hr;
            var minString=min;
            var secString=sec;
            var countString=count;

            if(hr < 10){
                hrString = "0"+ hrString;
            }
            if(min < 10){
                minString = "0"+ minString;
            }
            if(sec < 10){
                secString = "0"+ secString;
            }
            if(count < 10){
                countString = "0"+ countString;
            }
             document.getElementById("hr").innerHTML=hrString;
            document.getElementById("min").innerHTML=minString;
            document.getElementById("sec").innerHTML=secString;
            document.getElementById("count").innerHTML=countString;
            
            setTimeout("stopwatch()",10);
        }
    }
    const body =document.querySelector("body"),
    modeToggle = document.querySelector(".dark-light")

    modeToggle.addEventListener("click", () =>{
        modeToggle.classList.toggle("active")
        body.classList.toggle("dark")

        if(!body.classList.contains("dark"))
        {
            localStorage.setItem("mode","light-mode")
        }
        else
        {
            localStorage.setItem("mode","dark-mode")
        }
    })

