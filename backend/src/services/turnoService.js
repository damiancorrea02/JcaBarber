const turnoModel = require("../models/turnoModel");
const clienteModel = require("../models/clienteModel");

async function crearTurno(datos) {
    let cliente = await clienteModel.buscarCliente(
        datos.nombre,
        datos.apellido,
        datos.telefono
    );

    if (!cliente){
        cliente = await clienteModel.crearCliente({
            nombre : datos.nombre,
            apellido : datos.apellido,
            telefono : datos.telefono
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

async function buscarTurnoPorTelefono(telefono) {
    return await turnoModel.buscarTurnoPorTelefono(telefono);
}

async function obtenerHorariosDisponibles(fecha) {
    const horariosDelDia = [
        "09:00", "09:30", "10:00", "10:30",
        "11:00", "11:30",
        "16:00", "16:30", "17:00", "17:30",
        "18:00", "18:30", "19:00", "19:30",
        "20:00", "20:30"
    ];

    const horariosOcupados = await turnoModel.obtenerHorariosOcupados(fecha);

    const ocupados = horariosOcupados.map(
        turno => turno.hora.substring(0, 5)
    );

    const disponibles = horariosDelDia.filter(
        hora => !ocupados.includes(hora)
    );

    return disponibles;
}

async function actualizarEstado(id, estado) {
    return await turnoModel.actualizarEstado(id, estado);
}

async function cancelarTurno(id) {
    return await turnoModel.cancelarTurno(id);
}

module.exports = {
    crearTurno,
    obtenerTurnos,
    buscarTurnoPorTelefono,
    obtenerHorariosDisponibles,
    actualizarEstado,
    cancelarTurno
}