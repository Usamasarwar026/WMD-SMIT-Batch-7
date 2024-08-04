


// -----------while loop----------

// let a = 0;
// while(a <= 20){
//     if(a%2 == 0){
//         console.log(`${a} is an even number`);
//     }
//     else{
//         console.log(`${a} is an odd number`);
//     }
//     a++
// }



// --------------for loop--------------


// for (let index = 0; index < 20; index++) {
//     if (index % 2 == 0) {
//         console.log(index + " this is an even number")
//     } else {
//         console.log(index + " this is an odd number")
//     }
    
// }




// let array = [1,3,5,6,8,13,43,45,87,89,98,99];

// for(let i=0; i <= array.length; i++){
//     if(array[i] % 2 == 0){
//         console.log(array[i] + " is an even number");
//     }
//     else{
//         console.log(array[i] + " is not an even number");
//     }
// }



// print counting---------------


// for(let i=1; i<=100; i++){
//     console.log(i)
// }




// for(let i=1; i<=100; i=i+10){
//     for(let j=i; j<i+10; j++){
//         console.log(j);
//     }
// }



//------------------- print such design:----------------------
// $
// $$
// $$$
// $$$$
// $$$$$




// for(let i = 0; i < 5; i++){
//     for(let j = 0; j <= i; j++){
//         console.log("$");
//     }
//     console.log("\n")
// }




let arr = [1,2,3,4,5,6,7,8];

let newArray = arr.find((x) => {
 return x == 7;
});
console.log(newArray);
