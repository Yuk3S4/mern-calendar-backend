const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
   
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        // Inidica a mongoose que será una referencia
        type: Schema.Types.ObjectId,
        ref: 'Usuario', // al modelo Usuario
        required: true
    }

});

// Configuraciones de como se va a serializar el modelo
// Para modificar a la hora de visualizar la info del evento. NO modifica la forma de grabar en la DB
EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject() // Referencia al objeto que se esta seriablizando (Evento)
    object.id = _id;
    return object;
})

module.exports = model('Evento', EventoSchema );
