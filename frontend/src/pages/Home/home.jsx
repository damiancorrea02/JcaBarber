import { useState } from "react";
import {Link} from "react-router-dom";
import "./Home.css"
import logo from "../../assets/logo.png"


function Home() {

    const [mostrarModal, setMostrarModal] = useState(false);
    const [telefono, setTelefono] = useState("");
    const [turno, setTurno] = useState(null)

    async function buscarTurno() {
        try{
            const respuesta = await fetch(`http://localhost:3000/turnos/telefono/${telefono}`);

            const datos = await respuesta.json();

            console.log(datos.hora);
            console.log(typeof datos.hora);

            if (respuesta.ok){
                setTurno(datos);
            }else{
                alert(datos.error);
            }
        } catch (error) {
            alert("No se pudo conectar con el servidor.")
        }
    }
    return (
        <main className="home">

            <section className="hero">
                
                <img src={logo}
                alt="JCA Barber"
                className="logo"
                />

            </section>

            <section className="sobre-mi">

                <h2>Sobre mi</h2>

                <p>Mi nombre es <strong>Juan Carlos Aimar</strong> y me dedico a esta profesion desde 2016.</p>

                <p>Durante estos años me especialice en cortes clásicos y modernos,
                    siempre brindando un servicio de calidad y una atención personalizada.</p>

                    <p>Mi objetivo es que cada cliente disfrute de una buena experiencia, 
                        se siente cómodo y salga conforme con su estilo.</p>

            </section>

            <div className="botones-home">

            <Link className="boton-reservar" to="/reservar">
            Reservar Turno
            </Link>

            <button className="boton-turno"
            onClick={() => {
                setMostrarModal(true);
                setTurno(null);
                setTelefono("");
            }}>Ver mi turno</button>

            </div>

           
            <section className = "informacion">

                <h2>Informacion</h2>

                <div className="info-card">
                    <h3>📍 | Ubicacion</h3>

                    <p>Boulevard España | La Playosa, Cba.</p>
                </div>

                <div className="info-card">

                <h2>🕛 Horarios</h2>

                <p>De martes a sábado</p>

                <p>09:00 - 11:30</p>

                <p>16:00 - 20:30</p>

                </div>

                <div className="info-card">

                    <h3>✂ Servicios</h3>

                    <p>Corte</p>

                    <p>Corte + Barba</p>
                </div>

            </section>

            <section className="contacto">

                <h2>Contacto</h2>

                <div className="social-links">
                    <a className="icon-link whatsapp" href="https://wa.me/3534133237" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" role="img" aria-hidden="true">
                            <title>WhatsApp</title>
                            <path fill="currentColor" d="M20.52 3.48A11.82 11.82 0 0 0 12 .5 11.76 11.76 0 0 0 .5 12c0 2.07.54 4 1.5 5.7L.5 23.5l5.35-1.41A11.76 11.76 0 0 0 12 23.5C18.07 23.5 23 18.57 23 12.5a11.82 11.82 0 0 0-2.48-9.02z"/>
                            <path fill="#ffffff" d="M16.67 11.33c-.31-.16-1.78-.9-2.02-1.01-.24-.11-.4-.16-.58.16s-.68 1.01-.83 1.22c-.15.21-.3.24-.61.08-.31-.16-1.17-.45-2.24-1.38-.83-.76-1.39-1.71-1.55-2.02-.16-.3 0-.46.14-.6.14-.14.34-.36.5-.55.16-.19.21-.34.31-.57.1-.23.05-.43 0-.6-.05-.17-.5-1.23-.69-1.69-.18-.45-.36-.37-.5-.37-.14 0-.34-.01-.52-.01-.18 0-.5.06-.77.32-.27.26-1.03 1-1.03 2.43s1.06 2.83 1.21 3.02c.15.19 2.14 3.36 5.22 4.74 3.08 1.38 3.08 1.04 3.63.98.55-.06 1.66-.74 1.91-1.41.25-.67.25-1.24.18-1.36-.07-.12-.28-.18-.59-.34z"/>
                        </svg>
                    </a>

                    <a className="icon-link" href="https://instagram.com/jcabarber" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                        </svg>
                    </a>
                </div>
            </section>

            {
                mostrarModal && (
                    <div className="modal">

                        <div className="modal-contenido">

                            <h2>Consultar Turno</h2>

                            <input type="tel"
                            placeholder="Ingrese su teléfono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}/>

                            <button className="confirmar"
                            onClick={buscarTurno}>Buscar</button>
                        </div>
                    </div>
                )
            }

            {
                mostrarModal && (
                    <div className="modal">

                        <div className="modal-contenido">
                            <h2>Consultar Turno</h2>

                            <input type="tel"
                            placeholder="Ingrese su teléfono"
                            value = {telefono}
                            onChange={(e) => setTelefono(e.target.value)}/>

                            <button className="confirmar"
                            onClick={buscarTurno}>Buscar</button>

                            {
                                turno && (
                                    <div className="detalle-turno">
                                        <h3>{turno.nombre} {turno.apellido}</h3>

                                        <p>💈 {turno.servicio} </p>
                                        <p>📅 {new Date(turno.fecha).toLocaleDateString("es-AR")}</p>
                                        <p>🕛 {turno.hora?.toString().slice(0,5)}</p>
                                        <p><strong>Estado: </strong>{turno.estado}</p>

                                        </div>
                                )
                            }

                            <button className="cancelar" onClick={() => setMostrarModal(false)}>Cerrar</button>
                        </div>
                    </div>
                )
            }

            <footer> © 2026 JCA Barber</footer>
        </main>
    );
}
export default Home;