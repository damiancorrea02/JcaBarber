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
   const query = `
    SELECT
        t.id,
        c.nombre,
        c.apellido,
        c.telefono,
        s.nombre AS servicio,
        t.fecha,
        t.hora,
        t.estado
    FROM turnos t
    INNER JOIN clientes c ON t.cliente_id = c.id
    INNER JOIN servicios s ON t.servicio_id = s.id
    WHERE t.estado IN ('PENDIENTE', 'CONFIRMADO')
    ORDER BY t.fecha, t.hora;
`;
    const resultado = await pool.query(query);
    return resultado.rows;
}

async function buscarTurnoPorTelefono(telefono) {
    const query = `
        SELECT
            t.id,
            c.nombre,
            c.apellido,
            c.telefono,
            s.nombre AS servicio,
            t.fecha,
            t.hora,
            t.estado
        FROM turnos t
        INNER JOIN clientes c ON t.cliente_id = c.id
        INNER JOIN servicios s ON t.servicio_id = s.id
        WHERE c.telefono = $1
        AND t.estado IN ('PENDIENTE', 'CONFIRMADO')
        ORDER BY t.fecha, t.hora
        LIMIT 1;
    `;

    const resultado = await pool.query(query, [telefono]);

    return resultado.rows[0];
}

async function obtenerHorariosOcupados(fecha) {
    const query = `
        SELECT hora
        FROM turnos
        WHERE fecha = $1
        AND estado <> 'CANCELADO'
        ORDER BY hora;
    `;



    const resultado = await pool.query(query, [fecha]);
    return resultado.rows;
}

async function actualizarEstado(id, estado) {
    const query = 'UPDATE turnos SET estado = $1 WHERE id = $2 RETURNING *';
    const values = [estado, id];

    const resultado = await pool.query(query, values);
    return resultado.rows[0];
}


async function cancelarTurno(id) {
    const query = `update turnos set estado = 'CANCELADO' where id = $1 returning *;`;

    const resultado = await pool.query(query, [id]);

    return resultado.rows[0];
}
module.exports = {
    crearTurno,
    obtenerTurnos,
    buscarTurnoPorTelefono,
    actualizarEstado,
    cancelarTurno,
    obtenerHorariosOcupados
};
