'use strict';

let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let number3 = document.getElementById('number3')

let counter1 =0;
let counter2 =0;
let counter3 =0;

setInterval(()=>{
    if(counter1==65){
        clearInterval;
    }
    else{
        counter1+=1;
        number1.innerHTML=`${counter1}%`
    }
},26)

setInterval(()=>{
    if(counter2==80){
        clearInterval;
    }
    else{
        counter2+=1;
        number2.innerHTML=`${counter2}%`
    }
},25)

setInterval(()=>{
    if(counter3==70){
        clearInterval;
    }
    else{
        counter3+=1;
        number3.innerHTML=`${counter3}%`
    }
},24)

