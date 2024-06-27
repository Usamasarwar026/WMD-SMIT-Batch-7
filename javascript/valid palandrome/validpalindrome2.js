
let strings = ["A man, a plan, a canal: cPanama"];

let validPalindrome = function (string) {
    string = string.toString().replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let start = 0;
    let end = string.length-1;
    while (start <= end) {
        if (string.charAt(start) === string.charAt(end)) {
            start++;
            end--;
        }
        else{
            return ispalindrome(string, start+1, end) || ispalindrome(string, start, end-1);
        }
    }
    return true;

}

function ispalindrome(string, start, end){
    while (start <= end) {
        if (string.charAt(start) === string.charAt(end)) {
            start++;
            end--;
        }
        else{
            return false;
        }
    }
    return true;
}
console.log(validPalindrome(strings));

