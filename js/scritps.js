document.addEventListener('DOMContentLoaded', function() {
    // Aquí añadimos los productos al carrito

    const agregarCarritoBtns = document.querySelectorAll('.agregar-carrito');
    agregarCarritoBtns.forEach(btn => {
        btn.addEventListener('click', agregarAlCarrito);
    });

    const generarFacturaBtn = document.getElementById('generar-factura');
    generarFacturaBtn.addEventListener('click', generarFactura);
});

function agregarAlCarrito(event) {
    const producto = event.target.parentElement;
    const titulo = producto.querySelector('h3').textContent;
    const precio = producto.querySelector('p').textContent;
    const talla = producto.querySelector('select') ? producto.querySelector('select').value : 'N/A';

    const listaCarrito = document.getElementById('lista-carrito');
    const item = document.createElement('div');
    item.classList.add('item-carrito');
    item.innerHTML = `
        <p><strong>${titulo}</strong> - ${precio} - Talla: ${talla}</p>
    `;
    listaCarrito.appendChild(item);
}

function generarFactura() {
    // Generar la factura como un archivo PDF descargable
    const listaCarrito = document.getElementById('lista-carrito').innerHTML;

    const facturaContenido = `
        <h1>Factura</h1>
        <p>Gracias por su compra en PipoSport.</p>
        <div>${listaCarrito}</div>
    `;

    const facturaVentana = window.open('', '_blank');
    facturaVentana.document.write('<html><head><title>Factura</title></head><body>');
    facturaVentana.document.write(facturaContenido);
    facturaVentana.document.write('</body></html>');
    facturaVentana.document.close();
    facturaVentana.print();
}
