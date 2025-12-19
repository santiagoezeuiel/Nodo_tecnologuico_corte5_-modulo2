//Importamos las funciones del modelo y la vistas
import { 
    obtenerPaisesProcesados,
    destructuringIncisoA,
    destructuringIncisoB,
    destructuringIncisoC,
    destructuringIncisoD,
    spreadIncisoE,
    spreadIncisoF,
    ejecutarEjemploPunto1Modelo,
    obtenerNombreRegion
} from '../modelo/modulo01.js';

import { 
    mostrarPaisesEnTabla,
    mostrarPaisesEnCards,
    mostrarResultadoDestructuring,
    mostrarMensajeError,
    actualizarInfoRegion,
    limpiarResultados,
    inicializarTabs
} from '../vista/funsionesDeLaVista.js';;

//Variable para mantener el estado actual
let paisesActuales = [];
let vistaActual = 'tabla';
let regionActual = '';

//Este es el controlador principal del sistema
/**
 * Controlador principal para obtener y mostrar países
 * @param {string} region 
 */

//Funsion principal del controlador en donde se orquesta el flujo de datos entre el modelo y la vista.
export const obtenerYMostrarPaises = async (region) => {
    try {
        console.log(`🎯 Controlador: Obteniendo países de ${region}`);
        
        //Obtine los datos procesados del modelo
        const resultado = await obtenerPaisesProcesados(region);
        
        // Guardar datos actuales
        paisesActuales = resultado.paises;
        regionActual = region;
        
        //Actualizar información de la región
        const nombreRegion = obtenerNombreRegion(region);
        actualizarInfoRegion(nombreRegion, paisesActuales.length);
        
        //Pasar los datos a la vista para mostralos
        mostrarPaisesEnTabla(paisesActuales);
        
        //Ejercicios de destructuring
        ejecutarEjerciciosDestructuring(resultado.datosCrudos, region);
        
        console.log(`✅ Controlador: Datos obtenidos y procesados para ${nombreRegion}`);
        return paisesActuales;
        
    } catch (error) {
        const mensaje = `Error al obtener países: ${error.message}`;
        mostrarMensajeError(mensaje);
        console.error('❌ Error en obtenerYMostrarPaises:', error);
    }
};

/**
 * Cambiar entre vista de tabla y vista de tarjetas
 * @param {string} tipoVista - 'tabla' o 'cards'
 */

//Funsion para cambiar la vista entre tabla o cards en el DOM
export const cambiarVista = (tipoVista) => {
    if (paisesActuales.length === 0) {
        mostrarMensajeError('No hay países para mostrar. Primero obtén datos de una región.');
        return;
    }
    
    vistaActual = tipoVista;
    
    if (tipoVista === 'cards') {
        mostrarPaisesEnCards(paisesActuales);
    } else {
        mostrarPaisesEnTabla(paisesActuales);
    }
    
    // Actualizar texto del botón
    const toggleViewBtn = document.getElementById('toggle-view');
    if (toggleViewBtn) {
        const icon = vistaActual === 'tabla' ? 'fas fa-th-large' : 'fas fa-table';
        const text = vistaActual === 'tabla' ? 'Cambiar a Vista de Tarjetas' : 'Cambiar a Vista de Tabla';
        toggleViewBtn.innerHTML = `<i class="${icon}"></i> ${text}`;
    }
};

//Funsion para limpiar todos los resultados y el estado actual
export const limpiarTodo = () => {
    paisesActuales = [];
    regionActual = '';
    limpiarResultados();
    console.log('🧹 Controlador: Todos los resultados limpiados');
};


//Usamos @param para llamr a las funciones del modelo y la vista
/**
 * Ejecutar todos los ejercicios de destructuring
 * @param {Array} paisesCrudos - Array de países crudos de la API
 * @param {string} region - Región actual
 */

//funsion para ejecutar todos los ejercicios de destructuring.
export const ejecutarEjerciciosDestructuring = (paisesCrudos, region) => {
    if (!paisesCrudos || paisesCrudos.length === 0) {
        console.warn('⚠️ No hay datos para los ejercicios de destructuring');
        return;
    }
    
    console.log('📚 Controlador: Ejecutando ejercicios de destructuring...');
    
    //Funsion para cada inciso
    // Inciso A: Destructuring básico
    const resultadoA = destructuringIncisoA(paisesCrudos);
    mostrarResultadoDestructuring('a', resultadoA);
    
    // Inciso B: Destructuring con alias
    const resultadoB = destructuringIncisoB(paisesCrudos);
    mostrarResultadoDestructuring('b', resultadoB);
    
    // Inciso C: Destructuring en parámetros
    const resultadoC = destructuringIncisoC(paisesCrudos);
    mostrarResultadoDestructuring('c', resultadoC);
    
    // Inciso D: Destructuring de arrays con valor por defecto
    const resultadoD = destructuringIncisoD(paisesCrudos);
    mostrarResultadoDestructuring('d', resultadoD);
    
    // Inciso E: Spread Operator - Combinar regiones
    ejecutarSpreadIncisoE(region);
    
    // Inciso F: Spread Operator - Objeto simplificado
    if (paisesCrudos.length > 0) {
        const resultadoF = spreadIncisoF(paisesCrudos[0]); // Tomar primer país como ejemplo
        mostrarResultadoDestructuring('f', [JSON.stringify(resultadoF, null, 2)]);
    }
};

/**
 * Ejecutar Spread Operator - Inciso E (combinar regiones)
 * @param {string} regionActual - Región actual
 */
const ejecutarSpreadIncisoE = async (regionActual) => {
    try {
        // Elegir una región diferente a la actual para combinar
        const regiones = ['africa', 'americas', 'asia', 'europe', 'oceania'];
        const otraRegion = regiones.find(r => r !== regionActual) || 'asia';
        
        const resultado = await spreadIncisoE(regionActual, otraRegion);
        
        const mensaje = `Regiones combinadas: ${obtenerNombreRegion(regionActual)} (${resultado.cantidadRegion1} países) + ${obtenerNombreRegion(otraRegion)} (${resultado.cantidadRegion2} países) = ${resultado.totalCombinado} países totales`;
        
        mostrarResultadoDestructuring('e', [mensaje]);
        
    } catch (error) {
        console.error('Error en Spread Inciso E:', error);
        mostrarResultadoDestructuring('e', [`Error: ${error.message}`]);
    }
};


//Funsion oara ejecutar conexion
export const ejecutarEjemploConexionBasica = async () => {
    console.log('🔌 Controlador: Ejecutando ejemplo de conexión básica (PUNTO 01)');
    
    try {
        const paisesEjemplo = await ejecutarEjemploPunto1Modelo();
        console.log('✅ Ejemplo de conexión básica completado');
        return paisesEjemplo;
    } catch (error) {
        console.error('❌ Error en ejemplo de conexión básica:', error);
    }
};

//Inicializar sistema de pestañas en el DOM
export const inicializarSistemaTabs = () => {
    inicializarTabs();
    console.log('✅ Controlador: Sistema de pestañas inicializado');
};