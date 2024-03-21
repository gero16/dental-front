
import "./Contacto.css"
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ImagenLocal from "../../../public/local.jpg"
import Navbar from "../Navbar/Navbar";
import Ubicacion from "../Ubicacion/Ubicacion";
import Footer from "../Footer/Footer";

const Contacto = () => {

    const ubiTresCruces = [-34.89578868112877, -56.16680986705166]
    const ubiLasPiedras = [-34.7277481203798, -56.21380023171297]

    return (
        <> 
            <Navbar /> 
            <main className="container">
                <h1> Contacto </h1>
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

                            <button> Enviar </button>
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