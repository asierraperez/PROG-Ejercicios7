/**
 * 
 * @param {array<number>} secuencia - Valores introducidos por el usuario
 * @param {array<number>} aleatorio - valores generados aleatoriamente
 * @returns {array<string}
 */
function calculo(secuencia, aleatorio) {
    /**
     * posibles valores
     * @type {array<number>}
     */
    var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    /**
     * Registro de aciertos y errores 
     * @type {array<string>}
     */
    var aciertos = []
    /**
     * auxiliar de 'secuencia'
     * @type {array<number>}
     */
    var aux_secuencia = secuencia
    /**
     * auxiliar de 'aleatorio'
     * @type {array<number>}
     */
    var aux_aleatorio = aleatorio

    //primero recorro el array 'numeros'
    for (let j = 0; j < numeros.length; j++) {
        //busco si los dos arrays tienen algun valor en comun (numeros[j])
        if ((aux_aleatorio.includes(numeros[j]) == true) & (aux_secuencia.includes(numeros[j]) == true)) {
            //si lo tienen, recorro la secuencia para buscar en que posicion está
            for (let i = 0; i < aux_secuencia.length; i++) {
                if (aux_secuencia[i] == numeros[j]) {
                    aciertos[i] = "X"
                }
            }
        }
    }

    //Ahora que tengo los valores en comun registrados en 'aciertos', busco si hay alguno en la misma posición
    for (let i = 0; i < aux_aleatorio.length; i++) {
        if (aux_aleatorio[i] == aux_secuencia[i]) {
            aciertos[i] = "O"
        } else if (aciertos[i] != "X") {
            aciertos[i] = "-"
        }

    }
    return aciertos
}