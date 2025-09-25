
/*
Ejercicio N° 9: Escrituras de condicionales if/else
Realizar un programa que permita ingresar la edad de una persona y determine:

si es niño (0 a  12 años),
adolecente ( 13 a 17 años),
adulto ( 18 a 68 años),
adulto mayor ( mas de 64 años),
*/

{

    let edadPersona = 0; //declaro y inicializo en 0
    const NINIO = 12;
    const ADOLECENTE = 17;
    const ADULTO = 64;
    const MATUSALEN = 100;
      

    edadPersona = Number(prompt(`Ingrese la edad:`));
    console.log(`Tu edad es: ${edadPersona}`);

    if (edadPersona < 0)
    {
        console.log(`Error. Edad ingresada incorrecta`)
    }
    else if (edadPersona < NINIO)
    {
        console.log(`Esta persona es un niño`)
    }
    else if (edadPersona <= ADOLECENTE)
    {
        console.log(`Esta persona es un Adolecente`)
    }
    else if (edadPersona <= ADULTO)
    {
        console.log(`Esta persona es Adulta`)
    }
    else if (edadPersona <= MATUSALEN)
    {
        console.log(` Esta persona es un Adulto mayor`)
    }
    else
    {
        console.log(`HOLA MATUSALEN XD`)
    }

    
    



}