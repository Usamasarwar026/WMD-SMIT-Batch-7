// // ....................................Sum Elements...............................
// // Write a function that takes an array of numbers and prints the sum of all the elements using a forEach loop.


// function Sum(num){
//     let sum = 0;
//     array.forEach((value)=>{
//         sum += value;
//     })
//     return sum;
// }
// let array = [1,2,3,4]
// console.log(Sum(array));



// // .................................Count Even Numbers:.......................................
// // Write a function that takes an array of numbers and prints the count of even numbers using a forEach loop.


// function countEven(){
//     let count = 0;
//     array.forEach((value)=>{
//         if(value % 2 == 0){
//             count++;
//         }
//     })
//     return count;
// }
// let array = [1,2,3,4,5,6,7,8,9,11,13,14];
// let result = countEven(array);
// console.log(result);


// // .........................................Convert to Uppercase:...........................
// // Write a function that takes an array of strings and prints each string in uppercase using a forEach loop.


// function upperCase() {

//     array.forEach((value) => {
//         console.log(value.toUpperCase())
//     })
// }
// let array = ['usama', 'ali', 'noman', 'awais', 'abdullah'];
// upperCase(array);




// // ..............................Array of Lengths:..................................
// // Write a function that takes an array of strings and prints an array containing the lengths of each string using a forEach loop.


// function checkLength() {
//         array.forEach((value) => {
//             console.log(value.length)
//         })
//     }
//     let array = ['usama', 'ali', 'noman', 'awais', 'abdullah'];
//     checkLength(array);


// // ..................................Print Names:................................
// // Write a function that takes an array of names and prints each name with a greeting message (e.g., "Hello, John!") using a forEach loop.


// function printName() {
//         array.forEach((value) => {
//             console.log(`Hello ${value}`)
//         })
//     }
//     let array = ['usama', 'ali', 'noman', 'awais', 'abdullah'];
//     printName(array);


// // ...................................Filter Negative Numbers:................................
// // Write a function that takes an array of numbers and prints only the negative numbers using a forEach loop.


// function filterNegative(num){

//     array.forEach(value => {
//         if(value < 0){
//             console.log(value + " is a negative number");
//         }
//     });
// }

// let array = [1,-5,85,-86,-6,-1,-4,-5,-3,8,4];
// filterNegative(array);


// // ............................................Add Suffix:...........................................
// // Write a function that takes an array of strings and prints each string with a suffix "-ed" added to it (e.g., "walk" becomes "walked") using a forEach loop.



// function addSuffix() {
//         array.forEach((value) => {
//             console.log(`${value}ed`)
//         })
//     }
//     let array = ['walk', 'bold', 'end', 'blast', 'stop'];
//     addSuffix(array);




// // ..................................Sum of Squares:........................................
// // Write a function that takes an array of numbers and prints the sum of the squares of all the elements using a forEach loop.


// function addSquare(num){
//         let sum = 0;
//         array.forEach((value)=>{
//             let square = value * value; 
//             sum += square;
//         })
//         return sum;
//     }
//     let array = [1,2,3,4]
//     let result = addSquare(array);
//     console.log(result);



// // ..........................................Extract Initials:.............................................
// // Write a function that takes an array of full names (e.g., "John Doe") and prints the initials of each name (e.g., "J.D.") using a forEach loop.



// function extractInitials(name) {

//     array.forEach(fullName => {
//         let word = fullName.split(' ');
//         let fLetter = word.map(word => word.charAt(0)).join('.');
//         console.log(fLetter)
//     })
// }
// let array = ['Usama Sarwar', 'Muhammad Awais','Abdullah Alam']
// extractInitials(array);







// // ................................Product of Elements:.....................................................
// // Write a function that takes an array of numbers and prints the product of all the elements using a forEach loop.


// function products(num){
//     let product = 1;
//     array.forEach((value)=>{
//         product *= value;
//     })
//     return product;
// }
// let array = [1,2,3,4,5]
// console.log(products(array));
