
//Definir la clase Alumno con sus propiedades y método.
export class Alumno {

    constructor(dni, nombre, apellido, nota_final) 
    {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota_final = nota_final;
    }

    //Definir el método get
    get estado () {

        return this.nota_final > 4 ? 'Aprobado' : 'Desaprobado';
    
    }

    // Método para convertir el objepto a formato json
    toJSON () {

        return {

            dni : this.dni,
            nombre : this.nombre,
            apellido : this.apellido,
            nota_final : this.nota_final,
            estado : this.estado

        }
    }
}


//Definir las listas de alumnos para coda corte
export const cohorte01 = [

    new Alumno("12345678", "Juan", "Perez", 7),
    new Alumno("23456789", "Ana", "Gomez", 6),
    new Alumno("34567890", "Carlos", "Lopez", 5),
    new Alumno("45678901", "Maria", "Martinez", 4)

]

export const cohorte02 = [

    new Alumno("56789012", "Sofia", "Ramirez", 9),
    new Alumno("67890123", "Luis", "Fernandez", 4),
    new Alumno("78901234", "Elena", "Torres", 5)

]

export const cohorte03 = [
    new Alumno("89012345", "Pedro", "Álvarez", 10),
    new Alumno("90123456", "Clara", "Méndez", 3),
    new Alumno("12345679", "Jorge", "Salinas", 6),
    new Alumno("23456780", "Andrea", "Cruz", 2),
    new Alumno("34567891", "Sergio", "Paredes", 8),
    new Alumno("20125234", "Maria", "Suarez", 4)
];

export const cohorte04 = [
    new Alumno("45678902", "Lucía", "Ortiz", 7),
    new Alumno("56789013", "Miguel", "Vega", 4),
    new Alumno("67890124", "Raquel", "Silva", 9),
    new Alumno("78901235", "Hugo", "Moreno", 5),
    new Alumno("89012346", "Natalia", "Quinteros", 6),
    new Alumno("90123457", "Diego", "Arce", 3)
];

//Función para mostrar los alumnos y su esdado de notas
export const mostrarAlumnos = (vectorAlumnos) => {

    //Crear un array para almacenar los resultados de cada alumno
    const resultado = [];
    
    //Recorrer el vector de alumnos y obtener su estados.
    vectorAlumnos.forEach(alumno => {
        resultado.push(`${alumno.nombre}, ${alumno.apellido}: ${alumno.estado}`);
    });

    //Retornar el array con los Alumnos y el estado de sus notas.
    return resultado;

}

//Funcion para unificar todas las cohortes en una sola lista
export const unificarCohortes = () => {

    return [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

}

//Funcion para separa los alumnos aprobados y desaprobados
export const separarAprobadosDesaprobados = (vectorAlumnos) => {

    const alumnosAprobados = vectorAlumnos.filter(alumno => alumno.nota_final >= 4);
    const alumnosDesaprobados = vectorAlumnos.filter(alumno => alumno.nota_final < 4);
    return { alumnosAprobados, alumnosDesaprobados };

};

//Función para ordenar los alumnos por nota final del menor al mayor
export const ordenarPorNota = (vectorAlumnos) => {

    //Usando el método sort para ordenar los alumnos por su nota final
    return [...vectorAlumnos].sort((a, b) => a.nota_final - b.nota_final);

};

//Función para buscar un alumno por su DNI usando el método 'find'
export const buscarPorDNI = (vectorAlumnos, dni) => {

    //Retornar el alumno que coicida con el DNI buscado
    return vectorAlumnos.find(alumno => alumno.dni === dni);

}

//Funcion en donde se cuentan los alumnos aprobados y desaprobados
export const contarAprobadosDesaprobados = (vectorAlumnos) => {

    return vectorAlumnos.reduce((contador, alumno) => {

        //Si la nota final es mayor oigual a 4, incrementa el contador de aprobados.
        //Cuidado en el return del if ya que poninedo (++) este no cuenta pero poniendo (+1) funciona
        if (alumno.nota_final >= 4)
        {
            return contador +1;
        }
        else
        {
            return contador;
        }

    }, 0);

}

//Función en donde se cuenta los alumnos aprobados usando el operador ternario
//Ojo si ponemos (++) no funcionara tenemos que colocar el (+1) para que funcione 
export const contarAprobadosTernario = (vectorAlumnos) => {

    //Retorna la cantidad de los alumnos aprobados
    return vectorAlumnos.reduce ((contador, alumno) => 
        alumno.nota_final >= 4 ? contador +1 : contador, 0);

}

//Funcion para convertir el vector de alumnos a formato JSON
export const convertirAJSON = (vectorAlumnos) => {

    //Coloco el null, 2 para que el JSON se vea formateado con identacion de 2 espacios
    return JSON.stringify(vectorAlumnos.map(alumno => alumno.toJSON()), null, 2);

}

export const calcularEstadisticas = (...cohortes) => {

    const todosAlumnos = [].concat(...cohortes);

    const {alumnosAprobados, alumnosDesaprobados} = separarAprobadosDesaprobados(todosAlumnos);

    const nota = todosAlumnos.map(alumno => alumno.nota_final);
    
    const promedio = nota.reduce((a, b) => a + b, 0) / nota.length;

    return {
        totalAlumnos: todosAlumnos.length,
        aprobados: alumnosAprobados.length,
        desaprobados: alumnosDesaprobados.length,
        promedioNotas: promedio.toFixed(2),
        //Con la esta funciones estaticas como (Math.max) y (Math.min) podemos sacar la nota maxima y la nota minima
        notaMaxima: Math.max(...nota),    
        notaMinima: Math.min(...nota) 
    }
}