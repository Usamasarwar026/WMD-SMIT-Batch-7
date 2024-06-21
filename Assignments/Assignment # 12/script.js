let input = document.getElementById('inputbox')
let buttons = document.querySelectorAll('button')

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
     button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == 'sin'){
                 string = Math.sin(input.value * Math.PI / 180);
                 input.value = string;
        }
        else if(e.target.innerHTML == 'cos'){
                 string = Math.cos(input.value * Math.PI / 180);
                 input.value = string;
        }
        else if(e.target.innerHTML == 'tan'){
                 string = Math.tan(input.value * Math.PI / 180);
                 input.value = string;
        }
        else if(e.target.innerHTML == 'asin'){
                 string = Math.asin(input.value )* (180 / Math.PI);
                 input.value = string;
        }
        else if(e.target.innerHTML == 'acos'){
                 string = Math.acos(input.value) * (180 / Math.PI);
                 input.value = string;
        }
        else if(e.target.innerHTML == 'ln'){
                 string = Math.log(input.value);
                 input.value = string;
        }
        else if(e.target.innerHTML == 'log'){
                 string = Math.log10(input.value);
                 input.value = string;
        }
        else if(e.target.innerHTML == 'x<sup>2</sup>'){
                 string = Math.pow(input.value, 2);
                 input.value = string;
        }
        else if(e.target.innerHTML == 'x<sup>3</sup>'){
                 string = Math.pow(input.value, 3);
                 input.value = string;
        }
        // else if(e.target.innerHTML == '%'){
        //          string = (input.value);
        //          input.value = string;
        // }
        else if(e.target.innerHTML == '√'){
                 string = Math.sqrt(input.value);
                 input.value = string;
        }
        else if(e.target.innerHTML == 'π'){
                 string = (input.value * 22/7);
                 input.value = string;
        }
       
        else if(e.target.innerHTML == 'EXP'){
                 string = Math.pow(10, input.value);
                 input.value = string;
        }
        

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
     })
})
