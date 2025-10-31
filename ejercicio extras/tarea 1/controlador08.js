/*

Realizar un programa que permita introducir tres valores y determinar si la suma
de los dos primeros es igual al tercer calor ingresado.

*/

{

    let numero1 = 0;
    let numero2 = 0;
    let numero3 = 0;
    let suma
    
    function resultadoSuma(numero1, numero2, numero3, suma)
    {
         numero1 = Number(prompt(`Ingrese un numero`));

         numero2 = Number(prompt(`Ingrese un nuermo`));

         numero3 = Number(prompt(`Ingrese un numero`))


        suma = numero1 + numero2

        if (suma === numero3)
            {
                return console.log(`La suma del primer numero (${numero1}) y el segundo numero
                 (${numero2}) es igial al tercer nuemro (${numero3})`);
            } 
        else
        {
            return console.log(`La sume de lso tres numero es ${suma + numero3}`)
        }

    }

    console.log(`\n` + `=`.repeat(30));
    console.log(` El primer numero es ${numero1}`);
    console.log(` El segundo numero es ${numero2}`);
    console.log(`El tercer numero es ${numero3}`);
    console.log(`\n`);
    console.log(`${resultadoSuma(numero1, numero2, numero3, suma)}`);
}