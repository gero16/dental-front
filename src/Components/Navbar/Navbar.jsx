import logo from "../../../public/logo-3.jpg"
import "./Navbar.css"

import { Link as Navigate, NavLink,} from "react-router-dom";

const Navbar = () => {
    return (
        <> 

            <header>
                
                {
                    /** 
                    
                        <nav className="nav-horario">
                            <p className="container p-horario"> Martes y Jueves (Las Piedras) de 13.00- 20.00 pm </p>
                            <p className="container p-horario"> Miércoles (Montevideo) de 13.00 - 20.00 </p>
                            <p className="container p-horario"> Sabado (Las Piedras) de 09:00 - 14.00  </p>
                    
                        </nav>
                    **/
                }
               

                <nav className="flex container nav-principal"> 
                    <img src={logo} className="img-logo" alt="" />
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
                            <NavLink to={`/servicios/servicio-general`} > 
                                <span className="span-link "> Servicios </span>
                            </NavLink>
                        </li>
                        {
                            /* 
                                <li> 
                                    <NavLink to={`/galeria`} > 
                                        <span className="span-link "> Galeria </span>
                                    </NavLink>
                                </li>
                            */ 
                        }
                        
                        <li> 
                            <NavLink to={`/blog`} > 
                                <span className="span-link "> Blog </span>
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
                       
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Navbar