/*
Ejercicio propuesto Nro. 13:
	Realizar una función que pueda calcular y determinar la dosis de insulina recomendada para un paciente diabético. 
    Basada en tres datos importantes para el cálculo.
1)	Nivel de glucosa en sangre
2)	Peso Corporal (en kilogramos)
3)	Tipo de diabetes
a.	Tipo 1
b.	Tipo 2
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, 
este último termino solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, 
este último termino solamente si la glucosa es mayor a  180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada (argumentos)
nivel de glucosa, peso corporal y tipo de diabetes.
Nota: expresar las funciones de forma tradicional y como arrow functions
Ejercicio propuesto Nro. 14:
	Realizar una función que pueda obtener y calcular el IMC – índice de masa corporal s
    abiendo que la fórmula es la siguiente IMC = peso (kg) / altura (metros) al cuadrado
*/

/*
Calculadora de Dosis de Insulina - Función Tradicional
*/

/*
Calculadora de Dosis de Insulina con Interfaz de Prompt
*/

// Función tradicional con validación completa
function calcularDosisTradicional(glucosa, peso, tipoDiabetes) {
    // Validaciones
    if (isNaN(glucosa) || glucosa <= 0) {
        throw new Error("La glucosa debe ser un número positivo");
    }
    
    if (isNaN(peso) || peso <= 0) {
        throw new Error("El peso debe ser un número positivo");
    }
    
    if (tipoDiabetes !== 1 && tipoDiabetes !== 2) {
        throw new Error("El tipo de diabetes debe ser 1 o 2");
    }
    
    // Cálculo
    let dosisBase = 0;
    let dosisGlucosa = 0;
    
    if (tipoDiabetes === 1) {
        dosisBase = peso * 0.5; // 50% del peso
    } else {
        dosisBase = peso * 0.2; // 20% del peso
    }
    
    if (glucosa > 180) {
        dosisGlucosa = glucosa * 0.5; // 50% de la glucosa
    }
    
    return dosisBase + dosisGlucosa;
}

// Arrow function compacta
const calcularDosisArrow = (glucosa, peso, tipoDiabetes) => 
    (tipoDiabetes === 1 ? peso * 0.5 : peso * 0.2) + 
    (glucosa > 180 ? glucosa * 0.5 : 0);

// PROGRAMA PRINCIPAL CON PROMPT
console.log("💉 CALCULADORA DE DOSIS DE INSULINA");
console.log("====================================");

try {
    // Ingreso de datos mediante prompt
    let glucosa = parseFloat(prompt("Ingrese el nivel de glucosa en sangre (mg/dL):"));
    let peso = parseFloat(prompt("Ingrese el peso corporal (kg):"));
    let tipoDiabetes = parseInt(prompt("Ingrese el tipo de diabetes:\n1 - Tipo 1\n2 - Tipo 2"));
    
    console.log("\n📥 DATOS INGRESADOS:");
    console.log("─".repeat(25));
    console.log(`Glucosa: ${glucosa} mg/dL`);
    console.log(`Peso: ${peso} kg`);
    console.log(`Tipo de diabetes: ${tipoDiabetes}`);
    
    // Validación básica
    if (isNaN(glucosa) || isNaN(peso) || isNaN(tipoDiabetes)) {
        throw new Error("Debe ingresar valores numéricos válidos");
    }
    
    if (glucosa <= 0 || peso <= 0) {
        throw new Error("La glucosa y el peso deben ser mayores a 0");
    }
    
    if (tipoDiabetes !== 1 && tipoDiabetes !== 2) {
        throw new Error("El tipo de diabetes debe ser 1 o 2");
    }
    
    // Cálculo de dosis
    let dosisTradicional = calcularDosisTradicional(glucosa, peso, tipoDiabetes);
    let dosisArrow = calcularDosisArrow(glucosa, peso, tipoDiabetes);
    
    // Mostrar resultados
    console.log("\n📊 RESULTADO:");
    console.log("─".repeat(20));
    console.log(`💊 Dosis recomendada: ${dosisTradicional.toFixed(2)} unidades`);
    
    // Verificar que ambas funciones dan el mismo resultado
    if (dosisTradicional.toFixed(2) !== dosisArrow.toFixed(2)) {
        console.log("⚠️  Discrepancia entre funciones de cálculo");
    }
    
    // Desglose detallado
    console.log("\n🔍 DESGLOSE DEL CÁLCULO:");
    console.log("─".repeat(30));
    
    let porcentajePeso = tipoDiabetes === 1 ? "50%" : "20%";
    let dosisBase = tipoDiabetes === 1 ? peso * 0.5 : peso * 0.2;
    
    console.log(`• Dosis base (${porcentajePeso} del peso): ${dosisBase.toFixed(2)} unidades`);
    
    if (glucosa > 180) {
        console.log(`• Dosis por glucosa elevada (50% de ${glucosa}): ${(glucosa * 0.5).toFixed(2)} unidades`);
        console.log(`• Glucosa: ${glucosa} mg/dL (> 180 - requiere ajuste)`);
    } else {
        console.log(`• Dosis por glucosa: 0 unidades`);
        console.log(`• Glucosa: ${glucosa} mg/dL (≤ 180 - sin ajuste)`);
    }
    
    // Información adicional según el tipo
    console.log("\n💡 INFORMACIÓN ADICIONAL:");
    console.log("─".repeat(30));
    
    if (tipoDiabetes === 1) {
        console.log("• Tipo 1: Se utiliza el 50% del peso como base");
        console.log("• La insulina es esencial para la supervivencia");
    } else {
        console.log("• Tipo 2: Se utiliza el 20% del peso como base");
        console.log("• Puede combinarse con otros medicamentos orales");
    }
    
    // Recomendaciones generales
    console.log("\n⚠️  RECOMENDACIONES:");
    console.log("─".repeat(20));
    console.log("• Esta calculadora es solo para fines educativos");
    console.log("• Consulte siempre con su endocrinólogo");
    console.log("• Monitoree regularmente sus niveles de glucosa");
    console.log("• Ajuste la dosis según las indicaciones médicas");
    
} catch (error) {
    console.log(`❌ ERROR: ${error.message}`);
    console.log("Por favor, reinicie el programa e ingrese datos válidos");
}

console.log("\n====================================");
console.log("¡Programa finalizado!");