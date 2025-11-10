import {calcularInsulina} from "./modulo06.js"


window.onload = () => {

    //Comprovar que el controlador esta fujncioand en el html
    console.log(`El controlador 07 esta funcionado`);

    //capturare los elementos del html
    const idglucosa = document.querySelector(`#idglucosa`);
    const idpeso = document.querySelector(`#idpeso`);
    const idtipo = document.querySelector(`#idtipo`);
    const idcalcular = document.querySelector(`#idcalcular`);
    const idresultado = document.querySelector(`#idresultado`);


    //Controlar los componente en el consola del  navegador
    console.log(idglucosa);
    console.log(idpeso);
    console.log(idtipo);
    console.log(idcalcular);
    console.log(idresultado);

    //Evento de clic en el boton seleccionado
    idcalcular.onclick = () =>{

        const glucosa = parseFloat(idglucosa.value);
        const peso = parseFloat(idpeso.value);
        const tipo = idtipo.value;

        if (isNaN(glucosa) || isNaN(peso) || glucosa <= 0 || peso <= 0) 
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
                letter-spacing: 1px;">Ingrese un número válido</span>`;
                return;
            }

        const dosis = calcularInsulina(glucosa, peso, tipo);
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
                    Dosis recomendada: 
                    <strong style="color:#0b6623;">${dosis.toFixed(2)}</strong> <strong> unidades</strong><br>
            </p>`;
    }
}