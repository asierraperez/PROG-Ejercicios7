/**
 * Creación del objeto de tipo premio
 * @param {number} precio_min - precio mínimo del objeto
 * @param {*} precio_max - precio máximo del objeto
 * @returns {object} - objeto de tipo perfil
 */
function declarar_premio(precio_min, precio_max) {
    /**
     * objeto de tipo premio
     * @type {object}
     */
    var datos_premio = function () {
        /**
         * nombre del ítiem
         * @type {string}
         */
        this.nombre_item = ""
        /**
         * precio mínimo del ítem
         * @type {number}
         */
        this.min = precio_min
        /**
        * precio máximo del ítem
        * @type {number}
        */
        this.max = precio_max
        /**
        * precio justo del ítem
        * @type {number}
        */
        this.precio_justo = 0
        /**
         * cálculo del precio, aleatorio entre min y max
         */
        this.Precio_aleatorio = function () {
            this.precio_justo = Math.floor(Math.random() * (this.max - this.min)) + this.min
        }
    }
    return datos_premio

}
