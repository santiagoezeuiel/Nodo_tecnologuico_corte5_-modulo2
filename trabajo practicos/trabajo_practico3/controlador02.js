import {promedioNota, condicionFinal} from "./modulo01.js";

const resultadoValor = document.getElementById('resultadoValor');
const resultadoCondicion = document.getElementById('resultadoCondicion');
const resultadoContainer = document.getElementById('resultadoContainer');

window.onload = () => {

    console.log(`Pagina de calculo de nota`);

    const idnota1 = document.querySelector('#idnota1');
    const idnota2 = document.querySelector('#idnota2');
    const idnota3 = document.querySelector('#idnota3');
    const idbotonCalcularNota = document.querySelector('#idbotonCalcularNota');
    
    console.log(idnota1)
    console.log(idnota2)
    console.log(idnota3)
    console.log(idbotonCalcularNota)
    

    idbotonCalcularNota.onclick = () => {
        
        //Obtener los valores de las notas
        let nota1 = parseInt(idnota1.value);
        let nota2 = parseInt(idnota2.value);
        let nota3 = parseInt(idnota3.value);

        //Mostrar las notas en consola para verificacion
        console.log("Notas  ingresadas", {nota1, nota2, nota3});

        //validar que todos los parametros sean numeros
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3))
        {
            alert(`ERROR: por favor ingrese todas las notas (numero 0 al 10)`);
            return
        }

        //Validar que todas las notas esten entre el rango del 0 al 10
        if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10)
        {
            alert(`Error: La notas deben estar entre 0 y 10`)
            return;
        }


        //Calcular el promedio de las notas
        let promedioFinal = promedioNota(nota1, nota2, nota3)
        console.log(`El del producto es de: $ ${promedioFinal}`)

        mostrarResultado(promedioFinal);
    };

     function mostrarResultado(promedio) {

        // Actualizar el valor del promedio
        resultadoValor.textContent = promedio.toFixed(2);
        
        
        // Determinar la condición según el promedio
        let condicion = condicionFinal(promedio);
        let color = '';
        
        switch (condicion) 
        {
            case 'Excelente':
                color = '#28a745'; // Verde
                break;
            case 'Muy Bueno':
                color = '#17a2b8'; // Azul
                break;
            case 'Aprobado':
                color = '#ffc107'; // Amarillo
                break;
            case 'Desaprobado':
                color = '#dc3545'; // Rojo
                break;
            default:
                color = '#6c757d'; // Gris para valor fuera de rango
        }
        

        resultadoCondicion.textContent = condicion;
        resultadoValor.style.color = color;
        resultadoCondicion.style.color = color

        resultadoContainer.style.display = 'block';
        resultadoContainer.classList.add('mostrar');
        
        // Hacer scroll suave hasta el resultado
        resultadoContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
        
        console.log('🎯 Resultado mostrado:', {
            promedio: promedio.toFixed(2),
            condicion: condicion,
            color: color
        });
    }
}