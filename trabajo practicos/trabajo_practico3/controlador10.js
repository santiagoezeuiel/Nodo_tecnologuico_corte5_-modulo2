import {contadorEspacios} from './modulo09.js'



window.onload = () => {

    //Comprobar en la consola si esta tomando el controlado 10 en el html
    console.log(`El controlador 10 esta funcionado`);

    //Capturar los elementos del html
    const idtexto = document.querySelector(`#idtexto`);
    const idcalcular = document.querySelector(`#idcalcular`);
    const idresultado = document.querySelector(`#idresultado`);

    //Comprobar en la consle que se captura los elementos del html 
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

        // Llamamos a la función
        const resultado = contadorEspacios(texto);

        // Mostramos el resultado en el HTML
        if (resultado) {
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
                    <span style="color:green;">El texto tiene "3" espacios o más</span><br>
            </p>`;
        } else {
            idresultado.innerHTML = `
            <p style="
                    font-size: 22px; 
                    color: #ff0000ff; 
                    background: linear-gradient(135deg, #d4edda, #c3e6cb);
                    border: 2px solid #a72828ff;
                    padding: 15px 20px;
                    border-radius: 10px;
                    font-family: 'Segoe UI', sans-serif;
                    font-weight: 600;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    display: inline-block;
                "> 
                    <span style="color:#ff0000ff;">El texto no tiene mas de "3" espacios.</span<br>
            </p>`;
        }

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