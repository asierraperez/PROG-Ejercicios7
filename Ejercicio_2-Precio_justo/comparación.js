/**
 * Compara el precio introducido con el precio del item para saber si el usuario gana o pierde
 * @param {number} precio - precio introducido por el usuario
 * @param {premio} objeto - item con sus datos almacenados
 * @returns {boolean}
 */
function comparacion(precio, objeto) {
    /**
     * auxiliar de precio
     * @type {number}
     */
    var aux_comp_precio = precio
    /**
     * auxiliar de objeto
     * @type {premio}
     */
    var aux_comp_item = objeto
    if (aux_comp_precio < aux_comp_item.precio_justo) {
        alert(aux_comp_precio + " < precio de " + aux_comp_item.nombre + "\nInténtalo otra vez pero sin pasarte")
        return false
    } else if (aux_comp_precio > aux_comp_item.precio_justo) {
        alert(aux_comp_precio + " > precio de " + aux_comp_item.nombre + "\nTe pasaste")
        return false
    } else {
        return true
    }
}