

class DNI {

    /**
     * 
     * @param {string} titular Indica el titular del Dni
     * @param {string} numero  Código en formato 12345678A
     * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
     */
    constructor(titular, numero, caducidad) {
        this.titular = titular;
        this.numero = numero;
        this.caducidad = caducidad;
    }

    // Nos devuelve 'true' o 'false' indicando si el DNI está caducado o no
    estaCaducado() {

        let fechaCaducidad = new Date(this.caducidad);

        if (fechaCaducidad > new Date()) {
            return true;
        } return false;   
    }

    // Debe devolver 'true' si el DNI está bien formado, o 'false' en caso contrario
    esDniFormatoValido() {
       return /[0-9]{8}[A-Z]/.test(this.numero); 
    }

    // Dado un número de DNI, nos calcula la letra. Buscar por Internet como calcular la letra de un DNI
    calculaLetraDni(dni) {
        let lettersArray = 'TRWAGMYFPDXBNJZSQVHLCKET';
        let position = dni % 23;
        let letter = lettersArray.substring(position, position + 1);

        return dni + ' - ' + letter;
    }
}

const midni = new DNI("Pedro Vallés", "1234567A", "1990-10-10");
console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());
console.log(midni.calculaLetraDni(12345673));

