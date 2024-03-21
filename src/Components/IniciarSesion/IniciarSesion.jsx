import Navbar from "../Navbar/Navbar"
import "./IniciarSesion.css"

const IniciarSesion = () => {
    return (
        <> 
            <Navbar> </Navbar>

            <section className="img-portada-sesion"> 
              
            </section>
            <section className="flex-column-center section-sesion">
                <h1> Iniciar Sesión </h1>
                <ul className="ul-iniciar-sesion flex-column">
                    <li>
                        <label htmlFor=""> Correo </label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="">Contraseña </label>
                        <input type="text" />
                    </li>
                    <li>
                        <span className="btn-iniciar-sesion"> Iniciar Sesión </span>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default IniciarSesion