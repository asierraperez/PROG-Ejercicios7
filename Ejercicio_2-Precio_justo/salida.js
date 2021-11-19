/**
 * Muestra el resultado
 * @param {number} precio - precio introducido por el usuario
 * @param {premio} item - datos guardados del objeto a acertar
 * @param {boolean} acierto - true=> el usuario acerto ; false=> el usuario falló
 */
function salida(precio, item, acierto) {
    if (acierto == true) {
        alert("Enhorabuena, acertaste el precio de " + item.nombre + ".\n" +
            item.precio_justo + " == " + precio)
    } else {
        alert("Perdiste,\nEl precio de " + item.nombre + " era " + item.precio_justo)

    }
}
