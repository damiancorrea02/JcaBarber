import {useState} from 'react';
import "./ReservarTurno.css";
import { useNavigate } from 'react-router-dom';

function ReservarTurno() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        servicio_id: 1,
        fecha: '',
        hora: ''
    });
    
    const [mostrarModal, setMostrarModal] = useState(false);
    const [horarios, setHorarios] = useState([]);
    const [horarioSeleccionado, setHorarioSeleccionado] = useState('');

    const navigate = useNavigate();

    function obtenerFechaMinima() {
        const hoy = new Date();

        const año = hoy.getFullYear();
        const mes = String(hoy.getMonth() + 1).padStart(2, "0")
        const dia = String(hoy.getDate()). padStart(2, "0")

        return `${año}-${mes}-${dia}`;
}

    function cambiarValor(e) {
        const {name, value} = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });

        if (name === 'fecha') {
            if (!validarFecha(value)) {
                return;
            }

            cargarHorarios(value);

        }
    }

    async function cargarHorarios(fecha) {
        try {
            const respuesta = await fetch(`http://localhost:3000/turnos/disponibles?fecha=${fecha}`);
            const datos = await respuesta.json();
            setHorarios(datos);
        } catch (error) {
            alert('Error al cargar horarios:');
        }
    }

    function validarFecha(fecha) {

        const dia = new Date(fecha + "T00:00:00").getDay();

        if (dia === 0 || dia === 1) {

            alert ("Turnos disponibles de Martes a Sábado");
            setFormulario({
                ...formulario,
                fecha: '',
                hora: ''
            });
            setHorarios([]);

            return false;
        }

            return true;

        }

    async function reservarTurno(e) {
        e.preventDefault();

        if (
            !formulario.nombre.trim() ||
            !formulario.apellido.trim() ||
            !formulario.telefono.trim() ||
            !formulario.fecha ||
            !formulario.hora
        ) {
            alert("RELLENAR TODOS LOS CAMPOS.");
            return;
        }

        try {
            const respuesta = await fetch('http://localhost:3000/turnos', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formulario)
            });

            const datos = await respuesta.json();

            if (respuesta.ok) {
                alert('Turno reservado con éxito');

                setMostrarModal(false)

                setFormulario({
                    nombre: '',
                    apellido: '',
                    telefono: '',
                    servicio_id: 1,
                    fecha: '',
                    hora: ''
                });

                setHorarios([]);
                setHorarioSeleccionado("");

                navigate("/");
                
            } else {
                alert(datos.error);
            }
    } catch (error) {
        alert('no se puedo conectar con el servidor');
    }
}
    return (
    <main className='reservar'>
        <h1>Reservar Turno</h1>

        <p>Elegi una fecha y luego sleccioná uno de los horarios disponibles.</p>
        
        <form onSubmit={reservarTurno}
        >
        <div className='fecha'>
            <label >Fecha:</label>
            <input 
            type="date" 
            name="fecha" 
            value={formulario.fecha} 
            onChange={cambiarValor}
            min={obtenerFechaMinima()}
            disabled={mostrarModal}/>
        </div>
        {
            formulario.fecha && (
            <div className='horarios'>
            
            <label >Horarios disponibles</label>

            {
                horarios.map((hora) => (
                    <button 
                    type="button"
                    key={hora}
                    onClick={() => {
                        setHorarioSeleccionado(hora);
                        setFormulario({
                            ...formulario,
                            hora: hora
                        });

                        setMostrarModal(true)
                    }}
                    >{hora}</button>))
            }
        </div>
            )
        }

        {
            mostrarModal && (
                <div className='modal'>

                    <div className='modal-contenido'>
                    <h2>Completar Datos.</h2>

                    <p className='detalle-turno'>Elegiste el turno para:</p>

                    <p className='detalle-turno'>📅<strong>{horarioSeleccionado} hs</strong></p>

                    <input type='text'
                    placeholder='Nombre'
                    name='nombre'
                    value={formulario.nombre}
                    onChange={cambiarValor}
                    required/>

                    <input type='text'
                    placeholder='Apellido'
                    name='apellido'
                    value={formulario.apellido}
                    onChange={cambiarValor}
                    required/>

                    <input type='tel'
                    placeholder='Teléfono'
                    name='telefono'
                    value={formulario.telefono}
                    onChange={cambiarValor}
                    required/>

                    <select name='servicio_id'
                    value={formulario.servicio_id}
                    onChange={cambiarValor}>
                        <option value="1">Corte</option>
                        <option value="2">Corte + Barba</option>
                    </select>

                    <div className='modal-botones'>
                        <button type='button'
                        className='cancelar'
                        onClick={() => {
                            setMostrarModal(false);
                            setHorarioSeleccionado("");
                            setFormulario({
                                ...formulario,
                                hora: ""
                            });
                        }}
                        >Cancelar</button>

                        <button type='button'
                        className='confirmar'
                        onClick={reservarTurno}>Confirmar Turno</button>
                    </div>
                    </div>
                </div>
            )
        }
        </form>
    </main>
    );
}
export default ReservarTurno;