
/* aqui defino una función
que se denomina cuadrado.
que recibe como parametro de
entrada un numero */

function cuadrado(numero)
{
    return (numero * numero);
}

/* A partir del 2015 en adelante.
el nuevo js. 
    React
    node
*/

/* una arrow functions o funcion flecha
tiene la particularidad, que se puede
almacenar en una variable o en una constante 
y el nombre de la función asume, el nombre
de la constante que la contiene */

/* 

    ()=>{}

    () aqui van los parametros de entrada

    => es obligatoria 

    {} el cuerpo de la función. el 99% lleva a dentro una instrucción return

*/

const cuadrado2 = (numero)=>{
    return numero * numero;
}

/* Esta función tiene como objetivo 
recibir dos parametros, el precioCosto y el porcentaje
de ganancia y a partir de ellos. obtener el precio final */

const devolverPrecioVenta = (precioCosto,porcentajeGanancia)=>
    {
        let precioFinal = 0;

        precioFinal = precioCosto + (precioCosto * porcentajeGanancia)/100;

        return precioFinal;

    };

/* Vamos a construir una función que 
a partir de un monto de dinero, evalue
el rendimiento de un plazo fijo.

    3,6 mensual => 0 - 1.500.000

    4,0 mensual => 1.500.000 - 25.000.000

    5,5 mensual => > 25.000.000

*/

const rendimientoPlazoFijo = (capital)=>
    {
        let tasa = 0;

        if((capital >= 0) && (capital <= 1500000))
        {
            tasa = 3.6;
        }
        else
        {
            if((capital > 1500000)&&(capital <= 25000000))
            {
                tasa = 4;
            }
            else
            {
                tasa = 5.5;
            }
        }
      
        let rentabilidad = 0;

        rentabilidad = capital * tasa/100;

     //   console.log(`capital: ${capital} - tasa: ${tasa} rentabilidad : ${rentabilidad}`);

        return rentabilidad;


    };



{
    console.log(`hoy ganamos !!!`);

    /* Momento de la Invocación  */
    
    let resultado1 = cuadrado(7);
    console.log(resultado1);

    /* Momento de la Invocación */

    let resultado2 = cuadrado2(7);
    console.log(resultado2);

    /* Momento de la Invocación */

    let resultado3 = devolverPrecioVenta(90000,45);

    console.log(resultado3);

    /* Momento de la Invocación */

    let resultado4 = rendimientoPlazoFijo(27000000);


}

/* 
    1) Nunca, pero Nunca se piden datos
    de entrada con prompt en la función.

    2) Los console.log => SON MALA PALABRA

    3) Siempre devuelven un resultado.

    4) Nunca. pero Nunca en la vida
    hacen alert();

    5) No se escribe ninguna sentencia
    despues del return. porque justamente
    el return, es la palabra que finaliza
    la función.


*/