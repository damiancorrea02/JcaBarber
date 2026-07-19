const pool = require('../config/database');

async function crearTurno(datos) {
    
    const query = `
        INSERT INTO turnos
        (cliente_id, servicio_id, fecha, hora, estado)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *;
    `;

    const values = [
        datos.cliente_id,
        datos.servicio_id,
        datos.fecha,
        datos.hora,
        "PENDIENTE"
    ];

    const resultado = await pool.query(query, values);
    return resultado.rows[0];
}

async function obtenerTurnos() {
    const query = 'SELECT t.id, c.nombre,c.apellido, c.telefono, s.nombre AS servicio, t.fecha, t.hora, t.estado FROM turnos t INNER JOIN clientes c ON t.cliente_id = c.id INNER JOIN servicios s ON t.servicio_id = s.id ORDER BY t.fecha, t.hora';

    const resultado = await pool.query(query);
    return resultado.rows;
}

module.exports = {
    crearTurno,
    obtenerTurnos
};
