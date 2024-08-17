// Write a function min that takes two arguments and returns their minimum.

function min(a,b){
    if(a > b){
        return b;
    }
    else{
        return a;
    }
}
let result = min(20,5);
console.log(result);