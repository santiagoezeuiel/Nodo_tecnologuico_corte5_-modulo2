/*
Realiza  un programa que permita ingresar los totales que una persona
pagó por su servicios en su hogar.
El orimer valor representara los gastos de energía (luz electrica), el  segundo valor
representara los gastos en cominucacion(conectividad a internet), el tercer valor representará los
gastos ocacionados d¿por el servicio de agua potable. Se estima que para el siguiente mas estos tres
valores incrementaran en un 12.5%, 7%, 3%,
respectivamente. El programa debe calcular el gasto futuro a pagar.
*/

{

    let importeLuz = Number(prompt(`Ingrese el importe de Luz:`));
    let importeInternet = Number(prompt(`Ingrese el importe de internet`));
    let importeAgua = Number(prompt(`Ingrese el importe de Agua`));

    const AUMENTOLUZ = 12.5;
    const AUMENTOINTERNET = 7;
    const AUMENTOAGUA = 3;



    let importeTotalLuz = (importeLuz) => {
        descuento = importeLuz * AUMENTOLUZ / 100;
        return descuento + importeLuz;
    };

    let ImporteTotalInternet = (importeInternet) => {
        descuento = importeInternet * AUMENTOINTERNET / 100;
        return descuento + importeInternet;
    };

    /*let ImporteTotalAgua = (importeAgua) => {
        descuento = importeAgua * AUMENTOAGUA / 100;
        return descuento + importeAgua;
    };*/

    let ImporteTotalAgua = (importeAgua) => importeAgua + (importeAgua * AUMENTOAGUA / 100);



 

    console.log(`$ ${importeTotalLuz(importeLuz)}`);
    console.log(`$ ${ImporteTotalInternet(importeInternet)}`);
    console.log(`Esta e sun arrow Funtion: $ ${ImporteTotalAgua(importeAgua)}`);
}