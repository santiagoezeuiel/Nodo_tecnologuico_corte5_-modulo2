import fnCantidadDevocales from "./fnCantidadVocales.js";

/* MANEJO DEL DOM

    Delegación de eventos en funciones

*/


/* Eventos son sucesos que ocurren 
en el navegador web. que no podemos
determinar el momento en el que van a
ocurrir, pero si podemos atender a 
esos eventos por medio de funciones 

    1ro) ocurre el evento
    2do) capturar que evento se produjo
    3ro) delegar un comportamiento en una función delegada.

*/

window.onload = ()=>{

    console.log("la aplicacion esta corriendo");

    /* Todos los elementos HTML que quiero controlar
    desde la programación. los tengo que crear como 
    constantes desde el lado del programa */

    const boton1 = document.querySelector("#boton1");
    const boton2 = document.querySelector("#boton2");

    console.log(boton1);
    console.log(boton2);

    // delegación de eventos en funciones //

    boton1.onclick = ()=>{

        alert("soy el boton numero 1");

    };

    boton2.onclick = ()=>{

        console.log("me estan haciendo click en el boton 2");

        let texto = "hicimos nuestra primera aplicacion web";

        let cantidadVocales = fnCantidadDevocales(texto);

        console.log(`La Cantidad de vocales es ${cantidadVocales}`);

    }

}

