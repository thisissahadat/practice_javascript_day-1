//2 types of variable scope 1. local 2.global

// function myfunction(){
// var name='shahadat hossain'; //it's a local variable 
// }
// console.log(name);   //it won't run outside of function


function myfunction(){
var name='Shahadat Hossain'; //it's a local variable 
console.log(name);
}
//console.log(name); local variablr can't be used outside of function
myfunction();  //it will run inside the function
    

var name2='Mr. Hridoy';  // it's a global variable and it can be used inside and outside
function myfunction2(){
    console.log(name2);
    }
    myfunction2();