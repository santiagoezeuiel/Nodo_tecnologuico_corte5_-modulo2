const MARGEN = 30;



/*Ejercicio Nro: 13 */
export const importeGanancia = (importeProducto, MARGEN) => {

    let ganancia = importeProducto * MARGEN / 100;
    
    return importeProducto + ganancia
}


/*Ejercicio Nro:14 */
export const promedioNota = (nota1, nota2, nota3) => {

    let promedio = (nota1 + nota2 + nota3) / 3

    return promedio
}

/*Ejercio Nro:15 */

export const condicionFinal = (promedio) => {

    switch (true)
    {
        case (promedio <= 4):
            return "Desaprobado";
            break;

        case (promedio > 4 || promedio <= 7):
            return "Aprobado";
            break;

        case (promedio >  7 || promedio < 10):
            return "Muy bueno";
            break;
        
        case (promedio === 10):
            return "Excelente"
            break;

        default:
            return "Fuera de rango";
    }
}