/*
Realize un programa que permita ingresar el importe total de
una compra que  realiza un cliente y sobre el mismo
aplicar un descuento del 15%. Mostrar por DOM el importe total de la compra
y el descuento del 15% como así tambíen el importe restante final.
*/


export const descuentoCompra = (montoCompra) => {

    const porcentajeDescuento = 15;

    let descuento = montoCompra * porcentajeDescuento / 100;

    let montoFinal = montoCompra - descuento;

    return {

        montoCompra : montoCompra,
        descuento : descuento,
        montoFinal : montoFinal
    }

}