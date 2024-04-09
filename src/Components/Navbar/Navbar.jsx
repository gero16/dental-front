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
        console.log(selectedLink)
        console.log(link)
 
        setSelectedLink(link);
     };

    return (
        <> 
            <header>
                
                <nav className="container nav-principal flex-center-v gap-20"> 

                  
                    {
                        width < 800 
                            ? <img src={ imagenMenu } alt="" className="img-menu" /> 
                            
                            : <ul className="flex-center-center lista-navbar">
                            <li className="li-link"> 
                                <NavLink to={`/`} className={selectedLink === '/' ? 'link-activo' : ''} onClick={(e) => handleLinkClick('/' )} > 
                                    <span  className="span-link " > Inicio </span>
                                </NavLink>
                            </li>
                            <li className="li-link">
                                <NavLink to={`/nosotros`} className={selectedLink === '/nosotros' ? 'link-activo' : ''} onClick={(e) => handleLinkClick('/nosotros', e)} > 
                                    <span className="span-link "> Nosotros </span>
                                </NavLink>
                            </li>
                            <li className="li-link">
                                <NavLink to={`/contacto`} className={selectedLink === '/contacto' ? 'link-activo' : ''} onClick={() => handleLinkClick('/contacto')} > 
                                    <span className="span-link "> Contacto </span>
                                </NavLink>
                            </li>
                            <li className="li-servicios li-link"> 
                                <NavLink to={`/servicios/servicio-general`} className={selectedLink === '/servicios' ? 'link-activo' : ''} onClick={() => handleLinkClick('/servicios')} > 
                                    <span className="span-link"> 
                                            
                                         <span> Servicios </span>
                                  
                                            <IoIosArrowDown  />



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
                     
                            
                            <li className="li-link">
                                <NavLink to={`/blog`} className={selectedLink === '/blog' ? 'link-activo' : ''} onClick={() => handleLinkClick('/blog')} > 
                                    <span className={"span-link"}> Blog </span>
                                </NavLink>
                            </li>
                            <li className="li-link">
                                <NavLink to={`/reservar-hora`} className={selectedLink === '/reservar-hora' ? 'link-activo' : ''} onClick={() => handleLinkClick('/reservar-hora')}> 
                                    <span className="span-link "> Reservar Hora </span>
                                </NavLink>
                            </li>
    
                            <li className="li-link">
                                <NavLink to={`/iniciar-sesion`} className={selectedLink === '/iniciar-sesion' ? 'link-activo' : ''} onClick={() => handleLinkClick('/iniciar-sesion')}> 
                                    <span className="span-link ">  Iniciar Sesión </span>
                                </NavLink>
                            </li>
    
                            <li className="li-link">
                                <NavLink to={`/admin/panel`} className={selectedLink === '/admin/panel' ? 'link-activo' : ''} onClick={() => handleLinkClick('/admin/panel')} > 
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