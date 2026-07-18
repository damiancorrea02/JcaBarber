const pool = require('../config/database');

async function buscarPorTelefono(telefono) {
    const query = 'SELECT * FROM clientes WHERE telefono = $1';

    const resultado = await pool.query(query, [telefono]);

    return resultado.rows[0];
}

async function crearCliente(datos) {
    const query = 'INSERT INTO clientes (nombre, apellido, telefono ) VALUES ($1, $2, $3) RETURNING *';
    
    const values = [
        datos.nombre,
        datos.apellido,
        datos.telefono
    ];

    const resultado = await pool.query(query, values);
    
    return resultado.rows[0];
}

module.exports = {
    buscarPorTelefono,
    crearCliente
};