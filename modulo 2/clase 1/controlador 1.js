
/* objeptivo:
vamos a realizar un programa que permita determinar el dinero disponible en todoas
las villeteras virtuales de una persona
        1-Banco nacion
        2-Naranjax
        3-Mercado pago
        4-Pay pal
        5-Uala
*/

{

    let titularDeLasCuentas = "Manuel Martinez";

    // declaracion la variable de asgnandole una valo 0

    let dineroEnNacion = 0;

    let dineroEnNarajanx = 0;

    let dineroEnMercadoPago = 0;

    let dineroEnPayPal = 0;

    let dineroEnUala = 0;


    dineroEnNacion = 300000;
    dineroEnNarajanx = 50000;
    dineroEnMercadoPago = 60000;
    dineroEnPayPal = 1000000;
    dineroEnUala = 1500000;

    let totalDineroDisponible = 0;

    totalDineroDisponible = dineroEnNacion + dineroEnNarajanx + dineroEnMercadoPago +dineroEnPayPal + dineroEnUala;

    console.log(`El titular de las cuentas: ${titularDeLasCuentas} tiene un total de: $ ${totalDineroDisponible}`);
}