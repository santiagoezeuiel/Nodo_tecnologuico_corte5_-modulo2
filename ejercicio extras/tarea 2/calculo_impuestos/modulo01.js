/*
Realizar un rpograma que permita ingresar los totales que una persona pagó
por sus servicions en su hogar.
El priemr valor representará mlos gastos de energía (luz eléctrica), el segundo
valor representará los gastos en cominicación (conectividad a internet),
el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementará es un 12.5%,
7%, y 3%, respectivamente. El programa debe calcular el gasto futuro pagara.
*/

export const calcularLosImpuestos = (montoLuz, montoInternet, montoAgua) => {

    //Porcentaje de los aumentos.
    const aumentoLuz = 12.5;
    const aumentoInternet = 7;
    const aumentoAgua = 3;

    //Calcular los nuevos montos con los aumentos.
    let nuevoMontoLuz = montoLuz + (montoLuz * aumentoLuz / 100);
    let nuevoMontoInternet = montoInternet + (montoInternet * aumentoInternet / 100);
    let nuevoMontoAgua = montoAgua + (montoAgua * aumentoAgua / 100);

    //calcular los aumentos.
    let aumetoDeLuz = montoLuz * aumentoLuz / 100;
    let aumentoDeInternet = montoInternet * aumentoInternet / 100;
    let aumetoDeAgua = montoAgua * aumentoAgua / 100;

    //Calcular el monto total a pagar.
    let montoTotal = nuevoMontoLuz + nuevoMontoInternet + nuevoMontoAgua;

    return {
        nuevoMontoLuz : nuevoMontoLuz,
        nuevoMontoInternet : nuevoMontoInternet,
        nuevoMontoAgua : nuevoMontoAgua,
        aumetoDeLuz : aumetoDeLuz,
        aumentoDeInternet : aumentoDeInternet,
        aumetoDeAgua : aumetoDeAgua,
        montoTotal : montoTotal
    } 
}