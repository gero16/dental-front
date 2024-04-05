import logo from "../../../public/logo-3.jpg"
import logoGrande from "../../../public/logo-grande.jpg"
import "./Navbar.css"
import imagenMenu from "../../../public/menu.png"

import { IoIosArrowDown } from "react-icons/io";

import { Link as Navigate, NavLink,} from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const [active, setActive] = useState(false)
    const cambio = (valor) => {
        setActive(valor)
        console.log(e)
    }
    return (
        <> 
            <header>
                
                <nav className="container nav-principal flex-center-v gap-20"> 

                    <section>
                        <NavLink to={`/`} >     
                            <img src={logoGrande} className="img-logo" alt="" />
                        </NavLink>
                        <ul className="display-none">
                            <li> Nosotros </li>
                            <li> Contacto </li>
                            <li> 
                                Servicios
                                <IoIosArrowDown />
                                <ul>
                                    <li> Servicio Periodontal </li>
                                    <li> Servicio General </li>
                                    <li> Servicio Cosmético </li>
                                    <li> Ácido Hialuronico </li>
                                </ul> 
                            </li>
                            <li> Blog </li>
                            <li> Reservar Hora </li>
                            <li> Iniciar Sesión </li>
                            <li> Panel </li>
                        </ul>
                    </section>
                  
                    {
                        width < 800 
                            ? <img src={ imagenMenu } alt="" className="img-menu" /> 
                            : <ul className="flex-center-center lista-navbar">
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
                            <li className="li-servicios"> 
                                <NavLink to={`/servicios/servicio-general`} > 
                                    <span className="span-link "> 
                                            
                                         Servicios
                                        <IoIosArrowDown />

                                        <ul 
                                            className="lista-servicios flex-column gap-10 inactive"
                                            onClick={(e) => cambio(!active, e)}>
                                            <li> Servicio Periodontal </li>
                                            <li> Servicio General </li>
                                            <li> Servicio Cosmético </li>
                                            <li> Ácido Hialuronico </li>
                                        </ul> 
                                
                                     </span>
                                </NavLink>
                            </li>
                     
                            
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
    
                            <li> 
                                <NavLink to={`/admin/panel`} > 
                                    <span className="span-link ">  Panel </span>
                                </NavLink>
                            </li>
                           
                        </ul>
                    }
                 
                </nav>

            </header>
        </>
    )
}

export default Navbar