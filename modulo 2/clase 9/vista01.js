
/* Funciones en JAVASCRIPT */


/* La idea de crear una función
es crear un sub-proceso (aislado),

    - que tenga nombre propio
    - que ese nombre tenga una carga semantica fuerte
    - pueden recibir parametros de entrada, uno, ninguno o varios.
    - tiene su propio bloque de codigos {}
    - generalmente devuelven un valor  
    - cuando construyo una función
        1) defino a la función
        2) cuando la invoco a la función => utilizo.
*/

function sumarYElevarAlCuadrado(parametro1,parametro2)
{
    // sumar los dos parametros de entrada //
    let suma = parametro1 + parametro2; // 6

    // aqui lo que voy a hacer es elevar la suma al cuadrado //
    let cuadrado = suma * suma; // 6 * 6 = 36

    // voy a retornar un valor //
    return cuadrado;

}

/* Vamos a construir = definir una función
que reciba como parametro de entrada un
importeBase y que a partir de ese importe
calcule el 21% IVA y el 3% de IIBB y 
que devuelva el total a pagar */

function calcularImporteFinal(importeBase)
{
    // aqui calculamos el IVA 21% //
    let IVA = (importeBase * 19)/100;

    // aqui calculamos Ingresos Brutos 3% //
    let ingBrutos = (importeBase * 2.5)/100;

    // vamos a determinar el importe final a pagar //
    let importeFinal = importeBase + IVA + ingBrutos;

    // aqui devolvemos el valor a quien lo llame //

    return (importeFinal);

}






/* Programa Principal 

    defini y declare un bloque de códigos donde
    se ejecutaban todas mis sentencias.
*/
{
    console.log(`aplicación corriendo`);


    /* En el momento que llamo a un sub-proceso o 
    función. lo hago por su nombre, pasandole los
    parametros que necesite. => INVOCACIÓN DE LA FUNCIÓN */


    /* Forma 1 => Estoy invocando la función
    dentro de un console.log */

    console.log(sumarYElevarAlCuadrado(5,1));

    console.log(sumarYElevarAlCuadrado(7,2));

    console.log(sumarYElevarAlCuadrado(22,44));

    /* Forma2 => Si la función devuelve un valor
    puedo asignar ese valor a una variable o a una
    constante */

    let resultado1 = sumarYElevarAlCuadrado(2,5);
    console.log(resultado1);

    const resultado2 = sumarYElevarAlCuadrado(2,7);
    console.log(resultado2);

    /* Forma3 => puedo invocar una función. pasandole
    como parametros variables y/constantes */

    let x1 = 1;
    const x2 = 4;

    let resultado3 = sumarYElevarAlCuadrado(x1,x2);
    console.log(resultado3);

    /* Forma4 => */

    let resultado4 = sumarYElevarAlCuadrado(2+2,4+1);
    console.log(resultado4);

    /************ AQUI VAMOS A LLAMAR A LA FUNCIÓN 
     * QUE DEVUELVE EL IMPORTE A PAGAR = IMPORTE FINAL
     * ******/

    let resultado5 = calcularImporteFinal(100000);
    console.log(`Total a pagar 1 ${resultado5}`);

    let resultado6 = calcularImporteFinal(75235.25);
    console.log(`Total a pagar 2 ${resultado6}`);

}

/* 

    MOMENTO 1 => momento de la definición de la función
    MOMENTO 2 => momento de la invocación de la función

*/

/* Comentarios Finales 

    1) definimos un sub-proceso aislado que tiene nombre

    2) esa función recibe parametros de entrada
        - ninguno
        - uno
        - mas de uno

    3) esa función tiene un cuerpo => bloque de codigos {}

    4) comprender el concepto de CAJA NEGRA

    5) separación lógica de procesos / responsabilidades y funciones.






*/

/* 
    RECEPCIONISTA: => Recibe la plata, chequea
    la transferencia. genera un ticket para
    la cocina = comanda.
        - tomar todos los pedidos
        - estar atento al whatsapp
        - chequear la billetera virtual donde le depositan la plata
        - solicitar a la cocina las comandas (pedidos)
        - una vez que el pedido esta realizado. tomar el paquete
        y entregarle al DELIVERY el paquete junto a los datos
        del domicilio.

    COCINA: comanda (entrada) => comienza
    la elaboración de la comida. hasta que
    esta finalizada.
        - recibir los pedidos por comanda
        - elaborar los pedidos
        - comprar los insumos
        - mantener la cocina limpia
        - 


    DELIVERY: Se encarga de llevar la comida
    desde el local de comidas hasta el domicilio
    del cliente.
        - chequear el pedido este completo
        - llevarlo al domicilio del cliente
        - asegurarse que el vehiculo este en condiciones.


    SEPARACIÓN DE RESPONSABILIDADES Y FUNCIONES


*/

/* 
    19%

    3%

*/

/* 


    FRONT END
    BACK END
    SISTEMAS BASES DE DATOS
    IMPOSITIVO NACIONAL => CONJUNTO DE FUNCIONES ESPECIFICAS PARA LA MATERIA
    IMPOSITIVA PROVINCIAL




*/