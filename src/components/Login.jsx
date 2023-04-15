import "../../public/css/login.css"

function Login(){
    return (
        <>
            <div className="login-body">
                <h2>Inicie sesión</h2>
                <form method="get">
                    <div className="mb-3">
                        <label htmlFor="usuario" className="form-label">Usuario</label>
                        <input type="text" name="usuario" id="usuario" className="form-control" pattern="[a-zA-Z]" required placeholder="Nombre de usuario"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" name="password" id="password" className="form-control" pattern="[a-zA-Z]" required placeholder="Contraseña"/>

                    </div>
                    <input type="submit" className="btn btn-primary" value="Iniciar sesión" />
                </form>
            </div>
        </>
    )
}
export default Login