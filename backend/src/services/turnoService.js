const turnoModel = require('../models/turnoModel');

async function crearTurnos(datos) {
    return await turnoModel.crearTurno(datos);
}

module.exports = {
    crearTurnos,
};