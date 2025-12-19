/**
 * Modelo - Funciones para procesamiento de datos
 * Contiene toda la lógica de consultas a APIs y procesamiento de datos
 */

import { 
    obtenerPaisesPorRegion, 
    obtenerPaisesDeMultiplesRegiones,
    ejecutarEjemploPunto1
} from '../api.js';

import { 
    transformarDatosPaises,
    filtrarPorPoblacion,
    ordenarPaises,
    obtenerEstadisticas
} from '../json.js';

/**
 * Obtener y procesar países de una región
 * @param {string} region - Región a consultar
 * @returns {Promise<Object>} - Datos procesados
 */
export const obtenerPaisesProcesados = async (region) => {
    try {
        // 1. Obtener datos crudos de la API
        const datosCrudos = await obtenerPaisesPorRegion(region);
        
        // 2. Transformar datos
        const datosTransformados = transformarDatosPaises(datosCrudos);
        
        // 3. Obtener estadísticas
        const estadisticas = obtenerEstadisticas(datosTransformados);
        
        return {
            region,
            paises: datosTransformados,
            estadisticas,
            datosCrudos // Mantener para los ejercicios de destructuring
        };
        
    } catch (error) {
        console.error('Error en obtenerPaisesProcesados:', error);
        throw error;
    }
};

/**
 * Ejercicios de DESTRUCTURING - Inciso A
 * Destructuring básico con forEach
 * @param {Array} paises - Array de países
 * @returns {Array} - Resultados formateados
 */
export const destructuringIncisoA = (paises) => {
    console.log('=== INCISO A: Destructuring básico con forEach ===');
    const resultados = [];
    
    if (!Array.isArray(paises)) {
        console.warn('⚠️ No se recibió un array de países');
        return [];
    }
    
    paises.forEach(pais => {
        // Destructuring para extraer propiedades
        const { name, capital, population, flags } = pais;
        const nombre = name?.common || 'Desconocido';
        const capitalPais = capital ? capital[0] : 'Sin capital';
        const poblacion = population?.toLocaleString() || '0';
        const bandera = flags?.png || '';
        
        const linea = `${nombre} | Capital: ${capitalPais} | Población: ${poblacion} | Bandera: ${bandera}`;
        console.log(linea);
        resultados.push(linea);
    });
    
    return resultados;
};

/**
 * Ejercicios de DESTRUCTURING - Inciso B
 * Destructuring con alias (renombrar variables)
 * @param {Array} paises - Array de países
 * @returns {Array} - Resultados formateados
 */
export const destructuringIncisoB = (paises) => {
    console.log('=== INCISO B: Destructuring con alias ===');
    const resultados = [];
    
    if (!Array.isArray(paises)) {
        console.warn('⚠️ No se recibió un array de países');
        return [];
    }
    
    paises.forEach(pais => {
        // Destructuring con alias (renombrar variables)
        const { 
            name: { common: nombrePais }, 
            capital: capitalArr, 
            population: poblacion, 
            flags: { png: banderaUrl } 
        } = pais;
        
        const capitalPais = capitalArr ? capitalArr[0] : 'Sin capital';
        const poblacionFormateada = poblacion?.toLocaleString() || '0';
        
        const linea = `${nombrePais} | Capital: ${capitalPais} | Población: ${poblacionFormateada} | Bandera: ${banderaUrl}`;
        console.log(linea);
        resultados.push(linea);
    });
    
    return resultados;
};

/**
 * Ejercicios de DESTRUCTURING - Inciso C
 * Destructuring en parámetros de función
 * @param {Array} paises - Array de países
 * @returns {Array} - Resultados formateados
 */
export const destructuringIncisoC = (paises) => {
    console.log('=== INCISO C: Destructuring en parámetros ===');
    const resultados = [];
    
    if (!Array.isArray(paises)) {
        console.warn('⚠️ No se recibió un array de países');
        return [];
    }
    
    // Función con destructuring en los parámetros
    const mostrarPais = ({ 
        name: { common: nombre }, 
        capital, 
        population, 
        flags: { png: bandera } 
    }) => {
        const capitalPais = capital ? capital[0] : 'Sin capital';
        const poblacionFormateada = population?.toLocaleString() || '0';
        return `${nombre} | Capital: ${capitalPais} | Población: ${poblacionFormateada} | Bandera: ${bandera}`;
    };
    
    paises.forEach(pais => {
        const linea = mostrarPais(pais);
        console.log(linea);
        resultados.push(linea);
    });
    
    return resultados;
};

