/*
Crear un programa en dodne se pueda ingresar el monto de un crédito 
y la cantidad de cuotas en las que se desea pagar.
El programa debe calcular el monto de cada cuota y mostrarlo en la pantalla del DOM.
El metodo de paso es metodo Frances.
Lo cual la formula es la siguiente:
cuota = (P * i) / (1 - (1 + i)^-n)
donde:
P = monto del crédito
i = tasa de interés por periodo (debe estar en formato decimal, por ejemplo, 5% = 0.05)
n = número total de cuotas
*/

export const simuladorCreditos = (monto, cuotas, tasaInteres) => {

    //Comvertir la tasa anual a mensual y en forma decimal
    const tasaInteresMensual = (tasaInteres / 100) / 12;

    //Calcular la cuotas utilizando la formula del metodo frances
    const cuotasMensual = (monto * tasaInteresMensual) / (1 - Math.pow((1 + tasaInteresMensual), -cuotas));

    let saldoRestante = monto;
    let planPagos = [];
    let totalInteres = 0;

    for (let i = 1; i <= cuotas; i++) 
    {
        const interesMensual = saldoRestante * tasaInteresMensual;
        const amortizacion = cuotas - interesMensual;

        totalInteres += interesMensual;

        planPagos.push({
            numeroCuota : i,
            cuotasMensual : cuotasMensual,
            interes : interesMensual,
            amortizacion : amortizacion,
            saldoRestante : saldoRestante - amortizacion
        });

        saldoRestante -= amortizacion;
    }

    return {
        planPagos : planPagos,
        totalInteres : totalInteres,
        totalPagos : monto + totalInteres,
        
    }
}