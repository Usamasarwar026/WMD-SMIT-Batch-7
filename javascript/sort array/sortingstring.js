


let strs = ['club', 'clue', 'cluing', 'zlw'];

let arraysort = function(str){
    str.sort();
    let first = str[0];
    let last = str[str.length - 1];
    let index = 0;

    while (index < first.length) {
        if (first.charAt(index) == last.charAt(index)) {
            index++;
        } else {
            break;
        }
    }

    return index == 0 ? 'there is not longest prefix' : first.substring(0, index);
}

console.log(arraysort(strs)); // This will print the result of arraysort
