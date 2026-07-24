import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {

    const [turnos, setTurnos] = useState([]);

    function formatearFecha(fecha) {
        return new Date(fecha).toLocaleDateString("es-AR");
    }

    function formatearHora(hora) {
        return hora.substring(0, 5);
    }

    async function cargarTurnos() {
        try {
            const respuesta = await fetch("http://localhost:3000/turnos");
            const datos = await respuesta.json();

            setTurnos(datos);

        } catch (error) {
            alert("No se pudieron cargar los turnos.");
        }
    }

    async function cambiarEstado(id, estado) {

        try {

            const respuesta = await fetch(`http://localhost:3000/turnos/${id}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({ estado })

            });

            if (respuesta.ok) {

                cargarTurnos();

            } else {

                alert("No se pudo actualizar el turno.");

            }

        } catch (error) {

            alert("Error al conectar con el servidor.");

        }

    }

    function renderizarTurno(turno) {

        return (

            <div className="turno-card" key={turno.id}>

                <h3>
                    👤 {turno.nombre} {turno.apellido}
                </h3>

                <p>
                    <strong>📞 Teléfono:</strong> {turno.telefono}
                </p>

                <p>
                    <strong>💈 Servicio:</strong> {turno.servicio}
                </p>

                <p>
                    <strong>📅 Fecha:</strong> {formatearFecha(turno.fecha)}
                </p>

                <p>
                    <strong>🕙 Hora:</strong> {formatearHora(turno.hora)}
                </p>

                {turno.estado.toUpperCase() === "PENDIENTE" && (
                    <>

                        <button
                            className="confirmar"
                            onClick={() => cambiarEstado(turno.id, "CONFIRMADO")}
                        >
                            Confirmar
                        </button>

                        <button
                            className="cancelar"
                            onClick={() => cambiarEstado(turno.id, "CANCELADO")}
                        >
                            Cancelar
                        </button>

                    </>
                )}

                {turno.estado.toUpperCase() === "CONFIRMADO" && (
                    <>

                        <button
                            className="finalizar"
                            onClick={() => cambiarEstado(turno.id, "FINALIZADO")}
                        >
                            Finalizar
                        </button>

                        <button
                            className="cancelar"
                            onClick={() => cambiarEstado(turno.id, "CANCELADO")}
                        >
                            Cancelar
                        </button>

                    </>
                )}

            </div>

        );

    }

    useEffect(() => {
        cargarTurnos();
    }, []);

    const turnosPendientes = turnos.filter(
        turno => turno.estado.toUpperCase() === "PENDIENTE"
    );

    const turnosConfirmados = turnos.filter(
        turno => turno.estado.toUpperCase() === "CONFIRMADO"
    );

    return (

        <main className="dashboard">

            <h1>Panel del Barbero</h1>

            <h2>Pendientes</h2>

            <div className="turnos-container">

                {turnosPendientes.length > 0 ? (
                    turnosPendientes.map(renderizarTurno)
                ) : (
                    <p>No hay turnos pendientes.</p>
                )}

            </div>

            <h2>Confirmados</h2>

            <div className="turnos-container">

                {turnosConfirmados.length > 0 ? (
                    turnosConfirmados.map(renderizarTurno)
                ) : (
                    <p>No hay turnos confirmados.</p>
                )}

            </div>

        </main>

    );

}

export default Dashboard;