
import "./Contacto.css"
import "leaflet/dist/leaflet.css";
import ImagenLocal from "../../../public/local.jpg"
import Navbar from "../Navbar/Navbar";
import Ubicacion from "../Ubicacion/Ubicacion";
import Footer from "../Footer/Footer";
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contacto = () => {

    const ubiTresCruces = [-34.89578868112877, -56.16680986705166]
    const ubiLasPiedras = [-34.7277481203798, -56.21380023171297]

    return (
        <> 
            <Navbar /> 
            <section className="portada-contacto"> </section>

            <main className="container">
                
                <section className="flex-column section-contacto-header">
                    <h1 className="titulo-contacto"> Pongase en  Contacto </h1>
                    <p className="p-header-contacto"> Envíenos un correo electrónico aquí: info@globalsystemdental.com o complete este formulario 
                        y nos pondremos en contacto con usted en las próximas 24 horas.
                    </p>
                    <ul className="lista-redes-sociales flex">
                        <li> <FaInstagram  style={{ fontSize: '25px'}} />  </li>
                        <li> <FaFacebook  style={{ fontSize: '25px'}} />  </li>
                        <li> <FaTwitter  style={{ fontSize: '25px'}} /> </li>
                    </ul>
                    
                </section>
            
          
                <section className="flex section-contacto-formulario">

              
                    <form action="#" className="formulario-contacto">
                        <ul className="ul-formulario-contacto">
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

                    <section className="section-img-contacto">
                     
                        <img src={ImagenLocal} className="img-contacto" alt="" />
                    </section>

                </section>
            


                <Ubicacion> </Ubicacion>

               
            </main>
        
        <Footer> </Footer>
        </>
    )
}

export default Contacto