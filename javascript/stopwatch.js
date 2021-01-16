let h=0;
let m=0;
let s=0;
let ms=0;
let st;
function start(){
    if(!st){
        st=setInterval(timer,10)
    }
    
}
function timer(){
    ms++;
    let display=document.getElementById("timer");
    display.innerHTML=(h < 10?"0" +h:h)+":"+(m < 10?"0" +m:m)+":"+(s < 10?"0" +s:s)+":"+(ms < 10?"0" +ms:ms);
    
    if(ms == 99)
    {
        ms=0;
        s++;
    }
    if(s == 59){
        s=0;
        m++;
    }
    if(m == 59){
        m=0;
        h++;
    }
}

function stop()
{
    clearInterval(st);
    st=false;
}

function reset(){
    clearInterval(st);
    st=false;
     h=0;
     m=0;
     s=0;
     ms=0;
     document.getElementById("timer").innerHTML=(h < 10?"0" +h:h)+":"+(m < 10?"0" +m:m)+":"+(s < 10?"0" +s:s)+":"+(ms < 10?"0" +ms:ms);
}

function laps(){
    if(st){
        let li=document.createElement("li");
        li.setAttribute("class","lap")
        li.innerHTML=(h < 10?"0" +h:h)+":"+(m < 10?"0" +m:m)+":"+(s < 10?"0" +s:s)+":"+(ms < 10?"0" +ms:ms);
        let ul=document.getElementById("laps");
       ul.appendChild(li);
    }
    
}

function clears(){

    document.getElementById("lapbox").innerHTML="";
}