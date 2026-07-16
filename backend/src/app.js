const express = require ('express');
const cors = require('cors');

const turnoRoutes = require('./routes/turnoRoutes');

const app = express();

const clienteRoutes = require('./routes/clienteRoutes');

app.use(cors());
app.use(express.json());

app.use('/turnos', turnoRoutes);
app.use('/clientes', clienteRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API de JcaBarberia funcionando' });
});

module.exports = app;