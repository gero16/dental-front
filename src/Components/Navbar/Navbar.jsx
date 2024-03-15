import logo from "../../../public/global.fw.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <> 
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
        </>
    )
}

export default Navbar