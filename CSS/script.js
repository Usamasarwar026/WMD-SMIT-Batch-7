// hel = function (){
//     return "hello world";
// }
// console.log(hel());



// function hellow(a,b){
//     let sum = a + b ;
//     return sum;
// }

// let hell = hellow(4,5);
// console.log(hell);



// // -----------------------Destructuring in function---------------

// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red'
//   }
  
//   function myVehicle({color, type, brand, model}) {
//     const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
//     return message;
//   }

//   console.log( myVehicle(vehicleOne))





const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  
  function myVehicle({ model, registration: { state, country } }) {
      const message = 'My ' + model + ' is registered in ' + state + ' in ' + country + '.';
      return message;
    }
    console.log(myVehicle(vehicleOne));
