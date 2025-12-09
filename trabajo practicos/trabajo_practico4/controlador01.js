//Importamos todos las arrow fintion del modulo01
import {cohorte01, cohorte02, cohorte03, cohorte04,
    mostrarAlumnos, unificarCohortes, separarAprobadosDesaprobados,
    ordenarPorNota, buscarPorDNI, contarAprobadosDesaprobados,
    contarAprobadosTernario, convertirAJSON, calcularEstadisticas,
    Alumno
} from './modulo01.js';

//Función para mostrar los resultados en el DOM
//Esta funcion logramos mostrar los contenidos dinamico en el DOM
const mostrarResultados = (titulo, contenido) => {

    const resultadosDiv = document.getElementById('resultados');

     resultadosDiv.innerHTML = `
        <div class="result-header">
            <h4>${titulo}</h4>
            <hr>
        </div>
        <div class="result-content">
            ${contenido}
        </div>
    `;
}

//Funcion para crear la tabla de alumno
//Con esta funcion creamos la trabla de forma dinamica en el DOM
const crearTablaAlumnos = (alumnos, mostrarEstado = false) => {

    let tablaHTML = `
    <table>
            <thead>
                <tr>
                    <th>DNI</th>
                    <th>Apellido</th>
                    <th>Nombre</th>
                    <th>Nota Final</th>
                    ${mostrarEstado ? '<th>Estado</th>' : ''}
                </tr>
            </thead>
            <tbody>
    `;

    alumnos.forEach(alumno => {
        const estadoClass = alumno.nota_final >= 4 ? 'aprobado' : 'desaprobado';
        tablaHTML += `
            <tr>
                <td>${alumno.dni}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.nombre}</td>
                <td class="${estadoClass}"> ${alumno.nota_final}</td>
                ${mostrarEstado ? `<td class="${estadoClass}">${alumno.estado}</td>` : ''}
            </tr>`

    });

    tablaHTML += `
            </tbody>
        </table>
        <p class="count-info">Total de alumnos: ${alumnos.length}</p>
    `;
    
    return tablaHTML;

}

