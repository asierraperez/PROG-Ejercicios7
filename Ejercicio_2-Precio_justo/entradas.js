/**
 * Pregunta al usuario
 * @param {string} nombre - nombre del item
 * @param {number} min - precio mínimo
 * @param {number} max - precio máximo
 * @param {number} precio_anterior - precio introducido anteriormente
 * @returns {number}
 */
function entradas(nombre, min, max, precio_anterior) {
    /**
     * valor introducido por el usuario
     * @type {number}
     */
    var valor = 0
    if (precio_anterior > -1) {
        var valor = prompt("EL PRECIO JUSTO\nAdivina el precio pero sin pasarte de: " + nombre + " (de " + min + " a " + max + ")" + "\nPrecio anterior : " + precio_anterior)
        valor = parseInt(valor)
    } else {
        var valor = prompt("EL PRECIO JUSTO\nAdivina el precio pero sin pasarte de: " + nombre + " (de " + min + " a " + max + ")")
        valor = parseInt(valor)

    }
    return valor
}