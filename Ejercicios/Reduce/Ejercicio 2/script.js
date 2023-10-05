let nameList = ["Maria", "Alex", "Jon", "Andrea", "Gonzalo", "Asier", "Eve", "Markel" , "Ricardo", "Fiona", "Asier", "Javier"];


let concNameList = nameList.reduce((cadenaNombres, nombre) => cadenaNombres += nombre);


console.log(concNameList);