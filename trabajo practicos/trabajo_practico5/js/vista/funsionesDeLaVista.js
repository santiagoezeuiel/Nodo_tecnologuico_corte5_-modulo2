/**
 * Vista - Funciones para renderizar en el DOM
 * Se encarga de recibir los datos procesados desde el Controlador y renderizarlos en el DOM
 */

/**
 * Mostrar países en una tabla HTML (PUNTO 04)
 * @param {Array} paises - Array de países procesados
 */
export const mostrarPaisesEnTabla = (paises) => {
    const tableContainer = document.getElementById('table-container');
    const cardsContainer = document.getElementById('cards-container');
    
    if (!tableContainer) {
        console.error('❌ No se encontró el contenedor de tabla');
        return;
    }
    
    // Ocultar cards y mostrar tabla
    if (cardsContainer) {
        cardsContainer.style.display = 'none';
        cardsContainer.innerHTML = '';
    }
    
    tableContainer.style.display = 'block';
    
    if (!paises || paises.length === 0) {
        tableContainer.innerHTML = '<p class="empty-message">No se encontraron países para esta región</p>';
        return;
    }
    
    console.log('📊 Vista: Mostrando países en tabla');
    
    // Crear tabla HTML
    let tablaHTML = `
        <table>
            <thead>
                <tr>
                    <th>Bandera</th>
                    <th>Nombre</th>
                    <th>Capital</th>
                    <th>Población</th>
                    <th>Región</th>
                    <th>Subregión</th>
                    <th>Religion</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    paises.forEach(pais => {
        const nombre = pais.nombre || 'Desconocido';
        const capital = pais.capital[0] || 'Sin capital';
        const poblacion = pais.poblacion?.toLocaleString() || 'N/A';
        const region = pais.region || 'N/A';
        const subregion = pais.subregion || 'N/A';
        const bandera = pais.bandera.png || '';
        const religion = pais.religion || 'N/A';
        
        tablaHTML += `
            <tr>
                <td><img src="${bandera}" alt="Bandera de ${nombre}" class="flag-img" height="30"></td>
                <td><strong>${nombre}</strong></td>
                <td>${capital}</td>
                <td>${poblacion}</td>
                <td>${region}</td>
                <td>${subregion}</td>
                <td>${religion}</td>
            </tr>
        `;
    });
    
    tablaHTML += `
            </tbody>
        </table>
    `;
    
    tableContainer.innerHTML = tablaHTML;
};

/**
 * Mostrar países en tarjetas (cards) - Alternativa
 * @param {Array} paises - Array de países procesados
 */
export const mostrarPaisesEnCards = (paises) => {
    const cardsContainer = document.getElementById('cards-container');
    const tableContainer = document.getElementById('table-container');
    
    if (!cardsContainer) {
        console.error('❌ No se encontró el contenedor de cards');
        return;
    }
    
    // Ocultar tabla y mostrar cards
    if (tableContainer) {
        tableContainer.style.display = 'none';
    }
    
    cardsContainer.style.display = 'grid';
    cardsContainer.innerHTML = '';
    
    if (!paises || paises.length === 0) {
        cardsContainer.innerHTML = '<p class="empty-message">No se encontraron países</p>';
        return;
    }
    
    console.log('🃏 Vista: Mostrando países en cards');
    
    // Crear tarjetas para cada país
    paises.forEach(pais => {
        const nombre = pais.nombre || 'Desconocido';
        const capital = pais.capital[0] || 'Sin capital';
        const poblacion = pais.poblacion?.toLocaleString() || 'N/A';
        const region = pais.region || 'N/A';
        const bandera = pais.bandera.png || '';
        
        const card = document.createElement('div');
        card.className = 'country-card';
        card.innerHTML = `
            <img src="${bandera}" alt="Bandera de ${nombre}" class="country-flag">
            <div class="country-info">
                <h3 class="country-name">${nombre}</h3>
                <div class="country-detail">
                    <span class="detail-label">Capital:</span>
                    <span>${capital}</span>
                </div>
                <div class="country-detail">
                    <span class="detail-label">Población:</span>
                    <span>${poblacion}</span>
                </div>
                <div class="country-detail">
                    <span class="detail-label">Región:</span>
                    <span>${region}</span>
                </div>
                <div class="country-detail">
                    <span class="detail-label">Moneda:</span>
                    <span>${pais.moneda || 'N/A'}</span>
                </div>
            </div>
        `;
        
        cardsContainer.appendChild(card);
    });
};

/**
 * Mostrar resultados de los ejercicios de destructuring
 * @param {string} inciso - Letra del inciso (a, b, c, d, e, f)
 * @param {Array} resultados - Array de strings con los resultados
 */
export const mostrarResultadoDestructuring = (inciso, resultados) => {
    const outputElement = document.getElementById(`output-${inciso}`);
    
    if (!outputElement) {
        console.error(`❌ No se encontró el elemento output-${inciso}`);
        return;
    }
    
    if (!resultados || resultados.length === 0) {
        outputElement.innerHTML = '<p>No hay resultados para mostrar</p>';
        return;
    }
    
    let html = '';
    
    if (inciso === 'f') {
        // Para el inciso F (objeto JSON), mostrarlo formateado
        html = `<pre>${resultados[0]}</pre>`;
    } else {
        // Para los demás incisos, mostrar como lista
        resultados.forEach((linea, index) => {
            html += `<p>${index + 1}. ${linea}</p>`;
        });
    }
    
    outputElement.innerHTML = html;
    console.log(`✅ Vista: Mostrando resultados del inciso ${inciso.toUpperCase()}`);
};

/**
 * Mostrar mensaje de error
 * @param {string} mensaje - Mensaje de error
 */
export const mostrarMensajeError = (mensaje) => {
    // Crear o actualizar elemento de mensaje
    let mensajeDiv = document.getElementById('mensaje-error');
    
    if (!mensajeDiv) {
        mensajeDiv = document.createElement('div');
        mensajeDiv.id = 'mensaje-error';
        mensajeDiv.className = 'mensaje-error';
        document.querySelector('.control-panel').appendChild(mensajeDiv);
    }
    
    mensajeDiv.innerHTML = `
        <div class="error-content">
            <i class="fas fa-exclamation-circle"></i>
            <span>${mensaje}</span>
            <button onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Auto-eliminar después de 5 segundos
    setTimeout(() => {
        if (mensajeDiv && mensajeDiv.parentNode) {
            mensajeDiv.remove();
        }
    }, 5000);
    
    console.error(`❌ Vista: ${mensaje}`);
};

