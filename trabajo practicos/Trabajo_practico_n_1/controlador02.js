/*
Realizar un programa en JavaScript que permita ingresar las notas de los trabajos 
finales de los alumnos de la diplomatura en “Desarrollo Web Full Stack con JavaScript” 
para ello se establecen las siguientes condiciones.
-
No está establecido la cantidad de trabajos finales que se evaluarán
-
Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.
o
Si la nota >= 0 y <= 4 serán trabajos desaprobados
o
Si la nota > 4 y <= 7 serán trabajos aprobados
o
Si la nota > 7 y <10 serán trabajos muy buenos
o
Si la nota = 10 serán trabajos excelentes
-
Contemplar que el operador podría ingresar notas incorrectas, 
es decir podría poner una nota menor a cero o mayor a 10 con lo que sería claramente un error. 
Contemplar la cantidad de veces que se equivoca.
-
Siempre preguntar si desea continuar cargando notas ¿?.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, 
sin interacción con el DOM y cargar los datos de entrada por medio de prompt.
*/

{   
    //Variables de notas
    let desaprobado = 0;
    let aprobado = 0;
    let muyBueno = 0;
    let exelente = 0;
    let error = 0;
    

    //Variables de suma y total de nota
    let totalNota = 0;
    let sumaNota = 0;

    //Aclaracion de notas
    console.log(`El sistema est andando`)
    console.log(`\n` + `=`.repeat(40));
    console.log(`Sistema de calificaciones`);
    console.log(`=`.repeat(40));
    console.log(`Creiterios de calificaciones`);
    console.log(`(0-4) = Desaprobado`);
    console.log(`(5-7) = Aprobado`);
    console.log(`(8-9) = Muy bueno`);
    console.log(`(10) = Exelente`);
    console.log(`=`.repeat(40));

    for (let i = 1; ; i++)
    {
        console.log(`---- Reguistro de Notas #${i} ----`);
        
        //Ingreso de nota
        let ingresarNota = prompt(`Ingrese la nota del trabajo final #${i} (0-10)`);
        let nota = parseFloat(ingresarNota);
        
        //validar si lo que se ingresa es un numero
        if (isNaN(nota))
        {
            console.log(`ERROR: Debe ingresar un número válido`);
            error ++;
            continue;
        }
        else
        {
            totalNota++;
            sumaNota += nota;

            if (nota >= 0 && nota <= 4)
            {
                desaprobado++;
                console.log(`Nota ${nota}: TRABAJO DESAPROBADO`);
            }
            else if(nota > 4 && nota <= 7)
            {
                aprobado++;
                console.log(`Nota ${nota} TRABAJO APROBADO`);
            }
            else if(nota > 7 && nota <= 9)
            {
                muyBueno++;
                console.log(`Nota ${nota}: TARBAJO MUY BUENO`);
            }
            else if(nota === 10)
            {
                exelente++;
                console.log(`Nota ${nota}: Trabajo Exelente`);
            }
            
            //Mostrar esticas parciales
            console.log(`\n Estadisticas Parciales`);
            console.log(`Desaprobado: ${desaprobado}`);
            console.log(`Aprobado: ${aprobado}`);
            console.log(`Muy bueno: ${muyBueno}`);
            console.log(`Exelente: ${exelente}`);
            console.log(`Errores: ${error}`);

            if (totalNota > 0)
            {
                let promedio = sumaNota / totalNota; //calcular el promedio
                console.log(`El promedio es de: ${promedio.toFixed(2)}`);
            }
                
        }

        // Preguntar si desea continuar
        console.log(`\n ¿Desea continuar con las cargas de las notas?`);
        let continuar = prompt(`Ingresar 'SI' para continuar o 'NO' para finalizar`);

        if (continuar && continuar.toLowerCase() === 'no')
        {
            console.log(`\n Finalizar la carga de notas...`);
            break
        }
        else if (!continuar || continuar.toLowerCase() === 'si')
        {
            console.log(`Continuar con la carga de notas...`);
        }
    }
    
    //Generar reporte final
    console.log(`\n -- DISTRIBUCIÓN DE TRABAJOS FINALES --`);
    console.log(`=`.repeat(40));
    console.log(`Desaprobado (0-4): ${desaprobado} trabajos`);
    console.log(`Aprobado (5-7): ${aprobado} trabajos`);
    console.log(`Muy Buenos (8-9): ${muyBueno} trabajos`);
    console.log(`Exelentre (10): ${exelente} trabajos`);
    console.log(`Error de ingreso: ${error} intentos`);

    //Estadisticas generales
    console.log(`\n --ESTADISTICA GENERAL--`);
    console.log("=".repeat(40));
    console.log(`Total de notas válidas: ${totalNota}`);
    console.log(`Total de registros: ${totalNota + error}`);

    if (totalNotas > 0) {
    let promedio = sumaNota / totalNota;
    console.log(` Promedio general: ${promedio.toFixed(2)}`);
    
    // Calcular porcentajes
    console.log("\n PORCENTAJES POR CATEGORÍA:");
    console.log("─".repeat(35));
    console.log(`Desaprobados: ${((desaprobado / totalNota) * 100).toFixed(1)}%`);
    console.log(`Aprobados: ${((aprobado / totalNota) * 100).toFixed(1)}%`);
    console.log(`Muy Buenos: ${((muyBueno / totalNota) * 100).toFixed(1)}%`);
    console.log(`Excelentes: ${((exelente / totalNota) * 100).toFixed(1)}%`);
    
    // Análisis de calidad
    console.log("\n🎯 ANÁLISIS DE CALIDAD:");
    console.log("─".repeat(40));
    let calidadAlta = muyBueno + exelente;
    let porcentajeCalidadAlta = ((calidadAlta / totalNota) * 100).toFixed(1);
    console.log(`Trabajos de alta calidad (8-10): ${calidadAlta} (${porcentajeCalidadAlta}%)`);
    
    if (exelente > 0) {
        console.log(`¡Tenemos ${exelente} trabajo(s) excelente(s)!`);
    }
    } else {
        console.log("ℹNo se ingresaron notas válidas para calcular estadísticas");
    }

    console.log("\n" + "=".repeat(40));
    console.log("¡Sistema cerrado! Gracias por usar el gestor de notas.");
    

}