import {simuladorCreditos} from './modulo01.js';


window.onload = () => {

    //Comprobar que el DOM esta cargando el controlador01 
    console.log('El controlador que simula los creditos esta funcionando correctamente');

    //Capturar los elementos del DOM
    const idmonto = document.getElementById("idmonto");
    const idcuotas = document.getElementById('idcuotas');
    const idcalcular = document.getElementById('idcalcular');
    const idresultado = document.getElementById('idresultado');

    //Verificar que los elementos del DOM se han capturado correctamente
    console.log(idmonto);
    console.log(idcuotas);
    console.log(idcalcular);
    console.log(idresultado);

    //Crear el elemento onclick para calcular las cuotas
    idcalcular.onclick = () => {

        let monto = parseFloat(idmonto.value);
        let cuotas = parseInt(idcuotas.value);
        let tasaInteres = 50; //Tasa de interes fija del 40% anual
        const maximoCuotas = 24
        let errores = [];

        // Validar los datos de entrada 
        //Con el .push agregamos los mensajes de error al array errores
        if (isNaN(monto) || monto <= 0)
        {
            errores.push("El monto ingresado es invalido");
        }

        if (isNaN(cuotas) || cuotas <= 0)
        {
            errores.push("La cantidad de cuotas es invalida")
        }

        if (cuotas >= maximoCuotas)
        {
            errores.push("Las cantidad de cuotas no puede ser mayor a " + maximoCuotas);
        }

        if (errores.length > 0)
        {
            idresultado.innerHTML = mensajeError(errores.join("<br>"));
            return;
        }

        function mensajeError(texto)
        {
            return `<span style="color: #f80808ff; 
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
                letter-spacing: 1px;">${texto}</span>`;
        }

        
        const resultado = simuladorCreditos(monto, cuotas, tasaInteres);
        const cuotaMensual = resultado.planPagos[0].cuotasMensual;

        // Crear la tabla de cuotas
        let tablaHTML = `
            <div style="margin-bottom: 30px;">
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
                    Monto del crédito: <strong style="color:#0b6623;">$${monto.toFixed(2)}</strong><br>
                    Cantidad de cuotas: <strong style="color:#0b6623;">${cuotas.toFixed(2)}</strong><br>
                    Tasa de interés anual: <strong style="color:#0b6623;">${tasaInteres}%</strong><br>
                    Cuota mensual: <strong style="color:#0b6623;">$${cuotaMensual.toFixed(2)}</strong><br>
                    Total a pagar: <strong style="color:#0b6623;">$${resultado.totalPagos.toFixed(2)}</strong><br>
                    Total intereses: <strong style="color:#0b6623;">$${resultado.totalInteres.toFixed(2)}</strong>
                </p>
            </div>

            <h3 style="color: #2c3e50; font-family: 'Segoe UI', sans-serif; margin-bottom: 15px;">
                 Plan de Pagos Detallado
            </h3>
            
            <div style="overflow-x: auto;">
                <table style="
                    width: 100%;
                    border-collapse: collapse;
                    background: white;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    font-family: 'Segoe UI', sans-serif;
                ">
                    <thead>
                        <tr style="background: linear-gradient(135deg, #2c3e50, #34495e); color: white;">
                            <th style="padding: 15px; text-align: center; border: 1px solid #34495e;">
                            Cuota #
                            </th>
                            <th style="padding: 15px; text-align: center; border: 1px solid #34495e;">
                            Cuota Mensual
                            </th>
                            <th style="padding: 15px; text-align: center; border: 1px solid #34495e;">
                            Interés
                            </th>
                            <th style="padding: 15px; text-align: center; border: 1px solid #34495e;">
                            Amortización
                            </th>
                            <th style="padding: 15px; text-align: center; border: 1px solid #34495e;">
                            Saldo Restante
                            </th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        // Agregar cada fila de cuota
        resultado.planPagos.forEach(cuota => {
            const estiloFila = cuota.numeroCuota % 2 === 0 
                ? "background: #c0c1c2ff;" 
                : "background: #bebebe59;";

            tablaHTML += `
                <tr style="${estiloFila}">
                    <td style="padding: 12px; text-align: center; 
                    border: 1px solid #e0e0e0; color: #000307ff; font-weight: 600;">${cuota.numeroCuota}</td>
                    <td style="padding: 12px; text-align: center; 
                    border: 1px solid #e0e0e0; color: #2c3e50; font-weight: 600;">$${cuota.cuotasMensual.toFixed(2)}</td>
                    <td style="padding: 12px; text-align: center; 
                    border: 1px solid #e0e0e0; color: #e74c3c;">$${cuota.interes.toFixed(2)}</td>
                    <td style="padding: 12px; text-align: center; 
                    border: 1px solid #e0e0e0; color: #27ae60;">$${cuota.amortizacion.toFixed(2)}</td>
                    <td style="padding: 12px; text-align: center; 
                    border: 1px solid #e0e0e0; color: #2980b9; font-weight: 600;">$${cuota.saldoRestante.toFixed(2)}</td>
                </tr>
            `;
        });

        tablaHTML += `
                    </tbody>
                </table>
            </div>
        `;

        idresultado.innerHTML = tablaHTML;
        
    }

    idcalcular.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            idcalcular.click();
        }
    });
}