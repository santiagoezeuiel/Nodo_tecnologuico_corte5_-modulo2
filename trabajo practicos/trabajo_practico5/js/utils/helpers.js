/**
 * Utilidades y helpers para la aplicación
 */

/**
 * Formatear número con separadores de miles
 * @param {number} numero - Número a formatear
 * @returns {string} - Número formateado
 */
export const formatearNumero = (numero) => {
    return numero.toLocaleString('es-AR');
};

/**
 * Capitalizar primera letra de un string
 * @param {string} texto - Texto a capitalizar
 * @returns {string} - Texto capitalizado
 */
export const capitalizar = (texto) => {
    if (!texto) return '';
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
};

/**
 * Validar si un objeto está vacío
 * @param {Object} obj - Objeto a validar
 * @returns {boolean} - True si está vacío
 */
export const objetoVacio = (obj) => {
    return Object.keys(obj).length === 0;
};

/**
 * Debounce para limitar llamadas a funciones
 * @param {Function} func - Función a debounce
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} - Función debounceada
 */
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Truncar texto a una longitud máxima
 * @param {string} texto - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} - Texto truncado
 */
export const truncarTexto = (texto, maxLength = 50) => {
    if (!texto) return '';
    if (texto.length <= maxLength) return texto;
    return texto.substring(0, maxLength) + '...';
};