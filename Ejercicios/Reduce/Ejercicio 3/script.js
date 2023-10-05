let objectList = [{Nombre:"Papel", Tipo:"1", Cantidad:5, Precio:12}, {Nombre:"Boligrafos", Tipo:"1", Cantidad:5, Precio:5}, {Nombre:"Libros", Tipo:"1", Cantidad:5, Precio : 7}];


let totalPrice = objectList.reduce((totalValue, nextObject) => {
    return totalValue += nextObject.Precio;
},0);

//porqué el 0 es necesario? El primer parametro del reduce hace referencia siempre al primer objeto que contiene el array a no ser que se le especifique lo contrario poniendo la , y el valor que queremos que tenga dep rimeras en este caso un 0


console.log(totalPrice);