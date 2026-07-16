const pool = require('../config/database');

async function buscarPorTelefono(telefono) {
    const query = 'SELECT * FROM clientes WHERE telefono = $1';

    const resultado = await pool.query(query, [telefono]);

    return resultado.rows[0];
}

module.exports = {
    buscarPorTelefono
};