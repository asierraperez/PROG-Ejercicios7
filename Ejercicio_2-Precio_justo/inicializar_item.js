/**
 * Creo un objeto para acertar su precio
 * @param {premio} inicio_item - item a declarar
 * @returns {premo}
 */
function inicializar_item(inicio_item) {
    /**
     * auxiliar de inicio_item
     * @type {premio}
     */
    var aux_inicio_item = inicio_item
    /**
     * posibles objetos a acertar
     * @type {Array<string>}
     */
    var Items = ["ordenador",
        "lavadora",
        "auriculares",
        "cuadro",
        "figura",
        "lámpara",
        "consola",
        "libro",
        "mesa",
        "televisión",
        "sofá",
        "coche",
        "moto",
        "bicicleta"]
    /**
     * posicion en el array items
     * @type {number}
     */
    //calculo aleatoriamente el índice para el array de nombres
    var indice_objeto = Math.floor(Math.random() * (Items.length - 0)) + 0
    aux_inicio_item.nombre = Items[indice_objeto]
    aux_inicio_item.Precio_aleatorio()
    console.log(aux_inicio_item.nombre)
    console.log(aux_inicio_item.precio_justo)
    return aux_inicio_item
}