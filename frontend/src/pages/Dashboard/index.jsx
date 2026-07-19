import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {

    const [turnos, setTurnos] = useState([]);

    async function cargarTurnos() {
        try {

            const respuesta = await fetch("http://localhost:3000/turnos");

            const datos = await respuesta.json();

            setTurnos(datos);

        } catch (error) {
            alert("No se pudieron cargar los turnos.");
        }
    }

    useEffect(() => {
        cargarTurnos();
    }, []);

    return (
        <main>

            <h1>Panel del Barbero</h1>

            <nav>
                <Link to="/configuracion">
                    Configuración
                </Link>
            </nav>

            <h2>Turnos</h2>

            {
                turnos.map(turno => (

                    <div key={turno.id}>

                        <p><strong>Cliente:</strong> {turno.nombre} {turno.apellido}</p>

                        <p><strong>Teléfono:</strong> {turno.telefono}</p>

                        <p><strong>Servicio:</strong> {turno.servicio}</p>

                        <p><strong>Fecha:</strong> {turno.fecha}</p>

                        <p><strong>Hora:</strong> {turno.hora}</p>

                        <p><strong>Estado:</strong> {turno.estado}</p>

                        <hr />

                    </div>

                ))
            }

        </main>
    );
}

export default Dashboard;