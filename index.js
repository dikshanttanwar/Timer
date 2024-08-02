let time = document.querySelector("#time")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")
let sec = 0;
let min = 0;
let hours = 0;

function startTime(){
    sec++;
    if(sec==60){
        sec = 0;
        min++;
        if(min==60){
            min = 0;
            hours++;
        }
    }
    let hr = hours<10 ? "0" + hours : hours;
    let mn = min<10 ? "0" + min : min;
    let sc = sec<10 ? "0" + sec : sec;
    time.innerHTML =  hr + " : " + mn + " : " + sc;
    console.log(hours, min,sec)
}
let timer;

start.addEventListener("click",()=>{
    timer = setInterval(startTime, 1000);
    start.disabled = true;
})

stop.addEventListener("click",()=>{
    clearInterval(timer)
    start.disabled = false;
})

reset.addEventListener("click",()=>{
    clearInterval(timer)
    time.innerHTML =  "00 : 00 : 00";
    start.disabled = false;
})
