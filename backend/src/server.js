require("dotenv").config();

const app = require("./app");
const pool = require("./config/database");

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
    try {
        await pool.query("SELECT NOW()");

        console.log("Conexión a la base de datos establecida correctamente.");

        app.listen(PORT, () => {
            console.log(`Servidor iniciado en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error("Error al conectar a la base de datos:");
        console.error(error);
    }
}

iniciarServidor();