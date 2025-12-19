
//Funsion para obtener datos JSON desde un endpoid
export const obtenerDatosJSON = async (endpoint) => {

    console.log(`Conectando a : ${endpoint}`);

    try {

        //Realiza la peticion fetch al endpoid
        const repuesta = await fetch(endpoint);

        if (!repuesta.ok){

            //Realiza la peticion y si hay un error HTTP lo lanza
            throw new Error(`Error HTTP: ${repuesta.status} - ${repuesta.statusText}`);
        }

        //Convierte la respuesta a JSON
        const dataJSON = await repuesta.json();

        console.log(`Datos obtenidos correctamente: ${dataJSON.length} elementos`);

        return dataJSON;
    }

    catch (error) {

        console.log(`Error al obtener datos de  ${endpoint} : `, error);

        throw error;

    }

};

//Funsion para transformar datos JSON a DTos de paises
export const transformarDatosPaises = (datos) => {

    if (!Array.isArray(datos))
    {

        console.log(`Los datos proporcionados no son array`);
        return [];

    }

    return datos.map(pais => ({

        nombre: pais.name?.common || 'Desconocido',
        nombreOficial: pais.nombre?.official || '',
        capital: pais.capital || ['sin capital'],
        poblacion: pais.population || 0,
        region: pais.region || 'Desconocida',
        religion: pais.religion || 'Desconocida',
        subregion: pais.subregion || '',
        bandera: {
            png: pais.flags?.png || '',
            svg: pais.flags?.svg || '',
            alt: pais.flags?.alt || `Bandera de ${pais.name?.common || 'desconocido'}`
        },
        codigo: pais.cca2 || pais.cca3 || '',
        moneda: pais.currencies ? Object.values(pais.currencies)[0]?.name : 'Desconocida',
        idioma: pais.lenguages ? Object.values(pais.languages)[0] : 'Desconocido',
        zonaHoraria: pais.timezones?.[0] || '',
        datosCompletos: pais
    }));

};

//Funsion para filtarar paises por poblacion minima.
export const filtrarPorPoblacion = (paises, poblacionMinima) => {

    return paises.filter(pais => pais.poblacion >= poblacionMinima);

}

//Funsion para ordenar paises por nombre
export const ordenarPaises = (paises, orden = 'asc') => {

    return [...paises].sort((a, b) => {

        const nombreA = a.nombre.toLowerCase();
        const nombreB = b.nombre.toLowerCase();

        if (orden === 'asc')
        {
            return nombreA.localeCompare(nombreB);
        }
        else
        {
            return nombreB.localeCompare(nombreA);
        }

    });

};

//Funsion para obtener estadisticas de los paises.
export const obtenerEstadisticas = (paises) => {

    if (!paises.length) return null;

    const poblaciones = paises.map(p => p.poblacion);
    const totalPoblacion = poblaciones.reduce((sum, poblacion) => sum + poblacion, 0);

    return {

        totalPaises: paises.length, 
        totalPoblacion: totalPoblacion,
        poblacionPromedio: Math.round(totalPoblacion / paises.length),
        paisesMasPoblado: paises.reduce((max, pais) => pais.poblacion > max.poblacion ? pais : max, paises[0]),
        paisesMenonsPoblados: paises.reduce((min, pais) => pais.poblacion < min.poblacion ? pais : min, paises[0])
    };
};
