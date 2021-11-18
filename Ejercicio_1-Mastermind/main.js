function main() {

    /**
     * secuencia de numeros aleacorios
     * @type {Array<number>}
     */
    var aleatorio = []
    /**
     * secuencia de numeros introducida por el usuario
     * @type {Array<number>}
     */
    var secuencia = []
    /**
     * array con los acirtos y fallos del usuario
     * @type {Array<string>}
     */
    var aciertos_fallos = []
    /**
     * oportunidades para acertar 
     * @type {number}
     */
    var oportunidades = 9
    /**
     * true=>se repite el programa ; false=>el programa termina
     */
    var repetir = false

    while (repetir == false) {
        /**
        * true=>El usuario gana ; false=>El usuario pierde
        * @type {boolean}
        */
        var ganar = false
        /**
        * oportunidades para acertar 
        * @type {number}
        */
        var oportunidades = 9
        //primero creo el array de numeros aleatorios
        for (let i = 0; i < 5; i++) {
            aleatorio[i] = genera_aleatorio()
        }
        console.table(aleatorio)

        while ((oportunidades >= 0) & (ganar == false)) {
            //Pregunto al usuario por los numeros
            for (let i = 0; i < 5; i++) {
                secuencia[i] = entradas(i)
            }

            console.table(secuencia)
            //comparo los fallos y los errores
            aciertos_fallos = calculo(secuencia, aleatorio)
            console.table(aciertos_fallos)
            //visualizo en funcion de la situación
            ganar = visualizar(secuencia, aciertos_fallos, aleatorio, oportunidades)
            if (ganar == false) {
                oportunidades--
            }
        }
        repetir = confirmar("volver a jugar")
    }



}
main()