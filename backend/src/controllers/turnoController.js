const turnoService = require('../services/turnoService');

async function crearTurnos(req, res) {
    try {
        const turno = await turnoService.crearTurnos(req.body);
        res.status(201).json(turno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearTurnos,
};