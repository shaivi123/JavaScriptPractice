
//Loop
// for(let i=1; i<=10; i+=3){
//   console.log('Hello',i);
// }

// for(let num=1; num<=20; num++){
//   console.log(`${num}x{num}=${num*num}`);
// }

// const num = [23,54,67,32];
// for(let i=0; i<num.length; i++){
//   console.log(i,num[i]);
// }

//  const myStudent = [
//   {
//     firstName : 'shaivi',
//     grade : 87
//   },
//   {
//     firstName : 'shivani',
//     grade : 97
//   },
//   {
//     firstName : 'shivam',
//     grade : 72
//   },
//   {
//     firstName : 'taniya',
//     grade : 90
//   }
//  ];
//   for( let i=0; i<=myStudent.length; i++){
//    let student = myStudent[i];
//   //  console.log(student[0]);
//   console.log(`${student.firstName} scored ${student.grade}`)
//   }
  //  let total = 0;
  //  for(let i=0; i<myStudent.length; i++){
  //   let student =myStudent[i];
  //   total += student.grade;
  //  }
  //  console.log(total / myStudent.length);


// const word = 'stressed'
// let reWord = '';
// for(let i=word.length-1; i>=0; i--){
//   reWord += word[i];
//   // console.log(reWord);

// }
// console.log(reWord);

//Outer loop
// for(let i=1; i<=10; i++){
//   console.log('Outer loop: ',i);
//   for(let j=10; j>=0; j -=2){
//     console.log('   Inner loop: ',j);
//   }
//   }

// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2]
// ];

// let totalScore = 0;
// for(let i=0; i<gameBoard.length; i++){
//   let row =gameBoard[i];
//   console.log(row);
//   for(let j=0; j<row.length; j++) {
//     // totalScore += row[j];
//     console.log(row[j]);
//   }
// }



//while loop
// let j=0;
//   while(j <=5){
//     console.log(j);
//      j++;
//   }
// const target =Math.floor(Math.random()*10);
// let guess =Math.floor(Math.random()*10);
// while(guess !== target){
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess=Math.floor(Math.random()*10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`Congrats you win!!`);


//break
// for(let i=0; i<=10; i++){
//   console.log(i);
//   if(i === 5){
//     break;
//   }
// }



// const target =Math.floor(Math.random()*10);
// let guess =Math.floor(Math.random()*10);
// while(true){
//   if(target === guess)
//   break;
//   console.log(`Target=: ${target} Guess=: ${guess}`);
//   guess=Math.floor(Math.random()*10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`Congrats you win!!`);



//for.. .of loop
// let subreddies=['shh','gdf','hhj','hujm'];
// for(let sub of subreddies){
//   console.log(sub);
// }

// for(let char of 'abdyfunjdj'){
//   console.log(char.toUpperCase());
// }

//Comparing for loop and for...of loop
//for loop
// const magicSquare = [[2,7,9],[9,8,1],[4,6,8]];
//  for(let i=0; i<magicSquare.length; i++){     o/p :- 2,7,9 sum of 18
 //  let row=magicSquare[i];                            9,8,1 sum of 18
//    let sum=0;                                        4,6,8 sum of 18
//   for(let j=0; j<row.length; j++){
//   sum += row[j];
//    }
//     console.log(`${row} sum of ${sum}`);
//  }
  

//for...of loop
// for(let row of magicSquare){
//   let sum =0;
//   for(let num of row){
//     sum += num;
//   }
//   console.log(`${row} sum to ${sum}`);
// }
// const word1 = ['mail','milk','bath','black'];
// const word2 = ['box','shake','tub','berry'];
// for(let i=0; i<word1.length; i++){
//   console.log(`${word1[i]}${word2[i]}`);
// }

//for...of with Object
// const movieReview = {
//   Arrival : 9.5,
//   Alien : 9,
//   Amelie : 8,
//   'In Bruges' : 9,
//   Amadeus : 10,
//   'Kill Bill' : 8,
//   'Little Miss Sunshine' : 8.5,
//   Coraline :7.5                        //o/p  it's showing error becoz we can't itterate object for for...of loop
// };
// for(let x of movieReview){
//   console.log(x);
// }    // this code is not executed so we try below code
// for(let movie of Object.values(movieReview)){
//   console.log(movie);
// }
// const rating = Object.values(movieReview);
// let total = 0;
// for( let r of rating){
//   total += r;
// }
// let avg = total / rating.length;
// console.log(avg);


//for...in loop
// const jeoPardy = {
//   regular : 256436,
//   hello : 7865,
//   there : 7567,
//   anything : 7778
// };
// total =0;
// for(let props in jeoPardy){
//   total += jeoPardy[props];
// }
// console.log(`${total}`);
// for(let k in [88,99,77,66]){
//   console.log(k);
// }