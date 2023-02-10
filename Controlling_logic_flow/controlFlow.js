//IF condition
// if(1 !== 1){
//     console.log("It's True");
// }

// //Example 2
// let rating =3;
// if(rating ===3){
//     console.log('You are a superstar!');
// }

// //Example3
// let num=37;

// if(num % 2 !== 0){
//     console.log('ODD NUMBER!');
// }

//IF ELSE condition

// let rating=233;

// if(rating ===3){
//     console.log('YOU ARE A SUPERSTAR!');
// }
// else if(rating ===2){
//     console.log('MEET EXPECTATIONS');
// }else{
//     console.log("Doesn't exist!"); 
// }


//Example4

// let highScore=1430;
// let userScore=1600;

// if(userScore >= highScore){
//     console.log(`Congrats, you have the new high score of ${userScore}`);
//     highScore=userScore;
// }else{
//     console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
// }

// //Nesting conditions (loop)

// let password = 'kittykitty';
// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log('Valid Password!');
//     }
//     else{
//         console.log('Password is long enough,but can not contain spaces');
//     }
// }
// else{
//     console.log('Password must be longer!');
// }

// TRUTHY and FALSEY (every value is TRUTHY except 0,NaN,0/0,"",null,undefined,false)

// let mystery = NaN;
//  if(mystery){
//     console.log('TRUTHY');
//  }
//  else{
//     console.log('FALSY');
//  }

 // Logical operators
 //&& (AND)

// let password = 'hello here';
// if(password.length >= 8 && password.indexOf(' ') === -1){
//     console.log('VALID PASSWORD');
// }
// else{
//     console.log('INVALID PASSWORD');
// }

// || (OR)
// let age =78;

// if(age <6 || age >= 65){
//     console.log('YOU GET IN FOR FREE');
// }
// else{
//     console.log('YOU MUST PAYY!');
// }

// let color = 'violet';
// if(color === 'purple' || color === 'lilac' || color === 'violet'){
//     console.log('GREAT CHOICE!');
// }

// ! (NOT)
 
// let loggedInUser = "abc";
// if(!loggedInUser){
//     console.log('Get Out Of Here!');
// }

// let flavor = 'watermelon';
// if(flavor != 'grape' && flavor !== 'cherry'){
//     console.log('WE DONT HAVE THAT FLAVOR!');
// }

// if(!(flavor === 'grape' || flavor === 'cherry')){
//     console.log('WE ONLY HAVE GRAPE AND CHERRY!');
// }

//example of precedence
//   let x=7;
//   x == 7 || x === 3 && x > 10;  //true
//   (x == 7 || x === 3) && x > 10;   //false

  //Switch statements cases
// let day=7;
//  switch(day){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4: 
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('Sunday'); 
//         break;
//     default:
//         console.log('Invalid Day');                           
//  }

 // Ternary Operator => expression ? expressionTrue : expressionFalse

//  let abStatus = 'online';
//  let color = abStatus  === 'offline' ? 'red' : 'green';