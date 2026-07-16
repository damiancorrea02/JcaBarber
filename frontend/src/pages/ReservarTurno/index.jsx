function ReservarTurno() {
    return (
    <main>
        <h1>Reservar Turno</h1>
        
        <form>
        <div>
            <label >Nombre:</label>
            <input type="text"/>
        </div>

        <div>
            <label >Apellido:</label>
            <input type="text"/>
        </div>

        <div>
            <label >Telefono:</label>
            <input type="tel"/>
        </div>
        
        <div>
            <label >Servicio:</label>
            <select>
                <option>Corte</option>
                <option>Corte + Barba</option>
            </select>
        </div>

        <div>
            <label >Horario</label>
            <select>
                <option>Seleccionar horario</option>
            </select>
        </div>

        <button type="submit">Reservar</button>
        </form>

    </main>
    );
}
export default ReservarTurno;