/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT } = require("../middlewares/validar-jwt")
const { getEventos, crearEvento, actualizarEventos, eliminarEvento } = require('../controllers/events');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use( validarJWT ); // Aplicar el middleware a todas las rutas de abajo de la línea

// Obtener eventos
router.get('/', getEventos )

// Crear un nuevo evento
router.post(
    '/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos,
    ], 
    crearEvento )

// Actualizar Evento
router.put('/:id', validarCampos, actualizarEventos )

// Borrar evento
router.delete('/:id', validarCampos, eliminarEvento )

module.exports = router;