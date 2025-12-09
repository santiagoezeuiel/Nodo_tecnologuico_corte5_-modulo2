import {minutos} from './modulo01.js';


window.onload = () => {

    //Comprobar en la consola que el controlador esta funcionando 
    console.log(`El controlador de esta funcionando correctamente.`)

    //Capturar los elementos del html
    const idnumero = document.querySelector(`#idnumero`);
    const idcalcular = document.querySelector(`#idcalcular`);
    const idresultado = document.querySelector(`#idresultado`);

    //Comprobar en la consola que los elementos son capturados 
    console.log(idnumero);
    console.log(idcalcular);
    console.log(idresultado);


    idcalcular.onclick = () => {

        const numero = parseInt(idnumero.value);
        
        if (isNaN(numero) || numero <= 0)
        {
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
                letter-spacing: 1px;">Ingre la cantidad de dias </span>`;
            return;
        }

        const resultado = minutos(numero);

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
                Cantidad de dias: 
                <strong style="color:#0b6623;">${resultado.dias}</strong><br>
                Cantaidad de horas:
                <strong style="color:#0b6623;">${resultado.horas}</strong><br>
                Cnatidad de minutos:
                <strong style="color:#0b6623;">${resultado.minutos}</strong><br>
                Cantidad de segundos:
                <strong style="color:#0b6623;">${resultado.segundos}</strong><br>
            </p>
        `;

    }
}