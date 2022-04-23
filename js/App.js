import { carritoIndex } from "./carrito/carritoIndex.js";

export const mostrarProductos = (productos) => {

    const contenedorProductos = document.getElementById("cafe-content");

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class="card-image">
                                <img src=${producto.img}>
                                <span class="card-title"><h3>${producto.nombre}</h3</span>
        
                              </div>
                              <div class="card-content">
                                  <p>${producto.desc}</p>
        
                                  <p>${producto.precio}</p>
                              </div>
                              <div>
                              <a  type="button" class="btn btn-danger" id=boton${producto.id}><span>Agregar</span></spann></a>
                              </div>
        
                     `;
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
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
                title: 'Producto Agregado'
              })
              
            carritoIndex(producto.id);
        });
    });
};