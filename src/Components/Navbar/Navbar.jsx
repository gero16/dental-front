import logo from "../../../public/global.fw.png"
import "./Navbar.css"

import { Link as Navigate, NavLink,} from "react-router-dom";

const Navbar = () => {
    return (
        <> 

            <header>
                <nav className="nav-horario">
                    <p className="container">Abierto Martes - Jueves y Sábados (las piedras)  de 13.00- 20.00 pm </p>
                    <p className="container"> Miércoles 13.00 - 20.00 (Montevideo) </p>
                </nav>

                <nav className="flex container nav-principal"> 
                    <img src={logo} alt="" />
                    <ul className="flex-center-center lista-navbar">
                        <li> 
                            <NavLink to={`/`} > 
                                <span className="span-link "> Inicio </span>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to={`/nosotros`} > 
                                <span className="span-link "> Nosotros </span>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to={`/contacto`} > 
                                <span className="span-link "> Contacto </span>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to={`/servicios`} > 
                                <span className="span-link "> Servicios </span>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to={`/galeria`} > 
                                <span className="span-link "> Galeria </span>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to={`/reservar-hora`} > 
                                <span className="span-link "> Reservar Hora </span>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to={`/iniciar-sesion`} > 
                                <span className="span-link ">  Iniciar Sesión </span>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to={`/registrarse`} > 
                                <span className="span-link "> Registrarse </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Navbar