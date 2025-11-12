import { importeGanancia } from "./modulo01.js";

window.onload = () => {

    const MARGEN = 30;

    console.log("la aplicacion esta corriendo");

    const idputProducto = document.querySelector('#idproducto');
    const idbotonCalcular = document.querySelector('#idbotonCalcular');

    console.log(idputProducto)
    console.log(idbotonCalcular)

    
    idbotonCalcular.onclick = () => {
        let importe = parseInt(idputProducto.value, 10);

        // Paso 2: Verificar que sea un número válido
        if (isNaN(importe) || importe <= 0) {
            // Si no es válido, mostrar error
            document.getElementById('resultadoPrecio').innerHTML = 
                "Ingresa un número válido";
            return;
        }
        
        // Paso 3: Calcular el precio final
        let importeFinal = importeGanancia(importe, MARGEN);
        
        // Paso 4: Mostrar el resultado en el HTML
        document.getElementById('resultadoPrecio').innerHTML = 
            `El precio del producto es: <strong style='color:black;'>$ ${importeFinal}</strong>`;
    }

    // Obtener el nombre del archivo actual (por ejemplo: "index05.html")
    const paginaActual = window.location.pathname.split("/").pop();

    // Seleccionar todos los enlaces con clase btn-rectangular
    const enlaces = document.querySelectorAll(".btn-rectangular");

    // Recorrer cada enlace
    enlaces.forEach(enlace => {
        const href = enlace.getAttribute("href");
        
        // Si coincide con la página actual, aplicar la clase btn-activo
        if (href === paginaActual) {
            enlace.classList.add("btn-activo");
        }
    });

}