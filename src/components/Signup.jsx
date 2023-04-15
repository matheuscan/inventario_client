import { Form } from "react-bootstrap"
import "../../public/css/signup.css"

function Signup(){

    return(
        <>
            <div className="signup-body">
                <h2>Regístrese</h2>
                <form method="post">
                <div class="mb-3">
                    <label for="usuario" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="usuario" placeholder="Nombre de usuario"/>
                </div>
                <div class="mb-3">
                    <label for="email" className="form-label">Correo</label>
                    <input type="text" className="form-control" id="email" placeholder="nombre@ejemplo.com"/>
                </div>
                <div class="mb-3">
                    <label for="password" className="form-label">Clave</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <input type="submit" className="btn btn-success"value="registrarse" />
                </form>
            </div>
            
        </>
    )
}


export default Signup