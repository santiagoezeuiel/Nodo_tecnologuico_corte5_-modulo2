 /*
Ejercicio Nro. 12:
Una Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. 
La cinta no tan solo los transporta sino también los clasifica según su peso. es decir, 
al final de la cinta existe una balanza electrónica de alta precisión que evalúa su peso y los clasifica.
a) XL, súper grandes: peso ≥ 73 gramos.
b) L, grandes: peso ≥ 63 gramos y < 73 gramos.
c) M, medianos: peso ≥ 53 gramos y < 63 gramos.
Nota: considere como descartados aquellos que no estén dentro del rango de valores aceptables.
Determinar lo siguiente:
1)
Cantidad total de Huevos (Todas las categorías)
2)
Cantidad total de Huevos XL
3)
Cantidad total de Huevos L
4)
Cantidad total de Huevos M
5)
Cantidad total de Huevos descartados
6)
Determinar el % de Huevos XL sobre el Total
7)
Determinar el % de Huevos L sobre el Total
8)
Determinar el % de Huevos M sobre el Total
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, 
sin interacción con el DOM y cargar los datos de entrada por medio de prompt.
*/

{

    let continuar = "SI";
    let contador = 0;


    let contXL = 0;
    let contL = 0;
    let contM = 0;
    let contDescartados = 0;

    console.log(`\n` + `=`.repeat(40));
    console.log(`--SISTEMA DE CALIFICACIONDE HUEVOS--`);
    console.log(`=`.repeat(40));

    while (continuar.toUpperCase() === "SI") {

        //contador de huevos.
        contador++;

        //Prompt para cargar el huevo.
        let peso = Number(prompt(`Ingrese el peso del huevo ${contador} en gramos:`));

        //Mostrar los huevos cargados.
        console.log(`Huevo: ${contador} - peso: ${peso}g`);

        //Clasificacion de huvos.
        contXL = peso >= 73 ? contXL + 1 : contXL;
        contL = peso >= 63 && peso < 73 ? contL + 1 : contL;
        contM = peso >= 53 && peso < 63 ? contM + 1 : contM;
        contDescartados = peso < 53 || isNaN(peso) ? contDescartados + 1 : contDescartados;


        //Finalización de bucle while
        continuar = prompt(`¿Continuar? - (SI/NO)`);
    }

    //Calcular los diferentes opciones
    let totalHuevos = contador;
    let porcentajeDeHuevosXL = totalHuevos > 0 ? (contXL/totalHuevos) * 100 : 0;
    let porcentajeDeHuevosl = totalHuevos > 0 ? (contL/totalHuevos) * 100 : 0;
    let porcentajeDeHuevosM = totalHuevos > 0 ? (contM/totalHuevos) * 100 : 0;
    let porcentajeDeHuevosDescartados = totalHuevos > 0 ? (contDescartados/totalHuevos) * 100 : 0;

    console.log(`\n` + `=`.repeat(40));
    console.log(`INFORME FINAL`);
    console.log(`=`.repeat(40));
    console.log(`Cantidad de Huevos XL: ${porcentajeDeHuevosXL}`);
    console.log(`Cnatidad de Huevos L: ${porcentajeDeHuevosl}`);
    console.log(`Cantidad de Huevos M: ${porcentajeDeHuevosM}`);
    console.log(`Cantidad de Huevos Descartados: ${porcentajeDeHuevosDescartados}`);
    console.log(`=`.repeat(40))
}