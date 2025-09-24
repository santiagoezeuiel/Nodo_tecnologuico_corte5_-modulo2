 
 /* Ejercicio n° 8: Estructuras condicionales if/el
 Realizar un progama que poermita ingresar don numero y que 
 determine cual es mayor o menor

 numero1 > numero2
 numero 1 < numero2
 numero1 == numero 2

 operador de resto %

 */
 
 {

    console.log(`Aplicacion corriendo`); //constra en consola

    /* declarar variables en donde ingrresan los numeros  */

    let numero1 = 0; //operacion de asicnacion. declaracion y asicnacion el valor 0
    let numero2 = 0;//operacion de asicnacion. declaracion y asicnacion el valor 0

    /* vamos a decirle al usuario que ingrese por teclado un valor */

    numero1 =Number(prompt(`Ingrese por favor el numero 1`));

    numero2 = Number(prompt(`Ingrese por favor el numero 2`));
    
    /* Mostrar los valores ingresados */
    console.log(`El numero 1 es: ${numero1}`);
    console.log(`El numero 2 es: ${numero2}`);

    
    /* comparaciones lógicas */

    if (numero1 > numero2) 
    {
        console.log(`El numero 1 es mayor que el numero 2`);
    }
    else if (numero1 < numero2)
    {
        console.log(`El numero 1 es menor que el numero 2`);
    }
    else
    {
        console.log(`El numero 1 es igual al numero 2`);
    }  


  }