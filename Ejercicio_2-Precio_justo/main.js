/**
 * Juego del precio justo
 */
function main() {
    /**
     * Precio minimo
     * @type {number}
     */
    var minimo = 0
    /**
     * Precio máximo
     * @type {number}
     */
    var maximo = 100
    /**
     * Objecto premio
     * @type {object}
     */
    var premio = declarar_premio(minimo, maximo)
    /**
     * Precio introducido por el usuario
     * @type {number}
     */
    var precio = 0
    /**
     * true=> el usuario no sigue jugando ; false=> El juego termina
     * @type {boolean}
     */
    var jugar = false
    /**
     * true=> el precio es valido ; false=> precio no valido
     * @type {boolean}
     */
    var valido = false
    /**
     * true=> el usuario acertó el precio ; false=> se falló el precio
     */
    var acierto = false
    item = new premio()
    item = inicializar_item(item)
    while (!jugar) {
        while (!valido) {
            precio = entradas(item.nombre, minimo, maximo, precio)
            valido = comprobar(precio, minimo, maximo)
        }
        valido = false
        acierto = comparacion(precio, item)
        if (acierto == true) {
            jugar = true
        } else if (precio > item.precio_justo) {
            jugar = true
        } else {
            jugar = confirmar("seguir jugando")
        }
    }
    salida(precio, item, acierto)
}
main()