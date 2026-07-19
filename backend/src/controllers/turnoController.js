const turnoService = require("../services/turnoService");

async function crearTurno(req, res) {
    try {
        const turno = await turnoService.crearTurno(req.body);

        res.status(201).json(turno);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

async function obtenerTurnos(req, res) {
    try {
        const turnos = await turnoService.obtenerTurnos();

        res.json(turnos);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = {
    crearTurno,
    obtenerTurnos
};