

strings = ["A man, a plan, a canal: Panama"]
let validpalandrome = function (string) {
    string = string.toString().replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let start = 0;
    let end = string.length - 1;
    while (start < end) {
        if (string.charAt(start) === string.charAt(end)) {
            start++;
            end--;
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(validpalandrome(strings));