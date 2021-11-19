/**
 * Comprueba si el dato esta entre el minimo y el maximo
 * @param {number} dato - variable introducida por el usuario
 * @param {number} min - numero minimo
 * @param {number} max - numero maximo
 * @returns {boolean}
 */
function comprobar(dato, min, max) {
    /**
     * auxiliar de dato
     * @type {number}
     */
    var aux_dato = dato
    /**
     * auxiliar de minimo
     * @type {number}
     */
    var aux_min = min
    /**
     * auxiliar de maximo
     * @type {number}
     */
    var aux_max = max
    if ((aux_dato >= aux_min) & (aux_dato <= aux_max)) {
        return true
    } else {
        alert(aux_dato + " no es una cantidad válida\nInténtelo de nuevo")

        return false
    }
}