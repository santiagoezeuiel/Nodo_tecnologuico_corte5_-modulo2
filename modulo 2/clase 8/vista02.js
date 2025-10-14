
/* El objetivo de esta aplicación
web es registrar los empleados 
de una fabrica y la cantidad de
horas trabajadas en total y la cantidad
de horas excedentes (horas extras).
sabiendo que el mínimo trabajado es 8 horas.
*/

/*
let nombre = 'daniel';

console.log(nombre);
console.log(nombre.toUpperCase());
*/

/* 
    SI
    Si
    sI
    si
*/

{

    const JORNADALABORAL = 8;

    //1) variable que me permite ingresar o continuar en el bucle
    let deseaContinuar = 'SI';

    let nombrePersona = "";
    let horasTrabajadas = 0;
    let horasExtras = 0;

    let acumuladorHorasTrabajadas = 0; // aqui voy a totabilizar las horas trabajadas
    let acumuladorHorasExtras = 0; // aqui voy a totabilizar las horas extras

    let contadorEmpleados = 0;

    //2) declarar el ciclo mientras
    while(deseaContinuar.toUpperCase() === 'SI')
    {

        //contadorEmpleados = contadorEmpleados + 1;
        contadorEmpleados++;

        // aqui voy a pedir que me ingrese el nombre del empleado

        nombrePersona = prompt(`Ingrese Nombre Empleado ${contadorEmpleados}`);

        // aqui voy a pedir que me ingrese las horas trabajadas

        horasTrabajadas = Number(prompt(`Ingrese horas trabajadas ${contadorEmpleados}`));

        // acumulador de horas trabajadas
        acumuladorHorasTrabajadas = acumuladorHorasTrabajadas + horasTrabajadas;


        // aqui voy a calcular las horas extras //
        horasExtras = horasTrabajadas - JORNADALABORAL;

        // acumulador de horas extras
        acumuladorHorasExtras = acumuladorHorasExtras + horasExtras;

        console.log(`El Empleado - ${contadorEmpleados} - ${nombrePersona} trabajó ${horasTrabajadas} horas - Extras ${horasExtras}`);

        //3) dentro del bucle preguntar si desea seguir cargando empleados
        deseaContinuar = prompt(`Continua con otro empleado ?. (SI/NO)`);
       
    }

    console.log(`Cierre de calculo de salarios`);

    console.log(`Total Horas Trabajadas: ${acumuladorHorasTrabajadas} y horas extras ${acumuladorHorasExtras}`);

}

