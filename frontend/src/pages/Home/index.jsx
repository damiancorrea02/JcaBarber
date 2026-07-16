import {Link} from "react-router-dom";
function Home() {
    return (
        <main>
            <h1>JCA BARBERIA</h1>

            <p>Tu estilo, nuestra pasion.</p>

            <Link to="/reservar">
            <button>Reservar Turno</button>
            </Link>
        </main>
    );
}
export default Home;