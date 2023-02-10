//advance functions
//function scope
// function lol(){
//   let person = 'Tom';
//   const age = 25;
//   var color = 'teal';
//   console.log(age);
// }
// lol();
// var bird = 'owl';
// function birdWatch(){
//   var bird = 'peacock';
//   console.log(bird);
// }
// birdWatch();
// console.log(bird);

//Block Scope :- PI & circ are scoped to the block
//Only Var variable can access inside function and outside , both side.
// if(true){
//   var animal = 'cow';
//   console.log(animal);
// }
// console.log(animal);
// let animals = ['cow','dog','cat']; 
// for(var i=0; i< animals.length; i++){  //it's work
//   console.log(i, animals[i]);
// }
// console.log(i); 

//call array from variables
// function doubleArr(arr){
//     const result = [];
//     let double;
//     for(let num of arr){
//        double = num *2;
//       result.push(double);
//       // console.log(double)
//     }
//     console.log(double);
//     return result;
//   }

//Laxical scope
// function outer(){
//   let movie = 'bahubali';
//   function inner(){
//     let movie = 'rrr';
//     function extraInner(){
//       let movie = 'abc';
//       console.log(movie.toUpperCase());
//     }
//     extraInner();
//   }
//   inner();
//   }


//Function expressions  :- In javascript function are objects
// function add(x, y){     // normal declare function
//   return x + y;
// }

// const sum = function (x, y){       //function assign to variable
//   return x + y;
// }

// const product = function multiply(x, y){   //here if i call to this function in product so it's fine and if i call multiply to getting error.
//   return x * y;
// }


//Higher order functions
// const add = function (x, y){
//   return x + y;
// }
// const subtract = function (x, y){
//   return x - y;
// }
// const multiply = function (x, y){
//   return x * y;
// }
// const divide = function (x , y){
//   return x / y;
// }
// const operations = [add , subtract , multiply , divide];

// for(let func of operations){
//   let result = func(30,5);
//   // console.log(result);
// }
// const thing = {
//   doSomething: add
// }


//Functions as argument  :- we can pass any other function as arguments like:-
// function callThreeTimes(f){
//   f();
//   f();
//   f();
// }
// function cry(){
//   console.log("I'm happy!");
// }
// function rage(){
//   console.log("here!!");
// }
// // callThreeTimes(rage);
// //instead of manually call to method we can call in loop like that:-
// function repeatNTimes(action, num){
//   for (let i=0; i<num; i++){
//     action();
//     // console.log(action.rage);
//   }
// }
// repeatNTimes(rage, 13);

// function pickOne(f1, f2){
//   let rand = Math.random();
//   console.log(rand);
//   if(rand < 0.5){
//     f1();
//   }else {
//     f2();
//   }
// }


//function return function  :- here we return function there is no name of return function so we have assign function in one variable then it's call 
// function multiplyBy(num){
//   return function(x){
//     return x * num;
//   }
// }

// const triple = multiplyBy(3);
//another example to check number is between or not
// function differenceFunc(min, max){
//   return function(val){
//    return val >= min && val <= max;
//   }
// }
// const betweenRange = differenceFunc(18,100);


//callback functions :- the callback function is a function passed into another function as an argument , which is then invoked inside the outer function. 
// function callTwis(func){
//   func();
//   func();
// }
// function laugh(){
//   console.log("hii");
// }
// callTwis(laugh);
//function call as argument :- ex:-1
// function grum(){
//   alert("hello");
// }
// setTimeout(grum,5000);
//Ex:- 2 type
// setTimeout(function () {
//   alert("WELCOME!");
// },5000);
//here i vreated button and click for alert
// const btn = document.querySelector('button');
// btn.addEventListener('click',function(){  //here i use anonymous function
//   alert("there..!")
// });

//Hoisting :- something i need to cover that you shouldn't stress about it confuses you.

// console.log(animal);
// var animal = 'data';

// how();
// function how(){
//   console.log("hello");   //function it's work to before call.
// }
//but if i assign function to variable so it's not work.even var also not working.
// hoot();
// var hoot = function(){
//   console.log("hii, i'm there");   //here i'm getting error
// }
//if we call within console so it's work fine but getting undefined data like
// console.log(hoot);
// var hoot = function(){
//   console.log("hii,i'm here");
// }

