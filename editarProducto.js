const fs = require('fs');
let codigoABuscar = 'VTT'
//leo el archivo
let productoJson = fs.readFileSync('producto.json', 'utf8');

//convertir a array de js ese json
let arrayProductos = JSON.parse(productoJson)

//buscar en el json al producto por codigo
let productoAEditar = arrayProductos.find(function(unProducto){
    return unProducto.codigo == codigoABuscar;
});

//si existe el código le modifico precio nombre stock
if(productoAEditar){
    productoAEditar.nombre = 'Pértiga';
    productoAEditar.stock = 79;
    productoAEditar.precio = 800;

    let productoEditado = productoAEditar

    //debo escribir el archivo actualizado
    fs.writeFileSync('productoEditado.json', productoEditado); 
    console.log(productoEditado)

    //aqui iria el codigo de modificar en el array y guardar en el json
    let arrayNuevo = arrayProductos.filter(unProducto => unProducto.codigo != codigoABuscar)

    //meto en el array el producto editado
    arrayNuevo.push(productoAEditar);


    //y debo escribir en el archivo ese producto actualizado
    fs.writeFileSync('productos.json', JSON.stringify(arrayNuevo))


}else{
    //si no está le muestro algo en pantalla
    console.log('no se encuentra el producto')
}