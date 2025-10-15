/*
Ejercicio Nro. 11:
El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. 
que tiene en STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta
y el precio de los mismos es el siguiente:
1) Amarok V6 (Oferta: 65.000.000)
2) TAOS 53.000.000
3) Polo Nuevo 47.000.000
El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes)
1ro) Selecciona el Vehículo de interés
2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, 
sabiendo que el dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.
3ro) El Sistema debe calcular la financiación del dinero restante a pagar, 
sabiendo que la diferencia a pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; 
esa diferencia será financiada de la siguiente forma:
12 cuotas - 9.9 % ANUAL
Diplomatura Universitaria en Desarrollo Web
Full Stack con JavaScript
Módulo: JavaScript
24 cuotas - 22 % ANUAL
36 cuotas - 33 % ANUAL
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, 
sin interacción con el DOM y cargar los datos de entrada por medio de prompt.
*/

{

    //Constante de los veiculos en stock
    const VEHICULOS =[
        {nombre:"Amarok v6", precio: 65000000, oferta: true},
        {nombre:"TAOS", precio: 53000000, oferta: true},
        {nombre:"Polo Nuevo", precio: 47000000, oferta: true}
    ];


    // Constante de las tazas financiera
    const TASAFINANCIACION = {
        12: 9.9, //Tasa financiera en 12 meses del 9.9%
        24: 22, //Tasa financiera en 25 meses del 22%
        36: 33, //tasa financiera en 36 meses del 33%
    };


    console.log("--CONCESIONARIA - SISTEMA DE FINANCIACIÓN--");
    console.log("===========================================");
    console.log("VEHÍCULOS DISPONIBLES EN STOCK:");
    console.log("===========================================");

    // Mostrar vehículos disponibles en un listado con el nombre y si estan de ofertas
    VEHICULOS.forEach((VEHICULOS, index) => {
        let ofertaTexto = VEHICULOS.oferta ? "(Oferta)" : "";
        console.log(`${index + 1}) ${VEHICULOS.nombre} - $${VEHICULOS.precio.toLocaleString()} ${ofertaTexto}`);
    });

    //salto de linea
    console.log("===========================================\n");


    let vehiculoSeleccionado = null;
    let seleccionValida = false;

    //seleccion de veiculos
    while(!seleccionValida){
        let opcion = prompt(`--Seleccione el vehículo de su interes (1-3)--`);

        switch (opcion)
        {
            case "1":

                vehiculoSeleccionado = VEHICULOS[0];
                seleccionValida = true;
                break;

            case "2":

                vehiculoSeleccionado = VEHICULOS[1];
                seleccionValida = true;
                break;

            case "3":

                vehiculoSeleccionado = VEHICULOS[2];
                seleccionValida = true;
                break;

            default:

                console.log(`xx--Opción inválida, por favor seleccione del (1-3)--xx`);

        }
    } 

    //Mostrar el vehiculo seleccionado con el precio del mismo 
    console.log(`\n` + `=`.repeat(40));
    console.log(`Vehiculo seleccionado: ${vehiculoSeleccionado.nombre} precio: $ ${vehiculoSeleccionado.precio.toLocaleString()}`);
    console.log(`=`.repeat(30));


    let entregaDeDinero = 0;
    let dineroValido = false;

    let minimoRequirido = vehiculoSeleccionado.precio * 0.3; //El 0.3 = a 30%

    console.log(`\n Requisitos: debe de hacer una entrega de $ ${minimoRequirido.toLocaleString()} (30%) 
    o entrega total de $${vehiculoSeleccionado.precio.toLocaleString()} (100%)`)

    while (!dineroValido){   
        let input = prompt(`Ingresar el dinero disponible para la compra. Monto minimo solicitado:
             $${minimoRequirido.toLocaleString()}`);
        entregaDeDinero = parseFloat(input);

        if (isNaN(entregaDeDinero))
        {
            console.log(`--Error: Debe ingresar un número válido`);
        }
        else if (entregaDeDinero < minimoRequirido)
        {
            console.log(`Error: El dinero entregado( $ ${entregaDeDinero.toLocaleString()} es menor al 30%
            requirido el mínimo es de ($ ${minimoRequirido.toLocaleString()}`)
        }
        else if (entregaDeDinero > vehiculoSeleccionado.precio)
        {
            console.log(`Error: El dinero entregado $${entregaDeDinero.toLocaleString()} super el precio
                del veiculo $${vehiculoSeleccionado.precio()}`);
        }
        else
        {
            dineroValido = true;
            console.log(`\n Dinero para la entrega: $ ${entregaDeDinero.toLocaleString()}`);
        }
    }

    //Calcular el monto a financiar de los vehículos
    const MONTOFINACIAR = vehiculoSeleccionado.precio - entregaDeDinero;
    const PORCENTAJEFINANCIADO = (MONTOFINACIAR / vehiculoSeleccionado.precio) * 100;

    //Mostrar el resumen de la compra antes de hacer el plan de financiamiento
    console.log(`\n` + `=`.repeat(40));
    console.log(`RESUMEN DE LA OPERACION:`);
    console.log(`*`.repeat(40));
    console.log(`Vehículo: ${vehiculoSeleccionado.nombre}`);
    console.log(`Precio: $${vehiculoSeleccionado.precio.toLocaleString()}`);
    console.log(`Dinero entregado: ${entregaDeDinero.toLocaleString()}`);
    console.log(`Monto a financiar: ${MONTOFINACIAR.toLocaleString()}`);
    console.log(`Porcentaje a financiar: ${PORCENTAJEFINANCIADO.toFixed(1)}%`)

    console.log(`\n` + `=`.repeat(40));
    console.log(`OPCIONES DE FINANCIAMIENTO DISPONIBLES`);
    console.log(`*`.repeat(40));

    Object.keys(TASAFINANCIACION).forEach(plazo =>{
        let tasa = TASAFINANCIACION[plazo];
        console.log(`${plazo} cuotas - ${tasa}% TASA ANUAL`);
    });

    let planSeleccionado = null;
    let planValido = false;

    while (!planValido){
        let opcion  = prompt(`Seleccionar el plan de financiación (12, 24 o 36) cuotas`);

        if(Object.keys(TASAFINANCIACION).includes(opcion))
        {
            planSeleccionado = parseInt(opcion);
            planValido = true;
        }
        else
        {
            console.log(`Opción invalida. Por favor selecione 12, 24 o 36 cuotas.`);
        }
    }

    //calculos de la financicion
    const TASAANUAL = TASAFINANCIACION[planSeleccionado];
    const TASAMENSUAL = TASAANUAL / 12 / 100;

    const CUOTASMENSUAL = MONTOFINACIAR * (TASAMENSUAL * Math.pow(1 + TASAMENSUAL, planSeleccionado)) / (Math.pow(1 + TASAMENSUAL, planSeleccionado)-1);

    const TOTALAPAGAR = CUOTASMENSUAL * planSeleccionado;
    const INTERESTOTALES = TOTALAPAGAR - MONTOFINACIAR;


    //Mostrar los detalles de financiacion
    console.log(`\n`+`=`.repeat(40));
    console.log(`DETALLE DE LA FINANCIACIÓN DEL VAHÍCULO`);
    console.log(`*`.repeat(40));
    console.log(`Vehículo: ${vehiculoSeleccionado.nombre}`);
    console.log(`Precio del vehículo: $${vehiculoSeleccionado.precio.toLocaleString()}`);
    console.log(`Dinero entregado: $${entregaDeDinero.toLocaleString()}`);
    console.log(`Monto financiado: $${MONTOFINACIAR.toLocaleString()}`);
    console.log(`Plan seleccionado: ${planSeleccionado} cuotas`);
    console.log(`Tasa anual: ${TASAANUAL}%`);

    console.log(`\n` + `=`.repeat(40))
    console.log(`DETALLE DE PAGOS`);
    console.log(`*`.repeat(40));
    console.log(`Cuota mensual: $ ${CUOTASMENSUAL.toLocaleString()}`);
    console.log(`total a pagar: $ ${TOTALAPAGAR.toLocaleString()}`);
    console.log(`Interes total: $ ${INTERESTOTALES.toLocaleString()}`);
    console.log(`=`.repeat(40));


    //Simulador de cuotas a pagar
    for (let i = 1; i <= planSeleccionado; i++)
    {
        console.log(`Cuota ${i}: $ ${CUOTASMENSUAL.toLocaleString()}`);
    }

    console.log("\n" + "=".repeat(60));
    console.log("¡Financiación por su compra!");
    console.log("=".repeat(60));
}