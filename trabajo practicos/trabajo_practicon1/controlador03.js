
/*
Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar.
*/

{

    let gastoLuz = 0;
    let gastoInternet = 0;
    let gastoAgua = 0;
    let aumentoLuz = 0;
    let aumentoInternet = 0;
    let aumentoAgua = 0;
    let totalLuz = 0;
    let totalInternet = 0;
    let totalAgua = 0;

    gastoLuz = Number(prompt(`Monto a pagar de Luz`));
    gastoInternet = Number(prompt(`Monto a pagar de Internet`));
    gastoAgua = Number(prompt(`Monto a pagar de Agua`))


    aumentoLuz = gastoLuz * 12.5 / 100
    aumentoInternet = gastoInternet * 7 / 100
    aumentoAgua = gastoAgua * 3 / 100;

    totalLuz = gastoLuz + aumentoLuz
    totalInternet =  gastoInternet + aumentoInternet
    totalAgua = gastoAgua + aumentoAgua

    console.log(`Monto de Luz es de: ${gastoLuz}`)
    console.log(`Monto de Internet es de: ${gastoInternet}`)
    console.log(`Monto de Agua es de: ${gastoAgua}`)

    console.log(`El aumento de %12.5 de luz es de: ${aumentoLuz}`)
    console.log(`El aumento de %7 de Internet es de: ${aumentoInternet}`)
    console.log(`El aumento de %3 de Agua es de: ${aumentoAgua}`)

    console.log(`Monto total a pagar de luz es de: ${totalLuz}`)
    console.log(`Monto total a pagar de Internet es de: ${totalInternet}`)
    console.log(`Monto total a pagar de Agua es de: ${totalAgua}`)
}