/*
Ejercicio Nro. 20:
Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un
paciente diabético; Basada en tres datos importantes para el cálculo.
1) Nivel de glucosa en sangre
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
a. Tipo 1
Diplomatura Universitaria en Desarrollo Web
Full Stack con JavaScript
Módulo: JavaScript
b. Tipo 2
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente.
*/


export const calcularInsulina = (glucosa, peso, tipo) => {
    let dosis = 0;

    if (tipo === "1") {
        dosis = 0.5 * peso; // 50% del peso
        if (glucosa > 180) {
            dosis += 0.5 * glucosa; // 50% de glucosa si >180
        }
    } else if (tipo === "2") {
        dosis = 0.2 * peso; // 20% del peso
        if (glucosa > 180) {
            dosis += 0.5 * glucosa; // 50% de glucosa si >180
        }
    } else {
        return "Tipo de diabetes no válido";
    }

    return dosis;
};