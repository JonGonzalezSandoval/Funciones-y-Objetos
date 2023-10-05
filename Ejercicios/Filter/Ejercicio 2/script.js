let nameList = ["Maria", "Alex", "Jon", "Andrea", "Gonzalo", "Asier", "Eve", "Markel" , "Ricardo", "Fiona", "Asier", "Javier"];


let upperNameList = nameList.filter(name => name.toLowerCase().includes("e"));


// let upperNameList = nameList.filter(name => name.toLowerCase().indexOf("e") !== -1);


console.log(upperNameList);