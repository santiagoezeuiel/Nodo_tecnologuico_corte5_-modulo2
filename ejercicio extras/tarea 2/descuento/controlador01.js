import {descuentoCompra} from './modulo01.js';


window.onload = () => {

    //Comprobar que el controlador esta funcioanndo correctamente.
    console.log(`El controlador 01.js esta funcionando correctamente`);

    //Lebantar los componentes del DOM.
    const montoCompra = document.getElementById("idnumero");
    const botonCalcular = document.getElementById("idcalcular");
    const resultado = document.getElementById("idresultado");

    //Ver que lso componentes del DOM esta funcionando correctamente.
    console.log(montoCompra);
    console.log(botonCalcular);
    console.log(resultado);

    //Crear el evento click del boton calcular.
    botonCalcular.onclick = () => {

        //leer el volor del monto de compra.
        let monto = parseFloat(montoCompra.value);

        if (monto <= 0 || isNaN(monto))
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
                letter-spacing: 1px;"> Ingre el monto del producto </span>`;
            return;
        }

        const resultado = descuentoCompra(monto);

        

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
                Monto de la compra: 
                <strong style="color:#0b6623;">${resultado.montoCompra}</strong><br>
                Monto de descuento:
                <strong style="color:#0b6623;">${resultado.descuento}</strong><br>
                Monto a cobrar:
                <strong style="color:#0b6623;">${resultado.montoFinal}</strong><br>
            </p>
        `;



    }

    montoCompra.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            botonCalcular.click();
        }
    });
}