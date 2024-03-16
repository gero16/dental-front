import logo from "../../../public/global.fw.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <> 

            <header>
                <nav className="nav-horario">
                    <p className="container">Abierto Martes - Jueves y Sábados (las piedras)  de 13.00- 20.00 pm </p>
                    <p className="container"> Miércoles 13.00 - 20.00 (Montevideo) </p>
                </nav>

                <nav className="flex container"> 
                    <img src={logo} alt="" />
                    <ul className="flex-center-center lista-navbar">
                        <li> Inicio </li>
                        <li> Nosotros </li>
                        <li> Contacto </li>
                        <li> Servicios </li>
                        <li> Galeria </li>
                        <li> Reservar Hora </li>
                        <li> Iniciar Sesión </li>
                        <li> Registrarse </li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Navbar