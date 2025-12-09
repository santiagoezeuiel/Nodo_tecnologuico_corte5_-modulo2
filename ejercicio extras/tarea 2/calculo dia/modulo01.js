/*
Realizar un programa que permita ingresar el total de días y en funcion de ello 
convertir los días en segundos
*/


export const minutos = (dias, minutos) => {

    const HORADESDEDIAS = dias * 24;
    const MINUTOSDESDEDIAS = HORADESDEDIAS * 60;
    const SEGUNDOSDESDEDIAS = MINUTOSDESDEDIAS * 60;

    return{
        dias : dias,
        horas : HORADESDEDIAS,
        minutos : MINUTOSDESDEDIAS,
        segundos : SEGUNDOSDESDEDIAS  
    };

} 