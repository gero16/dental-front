import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { FaPhoneSquareAlt } from 'react-icons/fa';
import Imagen from "../../../public/sonrisa-3.jpg"

import Icono from "../../../public/diente-2.png"
import ImagenCosmetico from "../../../public/odontologia-cosmetica.jpg"

const ServicioCosmetico = () => {
    return (
        <> 
        
            <article className={"article-portada"} >

                <img src={Imagen}
                    className="portada-img-servicio"
                    alt="slide"
                />

                <section className="flex-column-center section-portada-servicio text-start" id="section-portada-cosmetico">

                    <h2 className="h2-portada-texto white"> Odontología cosmetica </h2>

                    <p className="width-70 p-portada-texto white"> Combinamos el arte y la ciencia de la odontología estética para crear tratamientos únicos y mínimamente invasivos que realmente funcionan </p>

                    <span className="width-70 span-portada-numero white"> Reservar Hora </span>
                      
                    <section className="section-icono">

                        <img src={Icono} alt="" className="imagen-icono-servicio" id="icono-servicio-cosmetico"/>
                    </section>
                   
                
                </section>

                </article>


                <article className={"article-servicio flex-center-center gap-20 container article-portada-servicio "} >


                    <section className="section-servicio-contenido flex-column gap-20">

                        <h2 className="h2-servicio-general verde-principal"> Carillas sin preparación </h2>

                        <h3 className="h3-servicio-general verde-principal"> Inconvenientes de las carillas tradicionales </h3>

                        <ul className="lista">
                            <li>  Aumento de la sensibilidad dental debido a la eliminación del esmalte sano de las encías. </li>
                            <li> Permanencia. Una vez que se instala una carilla tradicional, debe usar carillas por el resto de su vida. </li>
                            <li> Alto riesgo de necesitar endodoncias en el futuro </li>
                        </ul>

                        <h3 className="h3-servicio-general verde-principal"> Ventajas de las carillas sin preparación </h3>

                        <ul className="lista">
                            <li> hermosa sonrisa blanca </li>
                            <li> No daña tus dientes sanos. </li>
                            <li> Fácil instalación (y extracción, si alguna vez es necesario) </li>
                        </ul>
                    
                    </section>

                    <img src={ImagenCosmetico}
                        className="img-servicio"
                        id="imagen1-servicio-general"
                        alt="slide"
                    />

                </article>


        </>
    )
}

export default ServicioCosmetico