window.onload = () => {

    //Comprobar en la consola que el controlador 01 esta funcionando
    console.log("El controlador 01 esta fincionando correctamente");

    //Capturar los elementos del DOM
    const btnEjercicio1 = document.getElementById('btnEjercicio1');
    const btnEjercicio2 = document.getElementById('btnEjercicio2');
    const btnEjercicio3 = document.getElementById('btnEjercicio3');
    const btnEjercicio4 = document.getElementById('btnEjercicio4');
    const btnEjercicio5 = document.getElementById('btnEjercicio5');
    const btnBuscarDNI = document.getElementById('btnBuscarDNI');
    const inputDNI = document.getElementById('dniBuscado');

    //Mostrar los elementos capturados en la consola
    console.log(btnEjercicio1);
    console.log(btnEjercicio2);
    console.log(btnEjercicio3);
    console.log(btnEjercicio4);
    console.log(btnEjercicio5);
    console.log(btnBuscarDNI);
    console.log(inputDNI)

    //Mostramos todos los alumnos de las diferentes cohortes en una tabla
    btnEjercicio1.addEventListener('click', () => {

        const cohortes = [cohorte01, cohorte02, cohorte03, cohorte04];
        let contenido = ''

        cohortes.forEach((cohorte, index) => {
            
            contenido += `
            <div class="cohorte-section">
                    <h5><i class="fas fa-users"></i> Cohorte ${index + 1} (${cohorte.length} alumnos)</h5>
                    ${crearTablaAlumnos(cohorte)}
                </div>
                <hr>
            `;

            //Mostramos todos los alumnos de las corte en la consola separados pro corte
            console.log(`\n=== Cohorte ${index + 1} ===`);
            mostrarAlumnos(cohorte).forEach(alumno => console.log(alumno));

        });

        //Titulo de de arroblad e la tabla
        mostrarResultados('Ejercicio 1: Mostrar Alumnos por Cohorte', contenido);

    });

    //En este boton hacemos que se unifique todos las cohortes en un a tabla y se muestre como queda el JSON
     btnEjercicio2.addEventListener('click', () => {
        const todosAlumnos = unificarCohortes();
        
        const contenido = `
            <div class="unified-info">
                <p><i class="fas fa-info-circle"></i> Se han unificado las 4 cohortes en un solo vector usando Spread Operator (...)</p>
                <p><strong>Total de alumnos unificados:</strong> ${todosAlumnos.length}</p>
                ${crearTablaAlumnos(todosAlumnos, true)}
                <div class="json-section">
                    <h5><i class="fas fa-code"></i> JSON Resultante:</h5>
                    <pre><code>${convertirAJSON(todosAlumnos)}</code></pre>
                </div>
            </div>
        `;
        
        //Mostramos todos los alumnos unificados en la consola
        console.log('\n=== Vector Unificado ===');
        console.log(todosAlumnos);
        
        //Titulo de la tabla
        mostrarResultados('Ejercicio 2: Unificar Todas las Cohortes', contenido);
    });

    // En este boton filtramos los aprobados
    btnEjercicio3.addEventListener('click', () => {
        const todosAlumnos = unificarCohortes();
        const { alumnosAprobados, alumnosDesaprobados } = separarAprobadosDesaprobados(todosAlumnos);
        
        const contenido = `
            <div class="filter-results">
                <div class="approved-section">
                    <h5 class="aprobado"><i class="fas fa-check-circle"></i> Alumnos Aprobados (nota > 4)</h5>
                    <p><strong>Cantidad:</strong> ${alumnosAprobados.length} alumnos</p>
                    ${crearTablaAlumnos(alumnosAprobados, true)}
                </div>
                
                <div class="disapproved-section">
                    <h5 class="desaprobado"><i class="fas fa-times-circle"></i> Alumnos Desaprobados (nota ≤ 4)</h5>
                    <p><strong>Cantidad:</strong> ${alumnosDesaprobados.length} alumnos</p>
                    ${crearTablaAlumnos(alumnosDesaprobados, true)}
                </div>
            </div>
        `;
        
        //Mostrar los alumnos filtrados en la consola segun si estan aprobados o desaprobados
        console.log('\n=== Alumnos Aprobados (nota > 4) ===');
        console.log(alumnosAprobados);
        console.log('\n=== Alumnos Desaprobados (nota ≤ 4) ===');
        console.log(alumnosDesaprobados);
        
        mostrarResultados('Ejercicio 3: Separar Aprobados y Desaprobados', contenido);
    });

    //En este boton ordenamos por nota de la menos a maytor nota
     btnEjercicio4.addEventListener('click', () => {
        const todosAlumnos = unificarCohortes();
        const alumnosOrdenados = ordenarPorNota(todosAlumnos);
        
        const contenido = `
            <div class="sort-results">
                <p><i class="fas fa-sort-amount-up"></i> Alumnos ordenados por nota de menor a mayor</p>
                ${crearTablaAlumnos(alumnosOrdenados, true)}
                <div class="sort-info">
                    <p><strong>Nota más baja:</strong> ${alumnosOrdenados[0].nota_final} 
                    (${alumnosOrdenados[0].nombre} ${alumnosOrdenados[0].apellido})</p>
                    <p><strong>Nota más alta:</strong> ${alumnosOrdenados[alumnosOrdenados.length - 1].nota_final} 
                    (${alumnosOrdenados[alumnosOrdenados.length - 1].nombre} ${alumnosOrdenados[alumnosOrdenados.length - 1].apellido})</p>
                </div>
            </div>
        `;
        
        // Mostrar en consola
        console.log('\n=== Alumnos Ordenados por Nota ===');
        console.log(alumnosOrdenados);
        
        mostrarResultados('Ejercicio 4: Ordenar por Nota (Menor a Mayor)', contenido);
    });

    //Buscamos al alumno por numero de documento
    const buscarAlumnoPorDNI = () => {
        const dni = inputDNI.value.trim();
        if (!dni) {
            mostrarResultados('Error en Búsqueda', 
                '<p class="error">Por favor, ingresa un DNI para buscar</p>');
            return;
        }
        
        const todosAlumnos = unificarCohortes();
        const alumnoEncontrado = buscarPorDNI(todosAlumnos, dni);
        
        if (alumnoEncontrado) {
            const contenido = `
                <div class="search-result success">
                    <h5><i class="fas fa-user-check"></i> Alumno Encontrado</h5>
                    <div class="alumno-card">
                        <p><strong>DNI:</strong> ${alumnoEncontrado.dni}</p>
                        <p><strong>Nombre Completo:</strong> ${alumnoEncontrado.nombre} ${alumnoEncontrado.apellido}</p>
                        <p><strong>Nota Final:</strong> <span class="${alumnoEncontrado.nota_final > 4 ? 'aprobado' : 'desaprobado'}">
                            ${alumnoEncontrado.nota_final}
                        </span></p>
                        <p><strong>Estado:</strong> <span class="${alumnoEncontrado.nota_final > 4 ? 'aprobado' : 'desaprobado'}">
                            ${alumnoEncontrado.estado}
                        </span></p>
                    </div>
                </div>
            `;
            
            console.log('\n=== Alumno Encontrado ===');
            console.log(alumnoEncontrado);
            
            mostrarResultados('Ejercicio 5: Búsqueda por DNI', contenido);
        } else {
            const contenido = `
                <div class="search-result error">
                    <h5><i class="fas fa-user-times"></i> Alumno No Encontrado</h5>
                    <p>No se encontró ningún alumno con el DNI: <strong>${dni}</strong></p>
                    <p>Intenta con uno de estos DNI: 12345678, 23456789, 34567890, etc.</p>
                </div>
            `;
            
            mostrarResultados('Ejercicio 5: Búsqueda por DNI', contenido);
        }
    };
    
    btnBuscarDNI.addEventListener('click', buscarAlumnoPorDNI);
    inputDNI.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscarAlumnoPorDNI();
        }
    });

    
    // EJERCICIO 5: Contar aprobados
    btnEjercicio5.addEventListener('click', () => {
        const todosAlumnos = unificarCohortes();
        const aprobadosIfElse = contarAprobadosDesaprobados(todosAlumnos);
        const aprobadosTernario = contarAprobadosTernario(todosAlumnos);
        
        // Calcular estadísticas adicionales
        const estadisticas = calcularEstadisticas(cohorte01, cohorte02, cohorte03, cohorte04);
        
        const contenido = `
            <div class="count-results">
                <h5><i class="fas fa-chart-pie"></i> Métricas de Aprobación</h5>
                
                <div class="metrics-grid">
                    <div class="metric-card">
                        <h6>Usando if/else</h6>
                        <p class="metric-value">${aprobadosIfElse}</p>
                        <p>aprobados</p>
                    </div>
                    
                    <div class="metric-card">
                        <h6>Usando operador ternario</h6>
                        <p class="metric-value">${aprobadosTernario}</p>
                        <p>aprobados</p>
                    </div>
                    
                    <div class="metric-card">
                        <h6>Total Alumnos</h6>
                        <p class="metric-value">${estadisticas.totalAlumnos}</p>
                        <p>alumnos</p>
                    </div>
                    
                    <div class="metric-card">
                        <h6>Porcentaje Aprobados</h6>
                        <p class="metric-value">${((aprobadosIfElse / estadisticas.totalAlumnos) * 100).toFixed(1)}%</p>
                        <p>de aprobación</p>
                    </div>
                </div>
                
                <div class="comparison">
                    <p><i class="fas fa-check-circle aprobado"></i> 
                    Ambos métodos ${aprobadosIfElse === aprobadosTernario ? 'coinciden' : 'NO coinciden'}</p>
                </div>
                
                <div class="additional-stats">
                    <h5><i class="fas fa-chart-line"></i> Estadísticas Adicionales</h5>
                    <ul>
                        <li><strong>Promedio de notas:</strong> ${estadisticas.promedioNotas}</li>
                        <li><strong>Nota máxima:</strong> ${estadisticas.notaMaxima}</li>
                        <li><strong>Nota mínima:</strong> ${estadisticas.notaMinima}</li>
                        <li><strong>Desaprobados:</strong> ${estadisticas.desaprobados}</li>
                    </ul>
                </div>
            </div>
        `;
        
        // Mostrar en consola
        console.log('\n=== Contar Aprobados ===');
        console.log(`Usando if/else: ${aprobadosIfElse}`);
        console.log(`Usando operador ternario: ${aprobadosTernario}`);
        console.log(`Coinciden: ${aprobadosIfElse === aprobadosTernario}`);
        
        mostrarResultados('Ejercicio 6: Contar Aprobados (Dos Métodos)', contenido);
    });

    const estadisticasIniciales = calcularEstadisticas(cohorte01, cohorte02, cohorte03, cohorte04);
    console.log('=== Estadísticas Iniciales ===');
    console.log(estadisticasIniciales);
    console.log('=== Datos Cargados Correctamente ===');
}