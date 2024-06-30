
// let str = "leetcode";
// var reverseVowels = function(s) {
//     s = s.split("");  
//    let start = 0;
//    let end = s.length-1;
//    while(start < end){
//        if(!isvowel(s[start])){
//            start++;
//        }
//        else if(!isvowel(s[end])){
//            end--;
//        }
//        else{
//            let swap = s[start];
//            s[start] = s[end];
//            s[end] = swap;
//            start++;
//            end--;
//        }
//    }
//    return s.join("");
// };





// -------------2nd method-------------




let string = "leetcode";;
let checkvowel = function (s){
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    s = s.split("");
    let start = 0;
    let end = s.length-1;
    while(start < end){
        if(!vowels.has(s[start])){
            start++;
        }
        else if (!vowels.has(s[end])) {
            end--;
        }
        else{
            [s[start],s[end]] = [s[end],s[start]];
            start++;
            end--;
        }
    }
    return s.join("");
}

console.log(checkvowel(string));