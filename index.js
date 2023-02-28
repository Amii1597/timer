var start= document.getElementById('start');
var stop= document.getElementById('stop');
var reset= document.getElementById('reset');

var  h = document.getElementById('hour');
var  m = document.getElementById('minute');
var  s = document.getElementById('sec');

var startTimer=null;
var time=null;


function timer(){
if(h.value ==0 && m.value ==0 && s.value ==0){
    h.value=0;
    m.value=0;
    s.value=0;
    document.getElementById('audio').play();
    document.getElementById("demo").textContent="time's up"

}
else {if(s.value !=0){
    s.value--;
    document.getElementById("demo").textContent=""
 
}
else if(m.value !=0 && s.value==0 ){
    s.value=59;
    m.value--;
}else if(h.value !=0 && m.value ==0){
    m.value=60;
    h.value--;
}
return;}

}

// function timeout(){

//     alert("time out")
//     setTimeout(startTimer);
// }


function stopTimer(){
    clearInterval(startTimer);
}



// start

start.addEventListener('click',function(){
   function startInterval(){
      startTimer = setInterval(function(){ 
        timer();
     
    }, 1000 );
    
}
startInterval()

})

// stop

stop.addEventListener('click',function(){
    clearInterval(startTimer);
})

// reset
reset.addEventListener('click',function(){
    h.value=0;
    m.value=0;
    s.value=0;
    document.getElementById("demo").textContent=""
    stopTimer()
})