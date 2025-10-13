/*
Ejercicio Nro. 09:
Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los comprobantes 
a los clientes que circulan por las autopistas concesionadas por la empresa, 
para ello se necesita realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera.
Los precios establecidos son los siguientes
•
CAMION = 22.000,00 PESOS
•
CAMIONETA = 12.000,00 PESOS
•
AUTOMOVIL = 4.000,00 PESOS
•
MOTOS = 1.500,00 PESOS
La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral 
realizar el cierre donde le deberá mostrar la siguiente información.
•
Cantidad de AUTOS
•
Total Cobrado de AUTOS
•
Cantidad de CAMIONETAS
•
Total de CAMIONETAS
•
Cantidad de AUTOMOVILES
•
Total de Automóviles
•
Cantidad de MOTOS
•
Total de MOTOS
•
Total GENERAL cobrado.
Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma cantidad. Compare estas cantidades únicamente entre autos y camionetas.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.
*/

{
    //Precio de los peajes segun el rodado

    const PRECIO_CAMIONES = 22000;
    const PRECIO_CAMIONETA = 12000;
    const PRECIO_AUTOMOVIL = 4000;
    const PRECIO_MOTOCICLETA = 1500;

    //Variables para la cantidad de veiculo
    let cantiadadCamion = 0;
    let cantiadadCamioneta = 0;
    let cantidadAutomovil = 0;
    let cantidadMoto = 0;

    //Variable de total de ganancias
    let totalCamion = 0;
    let totalAutomovil = 0;
    let totalCamioneta = 0;
    let totalMotocicleta = 0;

    console.log(`\n`)//Salto de linea
    console.log(`♫ Sistema de Peaje Sur sa. ♫`)  //Titulo encabezado
    console.log(`\n` + "*".repeat(30)) //salto de linea

    // Bucle FOR para el control de jornada

    for (let veiculosNumero = 1; ; veiculosNumero++)
    {
        //Menu de opciocione de Veiculos y fin de Jornada

        console.log(`\n Veiculo #$${veiculosNumero}`);
        console.log(`Seleccionar el tipo de vehículo`);
        console.log(`1 CAMIÓN = $ 22,000.00`);
        console.log(`2 CAMIONETA = $ 12,000.00`);
        console.log(`3 AUTOMÓVIL = $ 4,000.00`);
        console.log(`4 MOTOCICLETAS = $ 1,500.00`);
        console.log(`5 FIN DE JORNADA`);

        //promp para ingresar el menu de la jornada

        let opcion = prompt(`Ingrese la opción para el veiculo #${veiculosNumero} (1-5):`);

        // Condicion para salir del bucle y finalizar la jornada

        if (opcion === "5")
        {
            console.log(`\n`)
            console.log(`FINALIZACION DE LA JORNADA LABORAL`)
            break;
        }

        // Selector de las opciones del menu

        switch (opcion)
        {
            case "1" :
                cantiadadCamion ++; //Contador de camiones 
                totalCamion += PRECIO_CAMIONES; // Suma el precio de los camiones ingresados
                console.log(`CAMÍON registrado -- $ ${PRECIO_CAMIONES}`);//Me muestras si el camion fue registrado
                break; // Fin del caso N 1

            case "2" :
                cantiadadCamioneta ++; //Contador de camionetas 
                totalCamioneta += PRECIO_CAMIONETA; //Suma el precio de las camionetas ingresadas 
                console.log(`CAMIONETA registrada --$ ${PRECIO_CAMIONETA}`); //Muestra si la camioneta fue registrada
                break; //Fin de caso N 2

            case "3":
                cantidadAutomovil ++; //Contador de los automoviles
                totalAutomovil += PRECIO_AUTOMOVIL;// Suma el precio de los automoviles ingresados
                console.log(`AUTOMOVIL registrado -- $ ${PRECIO_AUTOMOVIL}`);// Muestra si lo automoles fue ingresado
                break;//Fin del caso N 3

            case "4":
                cantidadMoto ++;//Contador de las motoscicletas
                totalMotocicleta += PRECIO_MOTOCICLETA;// SUma el precio de las Motocicletas ingresadas
                console.log(`MOTOCICLETA registrada -- $ ${PRECIO_MOTOCICLETA}`);// Muesta si las Motocicletas fue ingresado
                break;//Fin del caso N 4
            
            default:
                console.log(`\n`) //salto de linea
                console.log("X".repeat(30))
                console.log(` Opción invalida. Por favor selecione del (1 - 5)`); //Mensaje de error
                console.log("X".repeat(30))
        }

        //Mostrar un resumen parcial de la jornada

        if (opcion >= "1" && opcion <= 4)
        {
            console.log(`\n Resumen actualizado`);
            console.log(`Camiones: ${cantiadadCamion} - $ ${totalCamion}`);
            console.log(`Camionetas: ${cantiadadCamioneta} - $ ${totalCamioneta}`);
            console.log(`Automoviles: ${cantidadAutomovil} - $ ${totalAutomovil}`);
            console.log(`Motos: ${cantidadMoto} - $ ${totalMotocicleta}`);

            let totalParcial = totalCamion + totalCamioneta + totalAutomovil + totalMotocicleta;
            console.log(`TOTAL PARCIAL: $ ${totalParcial}`);
        }
    }

    //Clculo General

    let totalGeneral = totalCamion + totalCamioneta + totalAutomovil + totalMotocicleta;
    let totalVehiculos = cantiadadCamion + cantiadadCamioneta + cantidadAutomovil + cantidadMoto;

    // Mostrar el reporte final

    console.log(`\n` + `*`.repeat(30));
    console.log(`INFIRME FINAL DE JORNADA LABORAL`);
    console.log(`\n` + `*`.repeat(30));

    console.log(`\n`)
    console.log(`CAMIONES: ${cantiadadCamion} - TOTAL: $ ${totalCamion}`);
    console.log(`CAMIONETAS: ${cantiadadCamioneta} - TOTAL: $ ${totalCamioneta}`);
    console.log(`AUTOMOVILES: $${cantidadAutomovil} - TOTAL: $ ${totalAutomovil}`);
    console.log(`MOTOCICLETAS: ${cantidadMoto} - TOTAL: $ ${totalMotocicleta}`);
    console.log(`\n` + `*`.repeat(30));
    console.log(`Cantidada de Vehiculos ingresados: ${totalVehiculos}`);
    console.log(`Total general de ganancias: ${totalGeneral}`);
    console.log(`\n` + `*`.repeat(30));

    //Comparacion entre autos y camionetas

    console.log(`\n Comparacion entre AUTOS Y CAMIONETAS`);
    console.log(`\n` + `=`.repeat(30));

    if (cantidadAutomovil > cantiadadCamioneta)
    {
        console.log(`Pasaron mas Autos que Camionetas`);
        console.log(`Autos: ${cantidadAutomovil} vs camionetas: ${cantiadadCamioneta}`);
        console.log(`La diferencia es de ${cantidadAutomovil - cantiadadCamioneta} Vehiculos`);
    }
    else if (cantiadadCamioneta > cantidadAutomovil)
    {
        console.log(`Pasaron mas Camionetas que Autos`);
        console.log(`Camionetas: ${cantiadadCamioneta} vs autos: ${cantidadAutomovil}`);
        console.log(`La diferencia es de ${cantiadadCamioneta - cantidadAutomovil} Vehiculos`);
    }
    else
    {
        console.log(`Pasaron de misma cantidad de autos y camionetas`);
        console.log(`Autos:  ${cantidadAutomovil}, Caionetas: ${cantiadadCamioneta}`);
    }

    //Estadisticas

    console.log(`\n Estadisticas`);
    console.log(`Porcentaje de Camiones ${((cantiadadCamion / totalVehiculos) * 100).toFixed(1)}%`);
    console.log(`Porcentaje de Camionetas ${((cantiadadCamioneta / totalVehiculos) * 100).toFixed(1)}%`);
    console.log(`Porcentaje de Autos ${((cantidadAutomovil / totalVehiculos) * 100).toFixed(1)}%`);
    console.log(`Porcentaje de Motos ${((cantidadMoto / totalVehiculos) * 100).toFixed(1)}%`);

    cosnole.log(`\n` + `=`.repeat(30));
    cosnole.log(`FINALIZACION DE JORNADA LABORAL ¡Hata mañana!`);
    console.log(`\n` + `=`.repeat(30));
    
}

//PPEQLE