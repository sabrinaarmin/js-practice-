// jQuery
//ex 8
var number1 = 5;
var number2 = 3;
var result = number1 + number2;
function aop(){
  document.getElementById('re').innerHTML=result;
}
//ex 7
function varOutput(){
   var varoutput =('Welcome');
   document.getElementById('op').innerHTML=varoutput;
}
//ex 6
function cName(){
  document.getElementsByClassName('h4')[2].innerHTML=("Hello World!");
}
//ex 5
function findHr(){
  var data= document.getElementsByTagName('hr');
  alert(data.length);
}
//ex 4
function textShow(){
  document.getElementById("text").style.display="block";
}
function textHide(){
  document.getElementById("text").style.display="none";
}
//ex 3
function changeColor(){
  document.getElementById("cc").style.color="red"
}
//ex 2
function bulbOn(){
  document.getElementById("img").src = "image/pic_bulbon.gif";
}
function bulbOff(){
  document.getElementById("img").src = "image/pic_bulboff.gif";
}

//ex 1
function showDate(){
  document.getElementById("sd").innerHTML = Date();
}







// JavaScript
