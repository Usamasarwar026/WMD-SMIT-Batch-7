// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
// for numbers divisible by only one of those).


for(let num=1; num <=100; num++){
    if(num % 3 == 0){
        console.log("Fizz");
        continue;
    }
    else if(num % 5 == 0){
        console.log("Buzz")
        continue;
    }
    else if(num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz")
        continue;
    }
    console.log(num);
}