/**
 * Ejercicios de DESTRUCTURING - Inciso D
 * Destructuring de arrays con valor por defecto
 * @param {Array} paises - Array de países
 * @returns {Array} - Resultados formateados
 */
export const destructuringIncisoD = (paises) => {
    console.log('=== INCISO D: Destructuring de arrays con valor por defecto ===');
    const resultados = [];
    
    if (!Array.isArray(paises)) {
        console.warn('⚠️ No se recibió un array de países');
        return [];
    }
    
    paises.forEach(pais => {
        const { 
            name: { common: nombre }, 
            capital = ['Sin capital'], // Valor por defecto
            population, 
            flags: { png: bandera } 
        } = pais;
        
        // Destructuring de arrays para obtener la primera capital
        const [primeraCapital = 'Sin capital'] = capital;
        const poblacionFormateada = population?.toLocaleString() || '0';
        
        const linea = `${nombre} | Capital: ${primeraCapital} | Población: ${poblacionFormateada} | Bandera: ${bandera}`;
        console.log(linea);
        resultados.push(linea);
    });
    
    return resultados;
};

/**
 * SPREAD OPERATOR - Inciso E
 * Combinar regiones usando Spread Operator
 * @param {string} region1 - Primera región
 * @param {string} region2 - Segunda región
 * @returns {Promise<Object>} - Resultados combinados
 */
export const spreadIncisoE = async (region1, region2) => {
    console.log('=== INCISO E: Spread Operator - Combinar regiones ===');
    
    try {
        // Obtener países de ambas regiones
        const [paisesRegion1, paisesRegion2] = await Promise.all([
            obtenerPaisesPorRegion(region1),
            obtenerPaisesPorRegion(region2)
        ]);
        
        // Usando Spread Operator para combinar los arrays
        const paisesCombinados = [...paisesRegion1, ...paisesRegion2];
        
        const resultado = {
            region1: region1,
            region2: region2,
            cantidadRegion1: paisesRegion1.length,
            cantidadRegion2: paisesRegion2.length,
            totalCombinado: paisesCombinados.length,
            paisesCombinados: paisesCombinados
        };
        
        console.log(`🌍 Combinando ${region1} (${paisesRegion1.length} países) + ${region2} (${paisesRegion2.length} países) = ${paisesCombinados.length} países totales`);
        
        return resultado;
        
    } catch (error) {
        console.error('Error en spreadIncisoE:', error);
        throw error;
    }
};

/**
 * SPREAD OPERATOR - Inciso F
 * Crear objeto simplificado usando Spread Operator
 * @param {Object} pais - Objeto país completo
 * @returns {Object} - Objeto simplificado
 */
export const spreadIncisoF = (pais) => {
    console.log('=== INCISO F: Spread Operator - Objeto simplificado ===');
    
    if (!pais) {
        console.warn('⚠️ No se recibió un país');
        return null;
    }
    
    // Destructuring para extraer lo necesario
    const { name, capital, population, flags } = pais;
    
    // Crear objeto base
    const paisSimplificado = {
        nombre: name?.common || 'Desconocido',
        capital: capital ? capital[0] : 'Sin capital',
        poblacion: population || 0,
        bandera: flags?.png || ''
    };
    
    // Usando Spread Operator para agregar propiedades condicionales
    const objetoFinal = {
        ...paisSimplificado,
        // Agregar información adicional si existe
        ...(pais.region && { region: pais.region }),
        ...(pais.subregion && { subregion: pais.subregion }),
        ...(pais.area && { area: pais.area }),
        fechaConsulta: new Date().toISOString()
    };
    
    console.log('📋 Objeto simplificado creado:', objetoFinal);
    
    return objetoFinal;
};

/**
 * Ejecutar ejemplo del PUNTO 01 (requerimiento básico)
 */
export const ejecutarEjemploPunto1Modelo = async () => {
    return await ejecutarEjemploPunto1();
};

/**
 * Obtener nombre legible de la región
 * @param {string} region - Código de región
 * @returns {string} - Nombre legible
 */
export const obtenerNombreRegion = (region) => {
    const regiones = {
        'africa': 'África',
        'americas': 'Américas',
        'asia': 'Asia',
        'europe': 'Europa',
        'oceania': 'Oceanía'
    };
    
    return regiones[region] || region;
};