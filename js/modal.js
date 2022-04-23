const modalContenedor = document.querySelector('.modal-contenedor')
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito')

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
})

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
})

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
})

// Detiene la propagación del evento click dentro del contenedor modalCarrito
modalCarrito.addEventListener('click',(e) => {
    e.stopPropagation()
})


