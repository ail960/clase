const Producto = require('./Producto');
const fs = require('fs');

//ahora si instacio al nuevo producto
let producto = new Producto('Pértiga', 'VTT', '300');

//obtengo los productos de mi json
const listaProductosJson = fs.readFileSync('producto.json', 'utf8');

//por defecto voy a tener el array de producto vacio
let productosArray = [];

let encontrado = false;

//si el archivo está vacio no lo convierto y genero un array de productos vacio
if (listaProductosJson.length == 0) {
    //aqui si meto al nuevo producto 
    productosArray.push(producto);
} else {
    //convierto el json en JS.
    productosArray = JSON.parse(listaProductosJson);

    //debo verificar si el producto ya está en el carrito.
    for(let i = 0; i < productosArray.length && !encontrado; i++) {
        let productoEnArray = productosArray[i];
        encontrado = usuario.email == productoEnArray.email;
        if (encontrado) {
            console.log('el producto ya está en carrito.');
        }
    }

    productosArray.push(producto);
}

if (encontrado == false) {
    //convierto o transformo a json el array de productos
    const productosJsonAGuardar = JSON.stringify(productosArray, null, ' ');

    //escribo el archivo completo
    fs.writeFileSync('productos.json', productosJsonAGuardar);
    console.log('producto agregado al carrito');
}
