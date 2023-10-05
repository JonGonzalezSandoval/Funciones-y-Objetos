let findHighest = (lista => {

    return lista.reduce((maxDigit, currentDigit) => {return currentDigit > maxDigit ? currentDigit : maxDigit});

}) 



console.log(findHighest([5, 2, 4, 8, 7, 1, 22, 34, 5, 6, 27]));