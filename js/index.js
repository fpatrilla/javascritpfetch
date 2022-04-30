import { actualizarCarrito } from "./carrito/actualizarCarrito.js";
import { mostrarProductos } from "./App.js";
import { eliminarProductoCarrito } from "./carrito/carritoIndex.js";



const contenedorCarrito = document.getElementById('carrito-contenedor');
let carritoStorage = [];

document.addEventListener("DOMContentLoaded", () => {

    mostrarProductos();

    if (localStorage.getItem("carrito")) {
        carritoStorage = JSON.parse(localStorage.getItem("carrito"))
        carritoStorage.map((producto) => {
            let div = document.createElement('div');
            div.classList.add('productoEnCarrito');
            div.innerHTML = ` <div class="container">
            <div class="row">
            <div class="col-2" class="kart"><span class="card-carrito"><img src=${producto.img} class="card-carrito">  </span></div>
            <div class="col-2"> <p>${producto.nombre}</p></div>
            <div class="col-2"><p>${producto.precio}</p></div>
            <div class="col-2"> <p id=cantidad${producto.id}>${producto.cantidad}</p></div>
            <div class="col-2"><button id= eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button></div>
          </div>
        </div>   
                      `
            contenedorCarrito.appendChild(div);

            actualizarCarrito(carritoStorage);
            eliminarProductoCarrito(producto.id)
        })
    }
})