import {sumarNotas} from './modulo01.js';


window.onload = () => {

    //Comprobar que el controlador esta funcionado correctamente.
    console.log('El controlador 01 esta funcionando corrextamente');


    //Tomar los elementos del DOM
    const calcular = document.querySelector("#idcalcular");
    const idresultado = document.querySelector('#idresultado');
    const inputNota = document.querySelectorAll('.nota');

    //Comprobar que los elementos compturados estan funcionando correctamente,
    console.log(calcular);
    console.log(idresultado);
    console.log(inputNota);

    calcular.onclick = () => {

        let notas = [];
        let esValido = true;

        inputNota.forEach(input => {
            const valor = parseFloat(input.value);

            if (isNaN(valor) || valor <= 0 || valor > 10)
            {
                esValido= false;
            }
            else
            {
                notas.push(valor);
            }

            
        })

        if (!esValido)
            {
                idresultado.innerHTML = `<span style="color: #f80808ff; 
                font-size: 32px; 
                font-family: 'Montserrat', sans-serif; 
                font-weight: 700; 
                text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
                background: rgba(12, 12, 12, 0.47);
                border: 2px solid #ff4d4d;
                padding: 10px 20px;
                border-radius: 10px;
                display: inline-block;
                margin-top: 10px;
                letter-spacing: 1px;"> Las nota ingresada son incorrectas </span>`;
                return;
            }

        const resultado = sumarNotas(notas);

        idresultado.innerHTML = `
            <p style="
                font-size: 22px; 
                color: #020202ff; 
                background: linear-gradient(135deg, #f3ececff, #e5f0e6ff);
                text-align: left;
                border: 2px solid #000000ff;
                padding: 15px 20px;
                border-radius: 10px;
                font-family: 'Segoe UI', sans-serif;
                font-weight: 600;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                display: inline-block;
            ">
                El la suma de todas las notas es: 
                <strong style="color:#0b6623;">${resultado.suma}</strong><br>
                El promedio de las notas:
                <strong style="color:#0b6623;">${resultado.promedio}</strong><br>
            </p>
        `;
    }
}
