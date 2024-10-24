const botonRojo = document.getElementById('botonRojo');
const botonAzul = document.getElementById('botonAzul');
const botonVerde = document.getElementById('botonVerde');
const body = document.body;


function cambiarFondo(colorFondoBody, colorFondoContenedor) {
    body.style.backgroundColor = colorFondoBody;
    contenedor.style.backgroundColor = colorFondoContenedor; 
}


botonRojo.addEventListener('click', () => {
    cambiarFondo('#cd1212'); 
});

botonAzul.addEventListener('click', () => {
    cambiarFondo('#0124c3'); 
});

botonVerde.addEventListener('click', () => {
    cambiarFondo('#06d83a'); 
});
