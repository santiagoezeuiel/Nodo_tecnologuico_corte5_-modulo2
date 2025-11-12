import {devulocionTaza} from "./modulo05.js";


window.onload = () =>{

    //Control de que este funcinando el controlador 06
    console.log(`El controlador 06 esta funcioando`);

    // controlar la captura de los elementos del html
    const idimporte = document.querySelector(`#idimporte`);
    const idbotonCalcular = document.querySelector(`#idbotonCalcular`);
    const idresultado = document.querySelector(`#idresultado`);

    //Controlar en la consola los elementos capturados del html
    console.log(idimporte);
    console.log(idbotonCalcular);
    console.log(idresultado);

    idbotonCalcular.onclick  = () => {

        let importe = parseFloat(idimporte.value);
        
        if (isNaN(importe) || (importe < 0))
        {
            //Mostrar un mensaje de error en el html
            idresultado.innerHTML = `<span style="color: #f80808ff; 
                font-size: 32px; 
                font-family: 'Montserrat', sans-serif; 
                font-weight: 700; 
                text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
                background: rgba(172, 135, 135, 0.47);
                border: 2px solid #ff4d4d;
                padding: 10px 20px;
                border-radius: 10px;
                display: inline-block;
                margin-top: 10px;
                letter-spacing: 1px;">Ingrese un número válido</span>`;
            return;
        }

        const taza = (devulocionTaza(importe));

        // Mostrar resultado con estilo
        idresultado.innerHTML = `
            <p style="
                font-size: 22px; 
                color: #155724; 
                background: linear-gradient(135deg, #d4edda, #c3e6cb);
                border: 2px solid #28a745;
                padding: 15px 20px;
                border-radius: 10px;
                font-family: 'Segoe UI', sans-serif;
                font-weight: 600;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                display: inline-block;
            ">
                Importe a devolucion (1.2%): 
                <strong style="color:#0b6623;">$${taza.toFixed(2)}</strong><br>
                sobre un importe base de <strong>$${importe.toFixed(2)}</strong>
            </p>
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