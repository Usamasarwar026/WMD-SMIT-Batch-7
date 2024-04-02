// Write a js program to find the maximum between two numbers.


// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");

// if (num1 > num2) {
//     console.log(`${num1} is greater than ${num2}`);
//     alert(`${num1} is greater than ${num2}`);
// } 
// else if (num2 > num1) {
//     console.log(`${num2} is greater than ${num1}`);
//     alert(`${num2} is greater than ${num1}`);  
// }
// else {
//     console.log(`${num1} is equal to ${num2}`);
//     alert(`${num1} is equal to ${num2}`);
// }


// 02:-   Write a js program to find the maximum between three numbers.

// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");
// let num3 = prompt("Enter the third number");
// let max;

// max=num1;
// if (num2 > max) {
//     max=num2;
// }
// if(num3 > max){
//     max=num3
// }
// console.log(`${max} is the maximum number`);
// alert(`${max} is the maximum number`);


// 03:-   Write a js program to check whether a number is negative, positive or zero.


// let number = prompt("Enter the any number");

// if(number > 0){
//     console.log(`${number} is the positive number`);
//     alert(`${number} is the positive number`);
// }
// else if(number < 0){
//     console.log(`${number} is the negative number`);
//     alert(`${number} is the negative number`);
// }
// else{
//     console.log(`The number is zero`);
//     alert(`The number is zero`);
// }


// 04:-   Write a js program to check whether a number is divisible by 5 and 11 or not.

// let number = prompt("Enter the any number to check that the number you have entered is divisible by 5 and 11 or not");

// if(number % 5 == 0 && number % 11 == 0){
//     console.log(`${number} is divisible by 5 and 11`);
//     alert(`${number} is divisible by 5 and 11`);
// }
// else if(number % 5 !== 0 && number % 11 == 0){
//     console.log(`${number} is only divisible by 11`);
//     alert(`${number} is only divisible by 11`);

// }
// else if(number % 5 == 0 && number % 11 !== 0){
//     console.log(`${number} is only divisible by 5`);
//     alert(`${number} is only divisible by 5`);

// }
// else{
//     console.log(`${number} is not divisble by 5 and 11`);
//     alert(`${number} is not divisible by 5 and 11`);
// }


// 05:-    Write a js program to check whether a number is even or odd.


// let number = prompt("Enter the any number to check that the number you have entered is an even or odd");

// if(number % 2 == 0){
//     console.log(`${number} is an even number`);
//     alert(`${number} is an even number`);
// }
// else{
//     console.log(`${number} is an odd number`);
//     alert(`${number} is an odd number`);
// }


//                   06:-  Write a js program to check whether a year is leap year or not.

// let year = prompt("Enter the number to check that the year you have entered is a leap year or not");

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log(`${year} is a leap year`);
//             alert(`${year} is a leap year`);
//         } else {
//             console.log(`${year} is not a leap year`);
//             alert(`${year} is not a leap year`);
//         }
//     } else {
//         console.log(`${year} is a leap year`);
//         alert(`${year} is a leap year`);
//     }
// }
// else {
//     console.log(`${year} is not a leap year`);
//     alert(`${year} is not a leap year`);
// }


//             07:-   Write a js program to input any alphabet and check whether it is vowel or consonant.


// let character = prompt("Enter any Alphabet to check that it is a vowel or consonant");

// if(character == 'a' || character == 'A' || character == 'e' || character == 'E' || character == 'i' || character == 'I' || character == 'o' || character == 'O' || character == 'u' || character == 'U'){
//     console.log(`${character} is a vowel word`);
//     alert(`${character} is a vowel word`);
// }
// else{
//     console.log(`${character} is a consonent word`);
//     alert(`${character} is a consonent word`);
// }


//    08:-    Write a js program to check whether a character is uppercase or lowercase alphabet.


// let character = prompt("Enter any alphabet to check that the character is uppercase or lowercase alphabet ");

// if (character > 'A' && character < 'Z') {
//     console.log(`${character} is a capital letter`);
//     alert(`${character} is a capital letter`);
// }
// else if (character > 'a' && character < 'z') {
//     console.log(`${character} is a small letter`);
//     alert(`${character} is a small letter`);
// }
// else if(character > 0 && character < 9){
//     console.log(`${character} is a number`);
//     alert(`${character} is a number`);
// }
// else {
//     console.log(`${character} is a symbol`);
//     alert(`${character} is a symbol`);
// }


//    09:-    Write a js program to input the week number and print weekday.


// var d = prompt("Enter the number from 1 to 7 to check the day name");

