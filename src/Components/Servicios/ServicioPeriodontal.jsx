
import Imagen from "../../../public/periodoncia.jpg"

import Icono from "../../../public/implantes.png"



const ServicioPeriodontal = () => {
    return (
        <> 
        
            <article className={"article-portada"} >

                <img src={Imagen}
                    className="portada-img-servicio"
                  
                    alt="slide"
                />

                <section className="flex-column-center section-portada-servicio text-start"   id="section-portada-periodontal">

                    <h2 className="h2-portada-texto white"> Odontología Periodontal </h2>

                    <p className="width-70 p-portada-texto white"> ¡Nuestros tratamientos holísticos, mínimamente invasivos, modernos y de alta tecnología para la enfermedad de las encías realmente funcionan! </p>

                    <span className="width-70 span-reservar white"> Reservar Hora </span>
                    
                    <section className="section-icono">

                        <img src={Icono} alt="" className="imagen-icono-servicio"/>
                    </section>
                   
                
                </section>

                </article>


                <article className={"article-servicio flex-center-center gap-20 container article-portada-servicio "} >


                    <section className="section-servicio-contenido flex-column gap-20">

                        <h2 className="h2-servicio-general verde-principal">  Implantes dentales </h2>

                        <p className="p-servicio-texto"> Si ha perdido un diente (o dientes) debido a una enfermedad o lesión periodontal, Dentro puede ayudarlo. Nuestros implantes dentales se colocan utilizando un sistema de rayos X 3D avanzado y tecnología avanzada de fabricación por computadora.
                        </p>
                        <p className="p-servicio-texto">
                            La mayoría de los sistemas de implantes tienen cinco pasos básicos para la colocación de cada implante:
                        </p>

        
                        <img src="https://www.adeslasdental.es/src/webp-express/webp-images/doc-root/src/uploads/2021/04/Mask-Group-3-768x391.png.webp"
                        className="img-servicio"
                        id="imagen1-servicio-general"
                        alt="slide"
                        />
                        <ul className="flex-column gap-20">
                            <li>
                                <h3 className="verde-principal"> 01. Reflejo de tejidos blandos </h3>
                                <p> Se hace una incisión sobre la cresta del hueso, dividiendo la encía adherida más gruesa aproximadamente por la mitad para que el implante final 
                                    tenga una banda gruesa de tejido alrededor.</p>
                            </li>
                            <li>
                                <h3 className="verde-principal"> 02. Taladrado a alta velocidad  </h3>
                                <p> Después de reflejar el tejido blando y usar una guía quirúrgica o un stent según sea necesario, se colocan orificios piloto con brocas de precisión a una velocidad altamente regulada 
                                    para evitar quemaduras o necrosis por presión del hueso. </p>
                            </li>
                            <li>
                                <h3 className="verde-principal">  03. Perforación a baja velocidad </h3>
                                <p> El orificio piloto se expande mediante el uso de fresas progresivamente más anchas (por lo general, entre tres y siete pasos de perforación sucesivos, según el ancho y la longitud del implante) </p>
                            </li>
                            <li>
                                <h3 className="verde-principal"> 04. Colocación del implante </h3>
                                <p> El tornillo del implante se coloca y puede ser autorroscante; de ​​lo contrario, el sitio preparado se rosca con un análogo de implante. </p>
                            </li>
                            <li>
                                <h3 className="verde-principal">  05. Adaptación de tejidos </h3>
                                <p> La encía se adapta alrededor de todo el implante para proporcionar una banda gruesa de tejido sano alrededor del pilar de cicatrización. </p>
                            </li>
                        </ul>

            
                    </section>


                </article>


                <article className={"article-servicio flex-center-center gap-20 container article-portada-servicio"} >

            

                        <img src="https://www.connecticutperiodontist.com/wp-content/uploads/2021/09/Pinhole-hero.jpg"
                            className="img-servicio"
                            id="img-servicio-periodontal-2"
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

                    <img src="https://grupodentalnieto.com/wp-content/uploads/2021/10/o_restauradora-1024x576.jpg"
                        className="img-servicio"
                        id="img-servicio-periodontal-3"
                        alt="slide"
                    />

                </article>

        </>
    )
}

export default ServicioPeriodontal