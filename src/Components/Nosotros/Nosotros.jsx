import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Nosotros.css"
import FondoBlanco from "/fondo-blanco.jpg"
import { useState } from "react"

const Nosotros = () => {

    const [width, setWidth] = useState(window.innerWidth)
    console.log(width)


    return (
        <> 
            <Navbar> </Navbar>

            <main className="main-nosotros">

           
                {
                    width > 800 
                    ? <picture  className="flex-column-center section-portada-nosotros"> 
                        <source 
                            srcSet="https://res.cloudinary.com/geronicola/image/upload/v1711325178/general-it/gtwqyvbfzlmdmt33r3tz.png" 
                            media="(min-width: 1550px)" 
                            className="portada-nosotros-big"
                            /> 
                            { /* 
                                <source  srcSet="tablet.jpg" media="(min-width: 768px)" />
                                <source srcSet="mobile.jpg" media="(min-width: 377px)" />
                            */}
                        
                        <source  
                            srcSet="https://res.cloudinary.com/geronicola/image/upload/v1711566365/to1utgnyqwaxdl6ztfqv.png" 
                            media="(min-width: 768px)" 
                        />
                        <img 
                            src="https://res.cloudinary.com/geronicola/image/upload/v1711325178/general-it/gtwqyvbfzlmdmt33r3tz.png" 
                            className="portada-nosotros"
                            alt="" />
                        
                    </picture>
                    : <> </>
                }
           

                

                <section className="section-nosotros-texto m-auto flex-column-center">
              
                    <h1 className="h1-nosotros width-70 m-auto"> Nosotros </h1> 
                     <p className="width-70 m-auto texto-nosotros"> En Global System Dental brindamos`una atención odontológica integral, priorizando la salud y el bienestar de nuestros pacientes, desde niños hasta adultos mayores.
                    Con 40 años de experiencia profesional, el Dr Rafael Pérez ofrece una atención personalizada desde el inicio hasta el final de tratamiento, abarcando todas las áreas que comprende un tratamiento odontológico. Además, contamos con tecnología de última generación
                    Ahora lo sabes, si estás en busca de mejorar tu sonrisa, ¡no dudes en contactarnos! </p>
                </section>


            
                <section className="tecnologias-nosotros m-auto flex-column">
                    <h2 className="h2-tecnologias-utilizadas width-70 m-auto"> Tecnologias que utilizamos </h2>
                    <ul className="width-70 m-auto flex-column ul-nosotros width-70">
                        <li className="li-nosotros flex-column">
                            <h3> 3D Computerizado CAD/CAM </h3>
                            <p className="p-tecnologias-utilizadas"> Se toma una impresión digital de sus dientes. Con la tecnología de diseño asistido por computadora creamos la nueva restauración en menos de 2 horas </p>
                        </li>
                        <li className="li-nosotros flex-column">
                            <h3> Cámaras intraorales </h3>
                            <p className="p-tecnologias-utilizadas"> Una cámara intraoral nos permite investigar tu boca y mostrarte exactamente lo que está pasando </p>
                        </li>
                        <li className="li-nosotros flex-column">
                            <h3> Implantes digitales </h3>
                            <p className="p-tecnologias-utilizadas"> determinar la ubicación de su tejido óseo y nervios para que podamos completar el procedimiento de manera más efectiva y eficiente. </p>
                        </li>
              

               
                        <li className="li-nosotros flex-column">
                            <h3> ¡Zoom! Blanqueamiento dental </h3>
                            <p className="p-tecnologias-utilizadas"> Puede blanquear tus dientes hasta ocho tonos en una sola aplicación. </p>
                        </li>
                        <li className="li-nosotros flex-column">
                            <h3> Láseres dentales </h3>
                            <p className="p-tecnologias-utilizadas"> Un haz de luz concentrado corta, coagula y vaporiza simultáneamente el tejido con total exactitud y precisión. </p>
                        </li>
                        <li className="li-nosotros flex-column">
                            <h3> Radiografías digitales </h3>
                            <p className="p-tecnologias-utilizadas"> Estas unidades son más seguras que las unidades de rayos X tradicionales ya que utilizan menos radiación. </p>
                        </li>
                    </ul>
                </section>

            </main>

            <Footer> </Footer>

        </>
    )
}

export default Nosotros