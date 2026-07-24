const pool = require('../config/database');

async function buscarPorTelefono(telefono) {
    const query = 'SELECT * FROM clientes WHERE telefono = $1';

    const resultado = await pool.query(query, [telefono]);

    return resultado.rows[0];
}

async function buscarCliente(nombre, apellido, telefono) {
    const query = 'select * from clientes where nombre = $1 and apellido = $2 and telefono = $3';
    
    const values = [
        nombre,
        apellido,
        telefono
    ];

    const resultado = await pool.query(query, values);
    
    return resultado.rows[0];
}

async function crearCliente(datos) {
    const query = 'insert into clientes(nombre, apellido, telefono) values ($1, $2, $3) returning *;';

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
    buscarCliente,
    crearCliente
};