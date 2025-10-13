
/*Trabajo practico N° 1*/



{
    //Ejercicio N° 1

    let numero1 = 0;
    let numero2 = 0;
    let suma = 0;
    let resta = 0;
    let multiplicacion = 0;
    let cociente = 0;
    

    numero1 = Number(prompt(`Ingrese el pimer número:`))
    numero2 = Number(prompt(`Ingrese el segundo número:`))

    suma = numero1 + numero2
    resta = numero1 - numero2
    multiplicacion = numero1 * numero2
    
    if ((numero1 === 0) || (numero2 === 0))
    {
        cociente = 0
    }
    else
    {
        cociente = numero1 / numero2 
    }



    console.log(`Resultado de la suma es: ${suma}`)
    console.log(`Resultado de la resta es: ${resta}`)
    console.log(`Resultado de la multiplicacion es: ${multiplicacion}`)
    console.log(`Resultado del cociente es: ${cociente}`)
    

}