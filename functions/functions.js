
//functions :- 
// function grumpus(){
//   console.log("hello");
//   console.log("hii");
//   console.log("there");
// }
// grumpus();
// for(let i=0; i<=10; i++){
//   grumpus();
// }

//Dice roll function and arguments
// function rollDie(){
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }
// function throwDice(times){
//   for(let i=0; i < times; i++){
//     rollDie();
//   }
// } 

//functions with arguments
// function greet(name){
//   console.log(`Hi, ${name}!`);
// }

//functions with multiple arguments
// function square(num){
//   console.log(num*num);
// }
// function sum(x,y){
//   console.log(x + y);
// }
// function divide(a, b){
//   console.log(a / b);
// }
// function module(p ,q){
//   console.log(p % q);
// }

//return statements
// function add(x, y){
//   return x + y; 
// }
// function square(x){
//   console.log('All Done!');
//   return x * x;
//   }
// function isPurple(color){
//   if(color.toLowerCase() === 'purple'){
//     return true;
//   }else{
//     return false;
//   }
// }   //this is not way to written the function
// function isPurple(color){
//    if(color.toLowerCase() === 'purple'){
//    return true;
//    }
//    return false;
// }       //we can return true/false directly
// function isPurple(color){
//   return color.toLowerCase() === 'purple';
// }
// // let arr= ['blue','pink','green','red'];
// function containsPurple(arr){
//   for(let color of arr){
//   if(color === 'pink' || color === 'blue'){
//    return true;
//   }
//   }
//   return false;
// }


// // practice task
// function isValidPassword(password,username) {
//   if(password.length <8){
//     return false;
//   }
//   if(password.indexOf(' ') !== -1){
//     return false;
//   }
//   if(password.indexOf(username) !== -1){
//     return false;
//   }
//   return true;
// }
// // we can write this type also
// function isValidPassword (password,username){
//   if(
//     password.length < 8 ||
//      password.indexOf(' ') !== -1 ||
//      password.indexOf(username) !== -1
//   ){
//     return false;
//   }
//   return true;
// }
// // this the another way  
// function isValidPassword(password,username){
//   const isShort=password.length < 8;
//   const isSpace=password.indexOf(' ') !== -1;
//   const isSimilar=password.indexOf(username) !== -1;
//   if(isShort || isSpace || isSimilar) return false;
//   return true;
// }

// function isValidPassword(password,username){
//   const isShort=password.length < 8;
//   const isSpace=password.indexOf(' ') !== -1;
//   const isSimilar=password.indexOf(username) !== -1;
//   if(!isShort && !isSpace && !isSimilar) return true;
//   return false;
// }
// // practice to array
// function findArray(arr)
// {
//  let total=0;
//  for(let num of arr){
//   total += num;
//  }
// let res = total / arr.length;
// return res;
// }
// practice all alphabet in one string
// function isPangram(x){
//   let lowerCase = x.toLowerCase();
//   for(let char of 'abcdefghijklmnopqrsuvwxyz'){
//     if(lowerCase.indexOf(char) === -1){
//        return false;
//     }
//   }
//   return true;
// }
// 2nd way use of includes
// function isPangram(x){
//   let lowerCase = x.toLowerCase();
//   for(let char of 'abcdefghijklmnopqrsuvwxyz'){
//     if(!lowerCase.includes(char)){
//        return false;
//     }
//   }
//   return true;
// }

//more practice  here is the example of random number with random word .
//type 1
// function getCard(){
//   const values = [
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A'
// ];
// const valIdx = Math.floor(Math.random() * values.length);    //Math.random() used with Math.floor() can be used to return random integers.
// const value = values[valIdx];                                //floor() The Math. floor() static method always rounds down and returns the largest integer less than or equal to a given number.

// const suits = ['clubs','spades','hearts','diamonds']
// const valSuits = Math.floor(Math.random() * suits.length);
// const suit = suits[valSuits];
// return { value: value , suit: suit };
// }
//type 2
// function pick(arr){
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// }
// function getCard(){
//   const values = [
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A'
// ];
//   const value =pick(values);                                             //Math.random() used with Math.floor() can be used to return random integers.
//   const suits = ['clubs','spades','hearts','diamonds'];                                                        //floor() The Math. floor() static method always rounds down and returns the largest integer less than or equal to a given number.
// const suit = pick(suits); 
// return { value: value , suit: suit };
// }
//type 3
// function getCard(){
//   const values = [
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A'
// ];                                             //Math.random() used with Math.floor() can be used to return random integers.
//   const suits = ['clubs','spades','hearts','diamonds'];                                                        //floor() The Math. floor() static method always rounds down and returns the largest integer less than or equal to a given number.
// return { value: pick(values) , suit: pick(suits) };
// }