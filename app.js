// const Marca =  require('./Marca');
const Producto = require('./Producto');
const  Carrito = require('./Carrito');
const  fs =  require('fs');

let marca1 = new Marca('Ritz', 'Orion');
let marca2 = Marca('e', 'Trumpeter');

let p1 = new Producto('pan', 10, 'a', marca1);
let p2 = new Producto('fibron', 50, marca2);


let cart = new Carrito();

cart.agregarProducto(p1);
cart.agregarProducto(p2);

console.log(cart.aplicarDescuento(10));