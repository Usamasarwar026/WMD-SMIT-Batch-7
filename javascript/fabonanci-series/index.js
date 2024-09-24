

let a = 0;
let b = 1;
let fibo;
fibo += a + '\n' + b + '\n'

for(let i=2; i<30; i++){
    let c= a+b;
    fibo += c + '\n';
    a=b;
    b=c;

}
console.log(fibo)