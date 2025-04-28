
import "./Contacto.css"
import "leaflet/dist/leaflet.css";
import ImagenLocal from "../../../public/local.jpg"
import Navbar from "../Navbar/Navbar";
import Ubicaciones from "../Ubicacion/Ubicaciones";
import Footer from "../Footer/Footer";
import { FaInstagram, FaFacebook, FaTwitter, FaPhoneSquareAlt } from 'react-icons/fa';
import { useState } from "react";
import Whatsapp from "../Whatsapp/Whatsapp";


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

            <section className="fondo-blanco-img flex-column-center gap-30 mt-2p">
                <article className="article-info-consulta2 flex-column-center gap-20 text-center">
                <section className="flex-column-center gap-30 section-contacto-header"> 
                        <section className="sections-info-consulta2 flex-column-center br p-20"> 
                            <h1 className="titulo-contacto"> Pongase en  Contacto </h1>

                            <p className="p-header-contacto"> Puedes enviarnos un correo electrónico aquí: info@globalsystemdental.com o complete este formulario  
                                y nos pondremos en contacto con usted en las próximas 24 horas.
                            </p>
                        </section>

                        <section className="flex-column gap-30"> 
                            <section className="sections-info-consulta2 br p-20"> 
                                <h2 className="info-consulta2-h2"> LLámenos </h2> 
                                <h2 className="h2-numero info-consulta2-h2"> (598) 94 484 397 </h2>
                                <p> ¡Estamos listos para ayudarlo a lograr una salud bucal increíble! </p>
                            </section>
                        </section>
                    </section>

                    <Ubicaciones> </Ubicaciones>
                </article>

          
                   
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

                 


                </section>



            </section>
         
        <Whatsapp> </Whatsapp>
        <Footer> </Footer>
        </>
    )
}

export default Contacto