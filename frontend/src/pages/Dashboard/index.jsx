import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main>
      <h1>Panel del Barbero</h1>

      <nav>
        <ul>
          <li>
            <Link to="/configuracion">Configuración</Link>
          </li>
        </ul>
      </nav>

      <h2>Turnos</h2>

      <p>Aquí aparecerán todos los turnos.</p>
    </main>
  );
}

export default Dashboard;