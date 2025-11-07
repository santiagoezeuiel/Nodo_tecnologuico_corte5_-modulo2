
    console.log(`app is running`);

    /* aqui invoque la función clasica del cuadrado */
    let resultado1 = cuadrado(7);
    console.log(resultado1);

    /* aquí invoco la función flecha ó arrow function */
    let resultado2 = cuadrado2(7);
    console.log(resultado2);

    /* aquí voy a invocar la función de la
    superficie */

    let ancho = 4;
    let largo = 7;

    let superficieQuinchoGuillermo = superficie(ancho,largo);

    console.log(superficieQuinchoGuillermo);

    /* que es una variable booleana
        una variable boolean
    */

    let ejemploVariableNumerica = 200;
    let ejemploVariableString = "HOLA SOY DANIEL";

    let ejemploVariableBooleana = true;

    /* 
        REQUISITOS PARA SACAR EL CARNET DE CONDUCTOR 
    
        - Ser mayor de edad >= 16 años. (es true o es false)
        - No tener antecedenes penales provinciales (es true o es false)
        - Pasar el examen de la vista (es true o es false)
        - Pasar el examen de oido (es true o es false)
        - Aprobar el exámen práctico (es true o es false)
        - Aprobar el exámen teórico (lo mismo)
        - Tener Domicilio en la jurisdicción (true o false)

    */

    let examenVista = true;

    if(examenVista)
    {
        alert(`Sr. Aprobo el examen de la vista`);
    }
    else
    {
        alert(`Sr. Por favor chequee su vista. vuelva nuevamente `);
    }

    let resultado3 = examenVista ? 'aprobo el examen de vista':'no aprobo el examen, vuelva';
    alert(resultado3);

    /* Manejo de Cadenas de Texto */

   