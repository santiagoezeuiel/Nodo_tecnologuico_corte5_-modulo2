/*

Realizar un programa que permita ingresar el sueldo bruto de un trabajador y calcular
su sieldo neto aplicando los siguientes descuentos obligatorios según la legislación de Argentina
Aporte jubilatorio 11%
Obra social 3%
PAMI 3%

*/

{

    let sueldoBruto = 0;
    let suledoNeto = 0;
    let descuento = 0;
    const APORTEJUBILATORIO = 11;
    const OBRASOCIAL = 3;
    const PAMI = 3 ;

    sueldoBruto = Number(prompt(`Ingrese en sueldo en bruto:`))

    function descuentoJubilatorio(sueldoBruto, APORTEJUBILATORIO)
    {

        descuento = sueldoBruto * APORTEJUBILATORIO / 100;
        
        return descuento
    }

    function descuentoObrasocial(sueldoBruto, OBRASOCIAL)
    {

        descuento = sueldoBruto * OBRASOCIAL / 100;

        return descuento;
    }

    function descuentoPami(sueldoBruto, PAMI)
    {

        descuento  = sueldoBruto * PAMI / 100;

        return descuento;
    }

    descuento = descuentoJubilatorio(suledoNeto, APORTEJUBILATORIO) + descuentoObrasocial(sueldoBruto, OBRASOCIAL) +  descuentoPami(sueldoBruto, PAMI)

    suledoNeto = sueldoBruto - descuento;

    console.log(`\n` + `*`.repeat(30));
    console.log(`Culcular de suelndo en bruto:`);
    console.log(`*`.repeat(30));
    console.log(`\n` + `=`.repeat(30));
    console.log(`El monto en bruto es: $ ${sueldoBruto}`);
    console.log(`Aporte jubilatorio: $ ${descuentoJubilatorio(sueldoBruto, APORTEJUBILATORIO)}`);
    console.log(`Obra social:  $ ${descuentoObrasocial(sueldoBruto, OBRASOCIAL)}`);
    console.log(`Aporte PAMI: $ ${descuentoPami(sueldoBruto, PAMI)}`);
    console.log(`Sueldo neto: $ ${suledoNeto}`);


}