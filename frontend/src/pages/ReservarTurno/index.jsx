import {useState} from 'react';

function ReservarTurno() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        servicio_id: 1,
        fecha: '',
        hora: ''
    });

    function cambiarValor(e) {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }

    async function reservarTurno(e) {
        e.preventDefault();

        try {
            const respuesta = await fetch('http://localhost:3000/turnos', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formulario)
            });

            const datos = await respuesta.json();

            if (respuesta.ok) {
                alert('Turno reservado con éxito');
                setFormulario({
                    nombre: '',
                    apellido: '',
                    telefono: '',
                    servicio_id: 1,
                    fecha: '',
                    hora: ''
                });
            } else {
                alert(datos.error);
            }
    } catch (error) {
        alert('no se puedo conectar con el servidor');
    }
}

    return (
    <main>
        <h1>Reservar Turno</h1>
        
        <form onSubmit={reservarTurno}
        >
        <div>
            <label >Nombre:</label>
            <input 
            type="text" 
            name="nombre" 
            value={formulario.nombre} 
            onChange={cambiarValor}/>
        </div>

        <div>
            <label >Apellido:</label>
            <input 
            type="text" 
            name="apellido" 
            value={formulario.apellido} 
            onChange={cambiarValor}/>
        </div>

        <div>
            <label >Telefono:</label>
            <input 
            type="tel" 
            name="telefono" 
            value={formulario.telefono} 
            onChange={cambiarValor}/>
        </div>
        
        <div>
            <label >Servicio:</label>
            <select 
            name="servicio_id" 
            value={formulario.servicio_id} 
            onChange={cambiarValor}>
                <option value="1">Corte</option>
                <option value="2">Corte + Barba</option>
            </select>
        </div>

        <div>
            <label >Fecha:</label>
            <input 
            type="date" 
            name="fecha" 
            value={formulario.fecha} 
            onChange={cambiarValor}/>
        </div>

        <div>
            <label >Hora:</label>
            <input 
            type="time" 
            name="hora" 
            value={formulario.hora} 
            onChange={cambiarValor}/>
        </div>

        <button type="submit">Reservar</button>
        </form>

    </main>
    );
}
export default ReservarTurno;