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

module.exports = {
    crearTurno,
};
