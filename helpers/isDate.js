// Custom Validator
const moment = require('moment');

const isDate = ( value ) => {

    if( !value ) {
        return false; // le indica a la ruta en events que no es correcto el valor
    }

    const fecha = moment( value ); // Indica si es una fecha correcta o no
    if( fecha.isValid() ) {
        return true;
    } else {
        return false;
    }

}

module.exports = {
    isDate
}