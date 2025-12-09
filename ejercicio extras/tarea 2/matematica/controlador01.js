import {suma, resta, multiplicacion, divicion} from './modulo.js';



window.onload = () => {

    //Comprobar que el controlar esta funcionando
    console.log(`El controlador esta funcionando`)

    //Tomar los elementos del Html
    const idnumero1 = document.querySelector(`#idnumero1`);
    const idnumero2 = document.querySelector(`#idnumero2`);
    const idcalcularSuma = document.querySelector(`#idcalcularSuma`);
    const idcalcularResta = document.querySelector(`#idcalcularResta`);
    const idcalcularmultiplicacion = document.querySelector(`#idcalcularmultiplicacion`);
    const idcalculardivicion = document.querySelector(`#idcalculardivicion`);
    const idresultado = document.querySelector(`#idresultado`);
    
    
    //Comprobar que los elementos capturados estan funcionando
    console.log(idnumero1);
    console.log(idnumero2);
    console.log(idcalcularSuma);
    console.log(idcalcularResta);
    console.log(idcalcularmultiplicacion);
    console.log(idcalculardivicion);
    console.log(idresultado);

    //Crear el evento click de suma
    idcalcularSuma.onclick = () => {

        const numero1 = parseInt(idnumero1.value);
        const numero2 = parseInt(idnumero2.value);

        if (isNaN(numero1) || isNaN(numero2))
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
                letter-spacing: 1px;">Ingrese un numero</span>`;
            return;
        }

        const resultado = suma(numero1, numero2)

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
                Resultado de la Suma: 
                <strong style="color:#0b6623;">${resultado.toFixed(2)}</strong><br>
            </p>
        `;
    }

    //Crear evento de click de la resta
    idcalcularResta.onclick = () => {

        const numero1 = parseInt(idnumero1.value);
        const numero2 = parseInt(idnumero2.value);

        if (isNaN(numero1) || isNaN(numero2))
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
                letter-spacing: 1px;">Ingrese un numero</span>`;
            return;
        }

        const resultado = resta(numero1, numero2)

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
                Resultado de la Suma: 
                <strong style="color:#0b6623;">${resultado.toFixed(2)}</strong><br>
            </p>
        `;
    }

    //Crear el evento click de la multiplicacion
    idcalcularmultiplicacion.onclick = () => {

        const numero1 = parseInt(idnumero1.value);
        const numero2 = parseInt(idnumero2.value);

        if (isNaN(numero1) || isNaN(numero2))
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
                letter-spacing: 1px;">Ingrese un numero</span>`;
            return;
        }

        const resultado = multiplicacion(numero1, numero2)

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
                Resultado de la Suma: 
                <strong style="color:#0b6623;">${resultado.toFixed(2)}</strong><br>
            </p>
        `;
    }

    idcalculardivicion.onclick = () => {

        const numero1 = parseInt(idnumero1.value);
        const numero2 = parseInt(idnumero2.value);

        if (isNaN(numero1) || isNaN(numero2))
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
                letter-spacing: 1px;">Ingrese un numero</span>`;
            return;
        }

        if (numero2 === 0)
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
                letter-spacing: 1px;">La dicion da error </span>`;
            return;
        }

        const resultado = divicion(numero1, numero2)

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
                Resultado de la Suma: 
                <strong style="color:#0b6623;">${resultado.toFixed(2)}</strong><br>
            </p>
        `;

    }
    

}