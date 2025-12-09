import {calcularLosImpuestos} from './modulo01.js';


window.onload = () => {

    //Comprobar que el controlador esta fincionando correctamente.
    console.log('El controlar01.js esta funcionando correctamente');

    //levantar los componente del DOM.
    const montoLuz = document.getElementById("idnumero01");
    const montoInternet = document.getElementById("idnumero02");
    const montoAgua = document.getElementById("idnumero03");
    const botonCalcular = document.getElementById("idcalcular");
    const resultado = document.getElementById("idresultado");

    
    //ver que los componentes del DOM estan funcionando correctamente.
    console.log(montoLuz);
    console.log(montoInternet);
    console.log(montoAgua);
    console.log(botonCalcular);
    console.log(resultado);


    //Crear el evento click del boton calcular.
    botonCalcular.onclick = () => {

        //leer los valores de los montos.
        let luz = parseFloat(montoLuz.value);
        let internet = parseFloat(montoInternet.value);
        let agua = parseFloat(montoAgua.value);

        if (luz <= 0 || isNaN(luz) || internet <= 0 || isNaN(internet) || agua <= 0 || isNaN(agua))
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

        const resultado = calcularLosImpuestos(luz, internet, agua);

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
                Monto a pagar de Luz: 
                <strong style="color:#0b6623;">${resultado.nuevoMontoLuz}</strong><br>
                Total de aumeto Luz: 
                <strong style="color:#0b6623;">${resultado.aumetoDeLuz}%</strong><br>
                Monto a pagar Internet:
                <strong style="color:#0b6623;">${resultado.nuevoMontoInternet}</strong><br>
                Total aumetno Internet: 
                <strong style="color:#0b6623;">${resultado.aumentoDeInternet}%</strong><br>
                Monto a pagar Agua:
                <strong style="color:#0b6623;">${resultado.nuevoMontoAgua}</strong><br>
                total aumentoAgua: 
                <strong style="color:#0b6623;">${resultado.aumetoDeAgua}%</strong><br>
                Monto total a Pagar:
                <strong style="color:#0b6623;">${resultado.montoTotal}</strong><br>
            </p>
        `;
    } 

    [montoLuz, montoInternet, montoAgua].forEach(input => {
        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                botonCalcular.click();
            }
        });
    });
}