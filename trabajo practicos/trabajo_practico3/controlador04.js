import { facturacisoEcsapen } from "./modulo03.js";


window.onload = () => {

    console.log(`controlador 4 funcionando`)

    //Capturar los elementos del html.
    const idmetros = document.querySelector('#idmetros');
    const idbotonCalcular = document.querySelector('#idbotonCalcular');
    const idresultado = document.querySelector('#idresultado');


    //Mostrar los elementos del html en la consola del navegador.
    console.log(idmetros);
    console.log(idbotonCalcular);
    console.log(idresultado);

    idbotonCalcular.onclick = () => {

        let consumo = parseFloat(idmetros.value);

        //Validacion del valor ingresado
        if (isNaN(consumo) || consumo <= 0)
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

        let importeFinal = facturacisoEcsapen(consumo);

        idresultado.innerHTML = `
            <p style="
                font-size: 20px; 
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
                Importe base a pagar: 
                <strong style="color:#0b6623;">$${importeFinal.toFixed(2)}</strong> 
                <br>
                por un consumo de <strong>${consumo} m<sup>3</sup></strong>.
            </p>
        `;

    }
}