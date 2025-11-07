/*
Realize un programa que permita ingresar la edad de una persona y determinar si es
niño (0 a  12) años
adolecente (13 a 17) años
adult (18 a 64) años
adulto mayor (18 a 64 años)
*/

{


let edad = 0;

function identificacionEdad(edad)
{

    edad = Number(prompt(`Ingrese su edad por favor:`));

    if (edad > 0 &&  edad < 12)
    {
        return console.log(`La edad ${edad} es de un niño`);
    }
    else if (edad > 13 && edad < 17)
    {
        return console.log(`La edad ${edad} es de un adolecente`);
    }
    else if (edad > 18 && edad < 64)
    {
        return console.log(`La edad ${edad} es de un adulto `);
    }
    else
    {
        return console.log(`La edad ${edad} es de un adulto mayor`);
    }
}

console.log(`${identificacionEdad(edad)}`)

}