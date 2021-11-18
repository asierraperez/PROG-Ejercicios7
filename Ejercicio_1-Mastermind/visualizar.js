/**
 * visualizo los resultados en funcion de estos
 * @param {array<number>} secuencia - Entrada del usuario
 * @param {array<string>} aciertos_fallos - fallos y aciertos al comparar
 * @param {array<number>} aleatorio  - numeros generados aleatoriamente
 * @param {number} oportunidades - oportunidades de acertar
 * @returns {boolean}
 */
function visualizar(secuencia, aciertos_fallos, aleatorio, oportunidades) {

    /**
     * auxiliar de 'secuencia'
     * @type {array<number>}
     */
    var aux_ver_secuencia = secuencia
    /**
     * auxiliar de 'aciertos_fallos'
     * @type {array<string>}
     */
    var aux_ver_aciertos = aciertos_fallos
    /**
     * auxiliar de 'aleatorio'
     * @type {array<number>}
     */
    var aux_ver_aleatorio = aleatorio
    /**
      * tabla para visualizar 'secuencia'
      * @type {string}
      */
    var tabla_secuencia = ""
    /**
      * tabla para visualizar 'aciertos_fallos'
      * @type {string}
      */
    var tabla_aciertos = ""
    /**
      * tabla para visualizar 'aleatorio'
      * @type {string}
      */
    var tabla_aleatortio = ""

    //Construyo las tablas con sus respectivos valores
    for (let i = 0; i < aux_ver_secuencia.length; i++) {
        tabla_secuencia = tabla_secuencia + (" " + aux_ver_secuencia[i])
        tabla_aciertos = tabla_aciertos + (" " + aux_ver_aciertos[i])
        tabla_aleatortio = tabla_aleatortio + (" " + aux_ver_aleatorio[i])
    }

    if (oportunidades <= 0) {
        alert("MASTERMIND\nPERDISTE, la secuencia era : " + tabla_aleatortio)
        return false
    } else if (tabla_secuencia == tabla_aleatortio) {
        alert("MASTERMIND\nGANASTE, la secuencia era : " + tabla_aleatortio)
        return true
    } else {
        alert("MASTERMIND\nSecuencia: " + tabla_secuencia + "\nAciertos: " + tabla_aciertos + "\nTe quedan " + oportunidades + " intentos.")
        return false

    }


}