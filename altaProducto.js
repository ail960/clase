const fs = require('fs');
const Producto =require('./Producto');

let producto = new Producto('Guantes', 'glov0000', '900', '80')
let producto2 = new Producto('Pértiga', 'VTT', '300', '30')

//leo el archivo
let productoJson = fs.readFileSync('producto.json', 'utf8');

//convertir a array de js ese json
let arrayProductos = JSON.parse(productoJson)

encontrado = productoJson.find(producto,producto2)
//busco si está allí con el mismo codigo
if(!encontrado){
    //meto el producto
    arrayProductos.push(producto,producto2);

    //convertir a json ese array con el producto nuevo
    productoJson = JSON.stringify(arrayProductos);

    //escribo
    fs.writeFileSync('producto.json', productoJson); 
}