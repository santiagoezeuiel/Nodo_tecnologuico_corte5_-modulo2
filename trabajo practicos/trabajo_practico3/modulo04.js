/*
Ejercicio Nro. 18:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número 
*/


const SUBSUELO = 0.03;

export const calcularTasaSubsuelo = (importeBase) => {

    return importeBase * SUBSUELO;

}