
import "./Contacto.css"
import "leaflet/dist/leaflet.css";
import ImagenLocal from "../../../public/local.jpg"
import Navbar from "../Navbar/Navbar";
import Ubicaciones from "../Ubicacion/Ubicaciones";
import Footer from "../Footer/Footer";
import { FaInstagram, FaFacebook, FaTwitter, FaPhoneSquareAlt } from 'react-icons/fa';
import { useState } from "react";


const Contacto = () => {

    const ubiTresCruces = [-34.89578868112877, -56.16680986705166]
    const ubiLasPiedras = [-34.7277481203798, -56.21380023171297]

    const [lasPiedrasUbi, setLasPiedrasUbi] = useState(false)

    const cambiarUbi = (valor) => {
        console.log(valor)
        setLasPiedrasUbi(valor)
    }

    return (
        <> 
            <Navbar> </Navbar> 

            {
                /* <PortadaTitulo titulo={"Contacto"} subtitulo={"Pongase en contacto con nosotros"} color={"#E5028E"}> </PortadaTitulo> */
            }
            

            <section className="portada-contacto"> </section>

            <section className="fondo-blanco-img flex-column gap-30">

                <section className="section-contacto-header">
                    <section className="container flex">

                        <section className="flex-column width-70">
                            <h1 className="titulo-contacto"> Pongase en  Contacto </h1>
                            <p className="p-header-contacto"> Envíenos un correo electrónico aquí: info@globalsystemdental.com o complete este formulario 
                                y nos pondremos en contacto con usted en las próximas 24 horas.
                            </p>
                        </section>

                        <section className="flex-column-center-v">
                            <h3> Llame para una cita </h3>
                            <h2 className="h2-numero-contacto flex-center-v gap-10"> <FaPhoneSquareAlt  size={20} />   + (598) 94 484 397 </h2>
                        </section>
                    </section>

                        
                </section>

                <section className="container">
                    
                        <section className="flex section-contacto-formulario">

                            <form action="#" className="formulario-contacto">
                                <ul className="ul-formulario-contacto">
                                    <li> <h3 className="h3-contacto"> ¡Envienos su consulta! </h3> </li>
                            
                                    <li className="li-formulario-contacto">
                                        <label htmlFor="">Nombre </label>
                                        <input type="text" />
                                    </li>
                                    <li  className="li-formulario-contacto">
                                        <label htmlFor=""> Apellido  </label>
                                        <input type="text" />
                                    </li>
                                    <li  className="li-formulario-contacto">
                                        <label htmlFor=""> Correo Electronico </label>
                                        <input type="text" />
                                    </li>
                                    <li  className="li-formulario-contacto">
                                        <label htmlFor=""> Titulo </label>
                                        <input type="text" />
                                    </li>
                                    <li  className="li-formulario-contacto">
                                        <label htmlFor=""> Mensaje </label>
                                        <textarea type="text" />
                                    </li>

                                    <span className="btn-enviar-contacto text-center"> Enviar </span>
                                </ul>
                            </form>

                            <section className="img-contacto">      
                
                            </section>
                            

                        </section>
                    
                
                    <section className="section-ubicaciones flex-column">

                       <Ubicaciones> </Ubicaciones>
                       
                    
                    </section>
                 
                
                </section>

            </section>
         
        
        <Footer> </Footer>
        </>
    )
}

export default Contacto