// switch (parseInt(d)) {
//     case 1:
//         {
//             console.log(`Monday`);
//             alert(`Monday`);
//         }
//         break;
//     case 2:
//         {
//             console.log(`Tuesday`);
//             alert("Tuesday");
//         }
//         break;
//     case 3:
//         {
//             console.log(`Wednesday`);
//             alert(`Wednesday`);
//         }
//         break;
//     case 4:
//         {
//             console.log(`Thursday`);
//             alert(`Thursday`);
//         }
//         break;
//     case 5:
//         {
//             console.log(`Friday`);
//             alert(`Friday`);
//         }
//         break;
//     case 6:
//         {
//             console.log(`Saturday`);
//             alert(`Saturday`);
//         }
//         break;
//     case 7:
//         {
//             console.log(`Sunday`);
//             alert(`Sunday`);
//         }
//         break;
//     default:
//         {
//             console.log(`Invalid number`);
//             alert(`Invalid number`);
//         }
// }


// 10:-    Write a js program to input the month number and print the number of days in that month.



// const days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// var month = prompt("Enter the month number from 1 to 12");
// if(month < 1 || month > 12){
//     console.log(`Invalid number please Enter the number from 1 to 12`);
//     alert(`Invalid number please Enter the number from 1 to 12`);
// }
// else{
//     for (let index = 0; index < 12; index++) {
//         if (index == month-1) {
//             console.log(`Number of days in month ${index + 1} is: ${days_in_month[index]}`);
//             alert(`Number of days in month ${index + 1} is: ${days_in_month[index]}`);
//     }
// }
// }




// 11:-   Write a js program to count a minimum number of notes in a given amount.






















// 12: -    Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics, and Computer.Calculate percentage and grade according to the following:
// Percentage >= 90 % : Grade A
// Percentage >= 80 % : Grade B
// Percentage >= 70 % : Grade C
// Percentage >= 60 % : Grade D
// Percentage >= 40 % : Grade E
// Percentage < 40 % : Grade F

// var total_marks = prompt("Enter the total marks of five subjects");
// var Chemistry = prompt("Enter the marks of chemistry");
// var physics = prompt("Enter the marks of physics");
// var Mathematics = prompt("Enter the marks of mathematics");
// var Computer = prompt("Enter the marks of computer");
// var Biology = prompt("Enter the marks of biology");
// var sum ;
// var total;
// var percentage;
// sum ;
// for (let index = 0; index < marks; index++) {
//     total[index] = prompt("Enter the marks of five subject:" );
//     sum = sum + total[index]; 
// }
// percentage = (((Chemistry + physics + Mathematics + Computer + Biology)*100)/total_marks);
//     if (percentage >= 90)
//     {
//         console.log(`your grade is A`)
//         alert(`your grade is A`)
//     }
//     else if (percentage >= 80)
//     {
//         console.log(`your grade is B`)
//         alert(`your grade is B`)
//     }
//     else if (percentage >= 70)
//     {
//         console.log(`your grade is C`)
//         alert(`your grade is C`)
//     }
//     else if (percentage >=60)
//     {
//         console.log(`your grade is D`)
//         alert(`your grade is D`)
//     }
//     else if (percentage >=40)
//     {
//         console.log(`your grade is E`)
//         alert(`your grade is E`)
//     }
//     else
//     {
//         console.log(`your grade is F`)
//         alert(`your grade is F`)
//     }






// 13:-  Write a js program to input the basic salary of an employee and calculate its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%



// let basic_salary = parseFloat(prompt("Enter the basic salary of the employee:"));
// var HRA;
// var DA;
// var gross_salary;

// if (basic_salary <= 10000) {
//     HRA = 0.2 * basic_salary;
//     DA = 0.8 * basic_salary;
// } else if (basic_salary <= 20000) {
//     HRA = 0.25 * basic_salary;
//     DA = 0.9 * basic_salary;
// } else {
//     HRA = 0.3 * basic_salary;
//     DA = 0.95 * basic_salary;
// }
// gross_salary = basic_salary + HRA + DA;
// console.log(`Gross salary: ${gross_salary}`);
// alert(`Gross salary: ${gross_salary}`);



// 14:-    Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill



// var units = prompt("Enter the Electricity units you have used");
// var bill;
// if(units <= 50){
//     bill = units * 0.50 ;
// }
// else if (units <= 150) {
//     bill = units * 0.75 ;
// }
// else if (units <= 250) {
//     bill = units * 1.20 ;
// }
// else if (units > 250) {
//     bill = units * 1.50 ;
// }

// bill = bill + (bill * 20 / 100);
//  console.log(`Total bill = ${bill}`);
//  alert(`Total bill = ${bill}`);


