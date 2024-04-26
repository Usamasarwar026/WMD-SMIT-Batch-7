// 1. Write a JS code to print numbers from 1 to 10

// for (let index = 1; index <= 10; index++) {
//     console.log(index); 
// }


// 2. Write a JS code to print Even numbers in given array


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Even numbers in the array:");
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             console.log(array[i]);
//         }
//     }


// 3.  Write a JS code to delete all occurrence of element in given array


// const array = [6, 2, 3, 4, 2, 6, 7, 2, 9, 10, 2];
// const val = 2;

// function removeAllOccurrences(arr, value) {
//     return arr.filter(item => item !== value);
// }

// const newArray = removeAllOccurrences(array, val);
// console.log("Array after removing all occurrences of", val + ":", newArray);



// 4. Write a JS code to find the power of a number using for loop


//// Function to calculate power of a number using for loop
// function power(base, exponent) {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// }
// const base = parseFloat(prompt("Enter the base:"));
// const exponent = parseInt(prompt("Enter the exponent:"));

// if (isNaN(base) || isNaN(exponent)) {
//     console.log("Please enter valid numbers.");
//     alert("Please enter valid numbers.");
// } else {
//     const result = power(base, exponent);
//     console.log(base + " raised to the power of " + exponent + " is:", result);
//     alert(base + " raised to the power of " + exponent + " is:" + result);
// }




// 5. Write a JS code to print a pattern using for loop
/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 
*/


// for (let i = 1; i <= 8; i++) {
//     var p = ' '
//     for (let j = 1; j <= i; j++){
//         p += j + ' ';
//     }
//     console.log(p);
// }





//       6. Write a JS code to find the no of digits in a number

// // Prompt the user to enter a number
// var num = prompt("Enter a Number : ");

// // Convert the absolute value of the number to a string and count its length
// var countDigits = Math.abs(num).toString().length;

// // Print the total number of digits to the console
// console.log(`Total digits are "  ${countDigits}`);
// alert(`Total digits are " ${countDigits}`);



// 7. Write a JS code to calculate the sum of digits in a number




// let num = +prompt("Enter a Number : ");
// let sum = 0;

// while (num > 0) {
//     sum += num % 10; // Add the last digit to the sum
//     num = Math.floor(num / 10); // Remove the last digit from the number
// }

// console.log(`Sum of digits is ${sum}`);
// alert(`Sum of digits is ${sum}`);



// 8. Write a JS code to find the largest number in an array



let array = [];

for (let i = 0; i < 5; i++) {
    let numbers = Number(prompt('Enter 5 numbers in an array :'));
    array.push(numbers);
}

let max = -Infinity;

for (let index = 0; index < array.length; index++) {

    if (max < array[index]) {
        max = array[index]
    }
}
console.log(max)