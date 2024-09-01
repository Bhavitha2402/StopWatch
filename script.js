 let restart=document.querySelector(".restart");
 let hed0=document.querySelector(".hed0");
 let stop=document.querySelector(".stop");
 let play=document.querySelector(".play");

 function restart1(){
    clearInterval(timer);
     hed0.innerText="00:00:00";
      h=0,m=0,s=0;
    [seconds,minutes,hours]=[0,0,0];
 }

 let [seconds,minutes,hours]=[0,0,0];
let timer=null;

 function play1(){
    seconds++;
    if(seconds===60){
         seconds=0;
         minutes++;
         if(minutes==60){
            minutes=0;
            hours++;
         }   
    }

let h=hours<10? "0"+hours:hours;
let m=minutes<10? "0"+minutes:minutes;
let s=seconds<10? "0"+seconds:seconds;

    hed0.innerHTML= h+":"+m+":"+s;
 }

 function Start(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(play1,1000);
 }
 
 function stop1(){
    clearInterval(timer);
 }