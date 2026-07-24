const express = require('express');
const router = express.Router();

const turnoController = require('../controllers/turnoController');

router.post('/', turnoController.crearTurno);
router.get('/disponibles', turnoController.obtenerHorariosDisponibles);
router.get('/telefono/:telefono', turnoController.buscarTurnoPorTelefono);
router.get('/', turnoController.obtenerTurnos);
router.put('/cancelar/:id', turnoController.cancelarTurno)
router.put('/:id', turnoController.actualizarEstado);

module.exports = router;