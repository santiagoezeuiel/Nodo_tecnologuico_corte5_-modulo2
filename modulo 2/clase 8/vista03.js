/* 

Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de
la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones.
- No está establecido la cantidad de trabajos finales que se evaluarán
- Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.
o Si la nota >= 0 y < 4 serán trabajos desaprobados
o Si la nota > 4 y <= 7 serán trabajos aprobados
o Si la nota > 7 y <10 serán trabajos muy buenos
o Si la nota = 10 serán trabajos excelentes
- Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor
a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se
equivoca.
- Siempre preguntar si desea continuar cargando notas ¿?

*/

{

    // declaramos la variable de condición del ciclo
    let continua = "SI";

    // declarar la variable que me permita ingresar la nota de cada alumno

    let nota = 0;

    let contador = 0;

    // voy a crear las variables contadoras //

    let contErrores = 0;
    let contDesaprobados = 0;
    let contAprobados = 0;
    let contMuyBuenos = 0;
    let contExcelentes = 0;

    while (continua.toUpperCase() === "SI")
    {
        contador++; // contabilizando de uno en uno

        nota = Number(prompt(`Ing. nota del alumno ${contador}`));

        console.log(nota);

        contErrores = nota < 0 || nota > 10 ? contErrores + 1:contErrores;
        contDesaprobados = nota >= 0 && nota < 4 ? contDesaprobados + 1:contDesaprobados ;
        contAprobados = nota >= 4 && nota <= 7 ? contAprobados + 1: contAprobados;
        contMuyBuenos = nota > 7 && nota < 10 ? contMuyBuenos + 1: contMuyBuenos;
        contExcelentes = nota === 10 ? contExcelentes + 1: contExcelentes;

        continua = prompt(`Desea Continuar cargando (SI/NO)`);  
    }

    console.log(`Cant. Desaprobados ${contDesaprobados}`);

}