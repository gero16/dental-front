
import Imagen from "../../../public/servicio-2.jpg"
import Imagen2 from "../../../public/servicio-1.jpg"
import Imagen3 from "../../../public/canino.jpg"
import Imagen4 from "../../../public/integral.jpg"
import Icono from "../../../public/dientes.png"
import imagenAcido from "../../../public/acido.jpg"
import imagenAcido2 from "../../../public/acido-2.jpg"


const ServicioAcido = () => {
    return (
        <> 
        
            <article className={"article-portada"} id="portada-acido" >

               
                    <img src={imagenAcido}
                        className="portada-img-servicio"
                        id="img-portada-acido"
                        alt="slide"
                    />
    
               

                <section className="flex-column-center section-portada-servicio text-start"  id="section-portada-acido">

                    <h2 className="h2-portada-texto white"> Ácido Hialuronico Inyectable </h2>

                    <p className="width-70 p-portada-texto white"> La sustancia, de origen natural, se utiliza para rejuvenecer la piel y afinar los rasgos del rostro </p>

                    <span className="width-70 span-portada-numero white"> Reservar Hora </span>
                    
                    <section className="section-icono">

                        <img src={Icono} alt="" className="imagen-icono-servicio"/>
                    </section>
                
                </section>

                </article>


                <article className={"article-servicio flex-center-center gap-20 container article-portada-servicio "} >


                    <section className="section-servicio-contenido flex-column gap-10">

                        <h2 className="h2-servicio-general verde-principal"> Ácido hialurónico </h2>

                        <h3 className="h3-servicio-general verde-principal"> ¿Que es ? </h3>

                        <p> Es un producto natural, es tolerado de manera positiva por nuestro cuerpo, hidrata la piel («esencial para luchar contra 
                            los signos de la edad en la piel») y llega a las capas más profundas, actuando como «andamio» y promoviendo la producción de colágeno, básico para mantener la piel joven.
                        </p>

                        <h3 className="h3-servicio-general verde-principal"> Ventajas </h3>

                        <p> sirve, tanto para tratar arrugas medias, finas y profundas, como para reponer volúmenes perdidos y tensar los tejidos: cejas, pómulos, mentón, mandíbula, labios, ojeras, surco nasogeniano, pliegue de amargura, cuello, arrugas den el entrecejo y en la frente y patas de gallo. A la pregunta de si es doloroso, comenta que «la inyección es poco molesta y solo requiere anestesia tópica». Si hablamos de cuánto puede durar los resultados del tratamiento, comenta la doctora que puede ser hasta dos años. 
                            «Aunque el producto se haya reabsorbido, el efecto de corrección perdura más tiempo, debido a la regeneración del colágeno y del propio ácido hialurónico en la piel.
                        </p>
                    
                    </section>

                    <img src={imagenAcido2}
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

                        <h2 className="h2-servicio-general verde-principal"> Piphole® Gum Rejuvenation </h2>

                        <p className="p-servicio-texto"> Como uno de los primeros dentistas del mundo en recibir capacitación en la técnica de rejuvenecimiento de las encías Piphole®, se puede revertir 
                            la recesión de las encías sin bisturí ni puntos de sutura. Esta técnica revolucionaria ofrece resultados instantáneos y prácticamente sin dolor.
                        </p>

                 

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
                        <li> - Rellenos </li>
                        <li> - Coronas y Puentes </li>
                        <li> - Implantes dentales de zicornio </li>
                    </ul>

                    </section>

                    <img src={Imagen3}
                        className="img-servicio"
                        alt="slide"
                    />

                </article>

        </>
    )
}

export default ServicioAcido