let objectList = [{"Nombre":"Papel", "Tipo":"1", "Cantidad":"5"}, {"Nombre":"Boligrafos", "Tipo":"1", "Cantidad":"5"}, {"Nombre":"Libros", "Tipo":"1", "Cantidad":"5"}];


let nameList = objectList.map(objeto => {
    return objeto.Nombre;
})

console.log(nameList);