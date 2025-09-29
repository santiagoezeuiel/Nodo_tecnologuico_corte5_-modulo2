
/*
Controlador switch

Realice un programa que permita ingresar en una variabre
numerica el numero de dia y en funcion del numero
de dia el programa devera:

    1 => LUNES
    2 => MARTES
    3 => MIERCOLES
    4 => JUEVES
    5 => VIERNES
    6 => SABADO
    7 => DOMINGO  
*/


{

    console.log(`Controlador switch`)

    let numeroDia = 0;

    numeroDia = Number(prompt(`Ingrese el numero de dia`))

    console.log(numeroDia)

    /*
    Cuando yo tengo un conjunto finito de valores.
    valores discreto y debo realizar un analisis de esos casos
    la estructura condicional por excelencia es el switch
    */


    switch(numeroDia)
    {
        case 1:
            {
                console.log(`Lunes`)
                break;
            }

        case 2:
            {
                console.log(`Martes`)
                break;
            }

        case 3:
            {
                console.log(`Miercoles`)
                break;
            }

        case 4:
            {
                console.log(`Jueves`)
                break;
            }

        case 5:
            {
                console.log(`Viernes`)
                break;
            }

        case 6:
            {
                console.log(`Viernes`)
                break;
            }

        case 7:
            {
                console.log(`Domingo`)
                break;
            }
        default:
            {
                console.log(`No ingreso un numero valido`)
                break;
            }

    }
}