const fs = require('fs');
let codigoABuscar = 'VTT'
//leo el archivo
let productoJson = fs.readFileSync('producto.json', 'utf8');

//convertir a array de js ese json
let arrayProductos = JSON.parse(productoJson)

//buscar en el json al producto por codigo
let productoAEliminar = arrayProductos.find(function(unProducto){
    return unProducto.codigo == codigoABuscar;
});

//si existe el código elimino el producto
if(productoAEliminar){
    //generar array
    let arrayNuevo = arrayProductos.filter()

}else{
//si no está le muestro algo en pantalla
console.log("el producto ya se encuentra fuera del carrito")
}