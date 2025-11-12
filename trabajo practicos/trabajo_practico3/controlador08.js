import {contarVocales} from "./modulo07.js"


window.onload = () => {

    //Comprobar que el controlador de esta funcionando
    console.log(`El controlador N° 8 esta funcioanndo`);

    //Capturar los elementos de html
    const idtexto = document.querySelector(`#idtexto`);
    const idcalcular = document.querySelector(`#idcalcular`);
    const idresultado = document.querySelector(`#idresultado`);

    //Controlar los componente en la consola
    console.log(idtexto);
    console.log(idcalcular);
    console.log(idresultado);

    idcalcular.onclick = () => {

        const texto = idtexto.value.trim();
    

        //Condicion para que el campo no este vacio cuando se calcula
        if (!texto)
        {
            idresultado.innerHTML = `<span style="color: #f80808ff; 
                font-size: 32px; 
                font-family: 'Montserrat', sans-serif; 
                font-weight: 700; 
                text-shadow: 2px 2px 8px rgba(255, 254, 254, 1);
                background: rgba(172, 135, 135, 0.47);
                border: 2px solid #ff4d4d;
                padding: 10px 20px;
                border-radius: 10px;
                display: inline-block;
                margin-top: 10px;
                letter-spacing: 1px;">Ingrese un Texto</span>`;
                return;
        }

        //Condicion para que solo ingresen texto en el campo idtexto
        if (!isNaN(texto))
        {
            idresultado.innerHTML = `<span style="color: #f80808ff; 
                font-size: 32px; 
                font-family: 'Montserrat', sans-serif; 
                font-weight: 700; 
                text-shadow: 2px 2px 8px rgba(255, 254, 254, 1);
                background: rgba(172, 135, 135, 0.47);
                border: 2px solid #ff4d4d;
                padding: 10px 20px;
                border-radius: 10px;
                display: inline-block;
                margin-top: 10px;
                letter-spacing: 1px;">Ingrese solo Texto</span>`;
                return;

        }
       
        const cantidad = contarVocales(texto);

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
                    El texto tiene la cantidad de vocales <span style="color: #0e0d0dff;">${cantidad.vocales}</span> vocal(es).<br> <br>
                    El texto tiene la cantidad de consonante <span style="color: #0e0d0dff;">${cantidad.consonante}</span> consonante(es).
            </p>`;
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