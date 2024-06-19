

// a) Return the length of a given string.


// function count_length(count){
//     return count.length;
// }
// var name = "USAMA SARWAR";
// let length = count_length(name);
// console.log("The length of the string is", length);


// b) Concatenate two strings together.

// var Fname = "USAMA"
// var Lname = "SARWAR"

// function Concatenate(add_string){
//          add_string = Fname + " " + Lname ;
//         return add_string;
// }
// let concatenating = Concatenate(Fname + Lname)

// console.log("After Concatenating the string is", concatenating);


// c) Determine if a given string is empty.

// function check_string(str){
//     if(str.trim() == ""){
//         console.log("string is empty");
//     }
//     else{
//         console.log("string is not empty")
//     }
//     return str;
// }
// let string = "USAMA";
// check_string(string);


// d) Count the number of vowels in a string.

// function check_vowel(str){
//     let count = 0;
//     str = str.toUpperCase();
//     for (let index = 0; index < str.length; index++) {
//         let character = str.charAt(index)
//         if(character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U' ){
//             count++;
//         }
//     }
//     return count;
// }

// let fname = "Usama_Sarwar";
// let numberofvowel = check_vowel(fname);
// console.log("The number of vowel word in the string is: ", numberofvowel);


 

// e) Reverse a given string


let string = "USAMA321";

function Reverse_string(str){
    let reversed
    for (let index = str.length; index >= 0; index--) {
      reversed += str[index];
    }
    return reversed
}

let reverse = Reverse_string(string);
console.log(reverse);