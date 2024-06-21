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
            function sin(){
                // string = Math.sin(string);
                // //  input.value = Math.sin(input.value);
                //  input.value = string;

                string = Math.sin(
                    (parseFloat(currentInput) * Math.PI) / 180
                  ).toString();
                  input.value = string;
            }
        }
        else if(e.target.innerHTML == 'cos'){
            function cos(){
                string = Math.cos(string);
                //  input.value = Math.cos(input.value);
                 input.value = string;
            }
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
     })
})


function sin(){
    // string = Math.sin(string);
     input.value = Math.sin(input.value);
    //  input.value = string;
}