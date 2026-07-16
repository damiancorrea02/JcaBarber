function Configuracion() {
    return (
        <main>
            <h1>Configuracion</h1>

            <section>
                <h2>Precios</h2>

                <label>Corte</label>
                <input type="number" />

                <label>Corte + Barba</label>
                <input type="number" />
            </section>

            <section>
                <h2>Horarios</h2>

                <label>Apertura</label>
                <input type="time" />

                <label>Cierre</label>
                <input type="time" />
            </section>

            <section>
                <h2>Dias Laborables</h2>

                <label>
                    <input type="checkbox" /> Lunes
                </label>
                <label>
                    <input type="checkbox" /> Martes
                </label>
                <label>
                    <input type="checkbox" /> Miércoles
                </label>
                <label>
                    <input type="checkbox" /> Jueves
                </label>
                <label>
                    <input type="checkbox" /> Viernes
                </label>
                <label>
                    <input type="checkbox" /> Sábado
                </label>
                <label>
                    <input type="checkbox" /> Domingo
                </label>
            </section>
            <button>Guardar Cambios</button>
        </main>
    );
}
export default Configuracion;