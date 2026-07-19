const turnoModel = require("../models/turnoModel");
const clienteModel = require("../models/clienteModel");

async function crearTurno(datos) {
    let cliente = await clienteModel.buscarPorTelefono(datos.telefono);

    if (!cliente) {
        cliente = await clienteModel.crearCliente({
            nombre: datos.nombre,
            apellido: datos.apellido,
            telefono: datos.telefono
        });
    }

    const turno = await turnoModel.crearTurno({
        cliente_id: cliente.id,
        servicio_id: datos.servicio_id,
        fecha: datos.fecha,
        hora: datos.hora
    });

    return turno;
}

async function obtenerTurnos() {
    return await turnoModel.obtenerTurnos();
}
module.exports = {
    crearTurno,
    obtenerTurnos
};