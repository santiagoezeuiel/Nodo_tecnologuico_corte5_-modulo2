/**
 * api.js - Funciones específicas para consultar la API RestCountries
 */

import { obtenerDatosJSON } from './json.js';

// Base URL de la API
const API_BASE_URL = 'https://restcountries.com/v3.1';

/**
 * Obtener países por región
 * @param {string} region - Región a consultar
 * @returns {Promise<Array>} - Array de países
 */
export const obtenerPaisesPorRegion = async (region) => {
    const endpoint = `${API_BASE_URL}/region/${region}`;
    console.log(`📍 Consultando países de la región: ${region}`);
    
    try {
        const datos = await obtenerDatosJSON(endpoint);
        
        // Mostrar en consola (PUNTO 01 del TP)
        console.log('📊 RESULTADO DE LA API (PUNTO 01):', datos);
        console.log(`✅ Se obtuvieron ${datos.length} países de ${region}`);
        
        return datos;
    } catch (error) {
        console.error(`❌ Error al obtener países de ${region}:`, error);
        throw error;
    }
};

/**
 * Obtener todos los endpoints disponibles
 * @returns {Object} - Endpoints por región
 */
export const obtenerEndpoints = () => {
    return {
        africa: `${API_BASE_URL}/region/africa`,
        americas: `${API_BASE_URL}/region/americas`,
        asia: `${API_BASE_URL}/region/asia`,
        europe: `${API_BASE_URL}/region/europe`,
        oceania: `${API_BASE_URL}/region/oceania`
    };
};

/**
 * Obtener información de un país específico
 * @param {string} codigo - Código del país (ej: 'arg', 'bra')
 * @returns {Promise<Object>} - Datos del país
 */
export const obtenerPaisPorCodigo = async (codigo) => {
    const endpoint = `${API_BASE_URL}/alpha/${codigo}`;
    
    try {
        const datos = await obtenerDatosJSON(endpoint);
        return datos[0]; // La API devuelve un array con un elemento
    } catch (error) {
        console.error(`Error al obtener país con código ${codigo}:`, error);
        throw error;
    }
};

/**
 * Obtener países por nombre
 * @param {string} nombre - Nombre del país
 * @returns {Promise<Array>} - Array de países
 */
export const obtenerPaisesPorNombre = async (nombre) => {
    const endpoint = `${API_BASE_URL}/name/${nombre}`;
    
    try {
        const datos = await obtenerDatosJSON(endpoint);
        return datos;
    } catch (error) {
        console.error(`Error al buscar país "${nombre}":`, error);
        throw error;
    }
};

/**
 * Obtener países de múltiples regiones
 * @param {Array} regiones - Array de regiones
 * @returns {Promise<Array>} - Países combinados
 */
export const obtenerPaisesDeMultiplesRegiones = async (regiones) => {
    try {
        const promesas = regiones.map(region => obtenerPaisesPorRegion(region));
        const resultados = await Promise.all(promesas);
        
        // Combinar todos los resultados en un solo array
        const paisesCombinados = resultados.flat();
        
        console.log(`🌍 Países combinados de ${regiones.join(', ')}: ${paisesCombinados.length} países`);
        
        return paisesCombinados;
    } catch (error) {
        console.error('Error al obtener países de múltiples regiones:', error);
        throw error;
    }
};

/**
 * Obtener lista de todas las regiones disponibles
 * @returns {Array} - Lista de regiones
 */
export const obtenerRegionesDisponibles = () => {
    return [
        { valor: 'africa', nombre: 'África' },
        { valor: 'americas', nombre: 'Américas' },
        { valor: 'asia', nombre: 'Asia' },
        { valor: 'europe', nombre: 'Europa' },
        { valor: 'oceania', nombre: 'Oceanía' }
    ];
};

/**
 * Ejecutar ejemplo del PUNTO 01 del TP
 */
export const ejecutarEjemploPunto1 = async () => {
    console.log('=== PUNTO 01: Ejemplo de conexión a API ===');
    
    try {
        // Usar la función arrow definida en json.js
        const paisesEuropa = await obtenerDatosJSON(`${API_BASE_URL}/region/europe`);
        
        console.log('✅ Ejemplo completado exitosamente');
        console.log(`📊 Se obtuvieron ${paisesEuropa.length} países de Europa`);
        console.log('🔍 Primer país obtenido:', paisesEuropa[0]?.name?.common || 'No disponible');
        
        return paisesEuropa;
    } catch (error) {
        console.error('❌ Error en ejemplo del Punto 1:', error);
        return [];
    }
};