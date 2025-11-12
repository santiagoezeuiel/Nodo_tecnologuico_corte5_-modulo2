import {obtenerTasa} from "./modulo02.js";


window.onload = () => {

    //Mostrar que el controlador esta funcionando
    console.log("la aplicacion esta corriendo controlador 3");

    //Obtener los elementos del html
    const idtipo = document.querySelector('#idtipo');
    const idimporte = document.querySelector('#idimporte'); 
    const idcalcular = document.querySelector('#idcalcular');
    const resultado = document.querySelector('#resultado');

    //Mostrar los elementos que se estan utilizando
    console.log(idtipo)
    console.log(idimporte)
    console.log(idcalcular)
    console.log(resultado)


    idcalcular.onclick = () =>{

        let importe = parseInt(idimporte.value);

        if (isNaN(importe) && importe >= 0)
        {
            resultado.innerHTML  ="Ingrese un número válido"
            return;
        }

        const tasa = obtenerTasa(idtipo.value);
        const sobretasa = importe * tasa;
        const importeTotal = importe + sobretasa

        //controlar que es lo que me trae cada elemento
        console.log(importe)
        console.log(tasa);
        console.log(sobretasa);
        console.log(importeTotal)

        resultado.innerHTML = `
          <div>
            <span class="importe">Importe base:</span> $${importe.toFixed(2)}<br>
            <span class="sobretasa">Sobretasa (impuesto):</span> $${sobretasa.toFixed(2)}<br>
            <span class="total">Importe total:</span> $${importeTotal.toFixed(2)}
          </div>
        `;
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