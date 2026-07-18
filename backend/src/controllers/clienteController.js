const clienteService = require('../services/clienteService');

async function buscarCliente(req, res) {
    try {
        const { telefono } = req.params;
        const cliente = await clienteService.buscarPorTelefono(telefono);

        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        res.json(cliente);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function crearCliente(req, res) {
    try {
        const cliente = await clienteService.crearCliente(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    buscarCliente,
    crearCliente
};