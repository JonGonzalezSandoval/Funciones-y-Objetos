let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubleArrayNumbers = [];
let doubleArrayNumbersMap = [];


//recorre una array

numberArray.forEach(function(number, i){
    doubleArrayNumbers[i] = number * 2;
});



numberArray.forEach((number, i) => (doubleArrayNumbers[i] = number * 2));

//recorre un array y lo devuelve modificado guardandolo en otro

doubleArrayNumbersMap = numberArray.map(function(number){

    return number * 2;

});

//misma versión con arrow function, hacen falta corchetes en las arrow si hay más de una linea y el propio metodo lo pide
//si se hace en una linea podemos evitar escribir ese return

let doubleArrayNumbersMapArrow = numberArray.map((number) => (number * 2));


// console.log(doubleArrayNumbers);
// console.log(doubleArrayNumbersMap);

//devuelve un array con la condición de filtro ue le hemos indicado

let filteredArray = numberArray.filter(function (number) {
   return number % 2 === 0; 
});

//misma versión con arrow function
let filteredArrayArrow = numberArray.filter(number => (number %2 === 0));

console.log(filteredArray);

//suma todos los valores del array devolviendo el total


let total = numberArray.reduce(function(total, actual){
    return (total += actual);
});

//misma versión con arrow function
let totalArrow = numberArray.reduce((total, actual) => (total += actual));


//TODO ARROW FUNCTIONS







console.log(doubleArrayNumbersMapArrow);

console.log(filteredArrayArrow);