import logo from "../../../public/logo-3.jpg"
import logoGrande from "../../../public/logo-grande.jpg"
import "./Navbar.css"
import imagenMenu from "../../../public/menu.png"

import { IoIosArrowDown } from "react-icons/io";

import { Link as Navigate, NavLink, useLocation ,} from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    
    const location = useLocation();
    let { pathname } = location;
    let url = pathname
    console.log(url)
    if(pathname.includes("/servicios/")) {
     pathname = "/servicios"
    }


    const [width, setWidth] = useState(window.innerWidth)

    const [selectedLink, setSelectedLink] = useState(pathname)


    const handleLinkClick = (link) => {
        console.log(e)
 
            setSelectedLink(link);
    
    };

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
                                <NavLink to={`/`} className={selectedLink === '/' ? 'link-activo' : ''} onClick={(e) => handleLinkClick('/' )} > 
                                    <span  className="span-link " > Inicio </span>
                                </NavLink>
                            </li>
                            <li> 
                                <NavLink to={`/nosotros`} className={selectedLink === '/nosotros' ? 'link-activo' : ''} onClick={(e) => handleLinkClick('/nosotros', e)} > 
                                    <span className="span-link "> Nosotros </span>
                                </NavLink>
                            </li>
                            <li> 
                                <NavLink to={`/contacto`} className={selectedLink === '/contacto' ? 'link-activo' : ''} onClick={() => handleLinkClick('/contacto')} > 
                                    <span className="span-link "> Contacto </span>
                                </NavLink>
                            </li>
                            <li className="li-servicios"> 
                                <NavLink to={`/servicios/servicio-general`} className={selectedLink === '/servicios' ? 'link-activo' : ''} onClick={() => handleLinkClick('/servicios')} > 
                                    <span className="span-link"> 
                                            
                                         Servicios
                                        <IoIosArrowDown />

                                        <ul 
                                            className="lista-servicios flex-column gap-10 inactive">
                                            <li> Servicio Periodontal </li>
                                            <li> Servicio General </li>
                                            <li> Servicio Cosmético </li>
                                            <li> Ácido Hialuronico </li>
                                        </ul> 
                                
                                     </span>
                                </NavLink>
                            </li>
                     
                            
                            <li> 
                                <NavLink to={`/blog`} className={selectedLink === '/blog' ? 'link-activo' : ''} onClick={() => handleLinkClick('/blog')} > 
                                    <span className={"span-link"}> Blog </span>
                                </NavLink>
                            </li>
                            <li> 
                                <NavLink to={`/reservar-hora`} className={selectedLink === '/reservar-hora' ? 'link-activo' : ''} onClick={() => handleLinkClick('/reservar-hora')}> 
                                    <span className="span-link "> Reservar Hora </span>
                                </NavLink>
                            </li>
    
                            <li> 
                                <NavLink to={`/iniciar-sesion`} className={selectedLink === '/iniciar-sesión' ? 'link-activo' : ''} onClick={() => handleLinkClick('/iniciar-sesión')}> 
                                    <span className="span-link ">  Iniciar Sesión </span>
                                </NavLink>
                            </li>
    
                            <li> 
                                <NavLink to={`/admin/panel`} className={selectedLink === '/panel' ? 'link-activo' : ''} onClick={() => handleLinkClick('/panel')} > 
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