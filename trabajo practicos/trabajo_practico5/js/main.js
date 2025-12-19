/**
 * main.js - Punto de entrada principal de la aplicación
 */

import { 
    obtenerYMostrarPaises, 
    cambiarVista, 
    limpiarTodo,
    ejecutarEjemploConexionBasica,
    inicializarSistemaTabs
} from './controlador/controlador01.js';

// Variables de estado
let vistaActual = 'tabla';

/**
 * Inicializar la aplicación
 */
const inicializarApp = () => {
    console.log('🚀 Aplicación inicializada - Trabajo Práctico Final');
    console.log('📚 Diplomatura Universitaria en Desarrollo Web Full Stack con JavaScript');
    
    // Ejecutar ejemplo del PUNTO 01 (conexión básica)
    ejecutarEjemploConexionBasica();
    
    // Inicializar sistema de pestañas
    inicializarSistemaTabs();
    
    // Configurar event listeners
    configurarEventListeners();
    
    console.log('✅ Todo listo. Selecciona una región para comenzar.');
};

/**
 * Configurar todos los event listeners
 */
const configurarEventListeners = () => {
    // Botón para obtener países
    const fetchBtn = document.getElementById('fetch-btn');
    if (fetchBtn) {
        fetchBtn.addEventListener('click', manejarObtenerPaises);
    }
    
    // Botón para limpiar resultados
    const clearBtn = document.getElementById('clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', limpiarTodo);
    }
    
    // Botón para cambiar vista
    const toggleViewBtn = document.getElementById('toggle-view');
    if (toggleViewBtn) {
        toggleViewBtn.addEventListener('click', manejarCambiarVista);
    }
    
    // Selección de región
    const regionSelect = document.getElementById('region-select');
    if (regionSelect) {
        regionSelect.addEventListener('change', () => {
            // Habilitar el botón si hay una región seleccionada
            if (fetchBtn) {
                fetchBtn.disabled = !regionSelect.value;
            }
        });
        
        // Permitir obtener países con Enter
        regionSelect.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && regionSelect.value) {
                manejarObtenerPaises();
            }
        });
    }
    
    console.log('🎮 Event listeners configurados');
};

/**
 * Manejar la obtención de países
 */
const manejarObtenerPaises = async () => {
    const regionSelect = document.getElementById('region-select');
    const region = regionSelect.value;
    
    if (!region) {
        mostrarMensajeSimple('Por favor, selecciona una región primero');
        return;
    }
    
    // Mostrar indicador de carga
    const fetchBtn = document.getElementById('fetch-btn');
    const originalText = fetchBtn.innerHTML;
    fetchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
    fetchBtn.disabled = true;
    
    try {
        // Obtener y mostrar países
        await obtenerYMostrarPaises(region);
    } catch (error) {
        console.error('Error al manejar obtención de países:', error);
    } finally {
        // Restaurar botón
        fetchBtn.innerHTML = originalText;
        fetchBtn.disabled = false;
    }
};

/**
 * Manejar el cambio de vista entre tabla y cards
 */
const manejarCambiarVista = () => {
    vistaActual = vistaActual === 'tabla' ? 'cards' : 'tabla';
    cambiarVista(vistaActual);
};

/**
 * Mostrar mensaje simple
 */
const mostrarMensajeSimple = (mensaje) => {
    alert(mensaje);
};

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarApp);

// Exportar para posibles pruebas
export { vistaActual };