/**
 * Actualizar información de la región en la interfaz
 * @param {string} nombreRegion - Nombre de la región
 * @param {number} cantidad - Cantidad de países
 */
export const actualizarInfoRegion = (nombreRegion, cantidad) => {
    const regionNameElement = document.getElementById('region-name');
    const countriesCountElement = document.getElementById('countries-count');
    
    if (regionNameElement) {
        const span = regionNameElement.querySelector('span');
        if (span) span.textContent = nombreRegion;
    }
    
    if (countriesCountElement) {
        const span = countriesCountElement.querySelector('span');
        if (span) span.textContent = cantidad;
    }
    
    console.log(`📍 Vista: Región actualizada - ${nombreRegion} (${cantidad} países)`);
};

/**
 * Limpiar todos los resultados de la vista
 */
export const limpiarResultados = () => {
    // Limpiar tabla
    const tableContainer = document.getElementById('table-container');
    if (tableContainer) {
        tableContainer.innerHTML = '<p class="empty-message">Selecciona una región para ver los países</p>';
        tableContainer.style.display = 'block';
    }
    
    // Limpiar cards
    const cardsContainer = document.getElementById('cards-container');
    if (cardsContainer) {
        cardsContainer.innerHTML = '';
        cardsContainer.style.display = 'none';
    }
    
    // Restablecer información de región
    actualizarInfoRegion('No seleccionada', 0);
    
    // Limpiar resultados de destructuring
    const incisos = ['a', 'b', 'c', 'd', 'e', 'f'];
    incisos.forEach(inciso => {
        const outputElement = document.getElementById(`output-${inciso}`);
        if (outputElement) {
            outputElement.innerHTML = '<p>Selecciona una región para ver el resultado</p>';
        }
    });
    
    // Limpiar mensajes de error
    const mensajeError = document.getElementById('mensaje-error');
    if (mensajeError) {
        mensajeError.remove();
    }
    
    console.log('🧹 Vista: Todos los resultados limpiados');
};

/**
 * Inicializar el sistema de pestañas (tabs)
 */
export const inicializarTabs = () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remover clase active de todos los botones
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ocultar todos los paneles
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Activar el botón clickeado
            button.classList.add('active');
            
            // Mostrar el panel correspondiente
            const tabPane = document.getElementById(tabId);
            if (tabPane) {
                tabPane.classList.add('active');
            }
            
            console.log(`🔖 Vista: Cambiando a pestaña ${tabId}`);
        });
    });
    
    console.log('✅ Vista: Sistema de pestañas inicializado');
};

/**
 * Agregar estilos adicionales para mensajes de error
 */
const agregarEstilosError = () => {
    const estilos = `
        <style>
            .mensaje-error {
                background-color: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
                border-radius: 8px;
                padding: 12px;
                margin: 15px 0;
                animation: fadeIn 0.3s ease;
            }
            
            .error-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .error-content i {
                margin-right: 10px;
                font-size: 1.2em;
            }
            
            .error-content button {
                background: none;
                border: none;
                color: #721c24;
                cursor: pointer;
                font-size: 1.1em;
                padding: 0 5px;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        </style>
    `;
    
    if (!document.querySelector('#estilos-error')) {
        const styleElement = document.createElement('div');
        styleElement.id = 'estilos-error';
        styleElement.innerHTML = estilos;
        document.head.appendChild(styleElement.firstChild);
    }
};

// Agregar estilos al cargar
document.addEventListener('DOMContentLoaded', agregarEstilosError);