import { actualizarCarrito } from "./actualizarCarrito.js";
import { prodCafe } from "../stock/stockCafe.js";

const contenedorCarrito = document.getElementById('carrito-contenedor');
let carritoDeCompras = [];

export const carritoIndex = (productoId) => {
  carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) || []
  
  
    let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);
    contarProductosRepetidos(productoRepetido, productoId);
    eliminarProductoCarrito(productoId);
}

export const eliminarProductoCarrito = (productoId) => {
    let botonEliminar = document.getElementById(`eliminar${productoId}`);
    botonEliminar.addEventListener('click', () => {
        Swal.fire({
            title: '¿Eliminar del carrio?',
          
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                botonEliminar.parentElement.remove();
        carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
        actualizarCarrito(carritoDeCompras);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Producto eliminado'
          })
            }
          })
        
    });
}

const contarProductosRepetidos = (prodRepetido, productoId) => {
    if (prodRepetido) {
        prodRepetido.cantidad++
            document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.cantidad}</p>`;
        actualizarCarrito(carritoDeCompras);
    } else {
        renderProductosCarrito(productoId);
    }
}

const renderProductosCarrito = (productoId) => {
    let producto = prodCafe.find(producto => producto.id == productoId);
    carritoDeCompras.push(producto);
    producto.cantidad = 1;
    let div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = ` <div class="container ">
                          <div class="row">
                          <div class="col-2" ><span class="card-carrito"><img src=${producto.img} class="card-carrito">  </span></div>
                          <div class="col-2"> <p>${producto.nombre}</p></div>
                          <div class="col-2"><p>${producto.precio}</p></div>
                          <div class="col-2"> <p id=cantidad${producto.id}>${producto.cantidad}</p></div>
                          <div class="col-2"><button id= eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button></div>
                        </div>
                      </div>   
                  `
    contenedorCarrito.appendChild(div);
    actualizarCarrito(carritoDeCompras);
}