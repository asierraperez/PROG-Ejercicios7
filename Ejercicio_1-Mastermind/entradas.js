/**
 * Pregunta al usuario el valor para la posicion en el array
 * @param {valor} posicion - posicion en el array <secuencia>
 * @returns {number} - valor
 */
function entradas(posicion) {
    /**
     * valor introducido por el usuario
     * @type {number}
     */
    var valor = prompt("Escribe valor para la posición número " + (posicion + 1))
    valor = parseInt(valor)
    return valor
}