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

async function buscarTurnoPorTelefono(req, res) {
    try{
        const {telefono} = req.params;

        const turno = await turnoService.buscarTurnoPorTelefono(telefono);

        if(!turno){
            return res.status(404).json({
                error: "No se encontro ningun turno."
            });
        }

        res.json(turno);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

async function obtenerHorariosDisponibles(req, res) {
    try {
        const { fecha } = req.query;

        const horarios = await turnoService.obtenerHorariosDisponibles(fecha);

        res.json(horarios);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

async function actualizarEstado(req, res) {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const turno = await turnoService.actualizarEstado(id, estado);

        res.json(turno);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

async function cancelarTurno(req, res) {
    try{
        const {id} = req.params;
        const turno = await turnoService.cancelarTurno(id);

        res.json(turno)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    crearTurno,
    obtenerTurnos,
    buscarTurnoPorTelefono,
    actualizarEstado,
    cancelarTurno,
    obtenerHorariosDisponibles
};