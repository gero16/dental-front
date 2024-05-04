
import Imagen from "../../../public/servicio-2.jpg"
import Imagen2 from "../../../public/servicio-1.jpg"
import Imagen3 from "../../../public/canino.jpg"
import Imagen4 from "../../../public/integral.jpg"
import Icono from "../../../public/diente-mano.png"
import { Link as Navigate, NavLink, useLocation ,} from "react-router-dom";

const ServicioGeneral = () => {
    return (
        <section> 

            <article className={"article-portada"} >

            <img src={Imagen}
                className="portada-img-servicio"
                alt="slide"
            />

            <section className="flex-column-center section-portada-servicio text-start">

                <h2 className="h2-portada-servicios white"> ODONTOLOGÍA General </h2>

                <p className="width-70 p-portada-texto white"> Nuestro equipo tiene un gran conocimiento sobre las interrelaciones de su salud oral y sistémica. </p>
                
                <NavLink to={`/reservar-hora`} > 
                    <span className="width-70 span-reservar white"> Reservar Hora </span>
                </NavLink>

                <section className="section-icono">
                    <img src={Icono} alt="" className="imagen-icono-servicio" id="icono-servicio-general"/>
                </section>
              
            
            </section>

            </article>

            <article className={"article-servicio flex-center-center gap-20 container article-portada-servicio "} >


            <section className="section-servicio-contenido flex-column gap-20">

                <h2 className="h2-servicio-general verde-principal">  ¿Es difícil para usted mantener la salud bucal? </h2>

                <p className="p-servicio-texto"> Nuestro enfoque es optimizar la salud de todo su cuerpo, incluidos sus dientes, no solo tratar sus síntomas dentales como la mayoría 
                    de las prácticas dentales tradicionales. 
                </p>
                <p className="p-servicio-texto">
                    Mi equipo y yo lo consideramos como una persona completa que tiene el potencial innato para estar saludable. 
                    ¡Juntos, trabajaremos para maximizar su salud y diagnosticar y eliminar la causa de sus problemas de salud para que pueda florecer su "yo más saludable"! 
                </p>

            
            </section>

            <img src={Imagen4}
                className="img-servicio"
                id="imagen1-servicio-general"
                alt="slide"
            />

            </article>


            <article className={"article-servicio flex-center-center gap-20 container article-portada-servicio"} >

            <img src={Imagen2}
                className="img-servicio"
                alt="slide"
            />
            <section className="section-servicio-contenido flex-column gap-20">

                <h2 className="h2-servicio-general verde-principal">  Odontología Preventiva </h2>

                <p className="p-servicio-texto"> ¡Juntos, podemos ayudarlo a mantenerse libre de los problemas dentales comunes de enfermedad de las encías, caries, tratamientos 
                de conducto y pérdida de dientes!
                </p>

            <h3 className="verde-principal"> Nuestros servicios dentales preventivos holísticos incluyen: </h3>
            <ul>
                <li className="p-servicio-texto"> - Exámenes dentales holísticos </li>
                <li className="p-servicio-texto"> - Plan de Salud Periodontal Personalizado </li>
                <li className="p-servicio-texto"> - Detección de cáncer bucal VELscope </li>
            </ul>

            </section>


            </article>


            <article className={"article-servicio flex-center-center gap-20 container article-portada-servicio"} >

            <section className="section-servicio-contenido flex-column gap-20">
                <h2 className="h2-servicio-general verde-principal"> Odontología Restauradora </h2>

                <p className="p-servicio-texto"> ¡Juntos, podemos ayudarlo a mantenerse libre de los problemas dentales comunes de enfermedad de las encías, 
                caries, tratamientos de conducto y pérdida de dientes!
                </p>

            <h3 className="h3-servicio-general verde-principal"> Nuestros servicios dentales preventivos holísticos incluyen: </h3>
            <ul>
                <li className="p-servicio-texto"> - Rellenos </li>
                <li className="p-servicio-texto"> - Coronas y Puentes </li>
                <li className="p-servicio-texto"> - Implantes dentales de zicornio </li>
            </ul>

            </section>

            <img src={Imagen3}
                className="img-servicio"
                alt="slide"
            />

            </article>

        </section>
    )
}

export default ServicioGeneral