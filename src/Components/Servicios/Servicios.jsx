import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { FaPhoneSquareAlt } from 'react-icons/fa';
import Imagen from "../../../public/servicio-2.jpg"
import Imagen2 from "../../../public/servicio-1.jpg"
import Imagen3 from "../../../public/canino.jpg"
import Imagen4 from "../../../public/integral.jpg"
import Icono from "../../../public/implantes.png"
import Icono2 from "../../../public/diente-2.png"
import Icono3 from "../../../public/limpieza-de-dientes.png"


import Footer from "../Footer/Footer"

import "./Servicios.css"

const Servicios = () => {

    let { servicio } = useParams();

    return (
        <> 
            <Navbar> </Navbar>


                <article className={"article-portada"} >

                    <img src={Imagen}
                        className="portada-img-servicio"
                        alt="slide"
                    />

                   <section className="flex-column-center section-portada-servicio text-start">

                        <h2 className="h2-portada-texto width-70 white"> ODONTOLOGÍA General </h2>

                        <p className="width-70 p-portada-texto white"> Nuestro equipo tiene un gran conocimiento sobre las interrelaciones de su salud oral y sistémica. </p>

                        <span className="width-70 span-portada-numero white"> Reservar Hora </span>

                        <img src={Icono} alt="" className="imagen-icono-servicio"/>
                      
                    </section>

                </article>

                <article className={"article-servicio flex-center-center gap-20 container"} >


                    <section className="section-servicio-contenido">

                        <h2 className="h2-servicio-general width-70">  ¿Es difícil para usted mantener la salud bucal? </h2>

                        <p className="width-70 p-servicio-texto"> Nuestro enfoque es optimizar la salud de todo su cuerpo, incluidos sus dientes, no solo tratar sus síntomas dentales como la mayoría 
                            de las prácticas dentales tradicionales. Mi equipo y yo lo consideramos como una persona completa que tiene el potencial innato para estar saludable. 
                            ¡Juntos, trabajaremos para maximizar su salud y diagnosticar y eliminar la causa de sus problemas de salud para que pueda florecer su "yo más saludable"! 
                        </p>

                      
                    </section>
                    
                    <img src={Imagen4}
                        className="img-servicio"
                        id="imagen1-servicio-general"
                        alt="slide"
                    />

                </article>

                
                <article className={"article-servicio flex gap-20 container"} >

                    <img src={Imagen2}
                        className="img-servicio"
                        alt="slide"
                    />
                   <section className="section-servicio-contenido">

                        <h2 className="h2-servicio-general width-70">  Odontología Preventiva </h2>

                        <p className="width-70 p-servicio-texto"> ¡Juntos, podemos ayudarlo a mantenerse libre de los problemas dentales comunes de enfermedad de las encías, caries, tratamientos 
                        de conducto y pérdida de dientes!
                        </p>

                       <h3>Nuestros servicios dentales preventivos holísticos incluyen: </h3>
                       <ul>
                        <li> Exámenes dentales holísticos </li>
                        <li> Plan de Salud Periodontal Personalizado </li>
                        <li> Detección de cáncer bucal VELscope </li>
                       </ul>

                    </section>
                    

                </article>

                 
                <article className={"article-servicio flex gap-20 container"} >
                    <section className="section-servicio-contenido">

                        <h2 className="h2-servicio-general width-70"> Odontología Restauradora </h2>

                        <p className="width-70 p-servicio-texto"> ¡Juntos, podemos ayudarlo a mantenerse libre de los problemas dentales comunes de enfermedad de las encías, 
                        caries, tratamientos de conducto y pérdida de dientes!
                        </p>

                       <h3> Nuestros servicios dentales preventivos holísticos incluyen: </h3>
                       <ul>
                        <li> Rellenos </li>
                        <li> Coronas y Puentes </li>
                        <li> Implantes dentales de zicornio </li>
                       </ul>

                    </section>
                    
                    <img src={Imagen3}
                        className="img-servicio"
                        alt="slide"
                    />

                </article>


            <Footer> </Footer>
            
        </>
    )
}

export default Servicios