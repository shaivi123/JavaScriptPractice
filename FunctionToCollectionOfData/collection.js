//Array callback methods
//forEach  
// const num = [20,43,56,32,56,22,89];
 
// num.forEach(function (num, idx){
//     console.log(num , idx);
// })

// function triple(n){
//     console.log(n * 3);
// }
// num.forEach(triple);

// const books = [
//     {
//         title: 'Sita',
//         authors: 'Amish Kumar',
//         rating: 5
//     },
//     {
//         title: 'Ram',
//         authors: 'Amish Kumar',
//         rating: 5
//     },
//     {
//         title: 'Ravan',
//         authors: 'Amish Kumar',
//         rating: 4.5
//     },
//     {
//         title: 'Good Omens',
//         authors: ['Terry Pratchett','Neil Gaiman'],
//         rating: 4.25
//     }
// ];

// books.forEach(function (book) {
//     console.log(book.title.toUpperCase());
// })

// //if i use for instead of forEach and for...of
// for(let book of books){
//     console.log(book.title.toUpperCase());
// }
// for(let i =0; i< books.length; i++){
//     console.log(books[i].title.toUpperCase());
// }


//Map :- Create a new array with the results of calling a callback on every element in the array.
//w3school practice
const fruits = new Map();
fruits.set('apples', 500);
fruits.set('banana', 300),
fruits.set('grapes', 800);
// console.log(fruits.get("apples"));  //get()
// console.log(fruits.size);        //getting the size of map
// console.log(fruits.has("apple"));   //check key/value in map or not
// console.log(typeof fruits);   //  return object
// console.log(fruits instanceof Map);    //Returns true
let text1 = "";
// fruits.forEach(function(key, value){
//     text += key + '-' + value  + '\n';       //forEach loop
// })
// console.log(text);
// for(const x of fruits.entries()){
//     text1 += x + '\n';                //it's return entries to all map value
// }
// console.log(text1);
// for(const x of fruits.keys()){     //here getting all key using of keys() method
//     text1 += x + '\n';
// }
// console.log(text1);
// for(const x of fruits.values()){
//     text1 += x + '\n';              //here we getting all value of using  values() method
// }
// console.log(text1);
//we can get total of values
// let total = 0;
// for(const x of fruits.values()){      
//     total += x;
// }
// console.log(total);

