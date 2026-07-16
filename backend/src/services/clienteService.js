const clienteModel = require('../models/clienteModel');

async function buscarPorTelefono(telefono) {
    return await clienteModel.buscarPorTelefono(telefono);
}

module.exports = {
    buscarPorTelefono,
};