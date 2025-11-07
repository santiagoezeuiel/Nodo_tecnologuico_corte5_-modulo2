// aqui importe dos funciones desde un modulo //
import {fnRetorneIVA,versionDelSistema} from "./modulo01.js";

// aqui importe la función por defecto del modulo01.js //
import cuadrado from "./modulo01.js";

// aqui importe una función por defecto del modulo que lleva el mismo nombre //
import fnCantidadVocales from "./fnCantidadVocales.js";

/* bloque principal de código */
{
    console.log("la aplicación esta corriendo");

    let iva1 = fnRetorneIVA(8700.40);
    console.log(iva1);

    console.log(versionDelSistema);

    let resultado1 = cuadrado(5);
    console.log(resultado1);

    let cadena1 = "soy daniel";

    cadena1.toUpperCase();
   

    let resultado2 = fnCantidadVocales("AAhola soy daniel E");
    console.log(resultado2);

}