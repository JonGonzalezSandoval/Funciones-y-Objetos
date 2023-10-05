let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubleArrayNumbers = [];
let doubleArrayNumbersMap = [];


//recorre una array

numberArray.forEach(function(number, i){
    doubleArrayNumbers[i] = number * 2;
});

//recorre un array y lo devuelve modificado guardandolo en otro

doubleArrayNumbersMap = numberArray.map(function(number){
    return number * 2;
});



// console.log(doubleArrayNumbers);
// console.log(doubleArrayNumbersMap);



let filteredArray = numberArray.filter(function (number) {
   return number % 2 === 0; 
});


console.log(filteredArray);


let total = numberArray.reduce(function(total, actual){
    return (total += actual);
});