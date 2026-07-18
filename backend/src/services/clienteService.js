const clienteModel = require('../models/clienteModel');

async function buscarPorTelefono(telefono) {
    return await clienteModel.buscarPorTelefono(telefono);
}

async function crearCliente(datos) {
    return await clienteModel.crearCliente(datos);
}

module.exports = {
    buscarPorTelefono,
    crearCliente
};