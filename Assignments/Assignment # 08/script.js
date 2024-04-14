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


const array = [6, 2, 3, 4, 2, 6, 7, 2, 9, 10, 2];
const val = 2;

function removeAllOccurrences(arr, value) {
    return arr.filter(item => item !== value);
}

const newArray = removeAllOccurrences(array, val);
console.log("Array after removing all occurrences of", val + ":", newArray);
