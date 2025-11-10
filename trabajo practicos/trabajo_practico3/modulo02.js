/*
Ejercicio Nro. 16:
El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente
clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la
recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número
*/


export const obtenerTasa = (tipo) => {

    switch (parseInt(tipo))
    {
        case 1:
            return 0.005;
            break;
        case 2:
            return 0.001;
            break;
        case 3:
            return 0.007;
            break;
        case 4:
            return 0.002;
            break;
        case 5:
            return 0.015;
            break;
        default:
            return 0.001;
    }
};
