function Login() {
    return(
        <main>
            <h1>Panel de Barbero.</h1>

            <form>
                <div>
                    <label>Email:</label>
                    <input type="email"/>
                </div>

                <div>
                    <label>Contraseña:</label>
                    <input type="password"/>
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </main>
    );
}
export default Login;