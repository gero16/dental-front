import "./Blog.css"
import Footer from "../../Footer/Footer"
import Navbar from "../../Navbar/Navbar"
import { Link as Navigate, NavLink,} from "react-router-dom";

const Blog = () => {

    return (
        <> 
            <Navbar> </Navbar>
            
            <section className="portada-noticias flex">
                <section className="noticias-portada-texto flex-column-center">
                    <h1 className="h1-noticias"> Noticias </h1>
                    <p> Lea nuestras publicaciones y únase a la conversación. </p>
                </section>
           
            </section>
           
           <section className="fondo-blanco-img">
                <main className="publicaciones-blog flex">

                    <NavLink to={`/blog/publicaciones/uso-de-protesis-removibles`} className="publicacion-blog arcoiris" >  
                        <img 
                            src="https://clinicajuliansaiz.com/wp-content/uploads/2021/05/protesis-dental-clinica-dental-julian-saiz-01.jpg" 
                            className="img-publicacion-blog"
                            alt="" />
                        <section className="contenido-publicacion-blog">
                            <h2 className="h2-publicacion-blog"> Uso de protesis removibles </h2>
                            <p className="contenido-publicacion-blog"> La prótesis dental (o estomatológica) removible es un tratamiento dirigido a reemplazar dientes ausentes y las estructuras óseas que se van atrofiando a lo largo del tiempo 
                                tras la pérdida de aquéllos, mediante unos aparatos bucales, portadores de dientes artificiales, que se pueden y deben extraer de la boca para facilitar la limpieza de ésta y de aquéllos. 
                            </p>
                        </section>
                     
                    </NavLink>
                    

                    <NavLink className="publicacion-blog arcoiris">
                        <img 
                            src="https://clinica-udaberri.com/wp-content/uploads/shutterstock_76874668-1.jpg" 
                            className="img-publicacion-blog"
                            alt="" />

                        <section className="contenido-publicacion-blog">
                            <h2 className="h2-publicacion-blog"> Recuperación esmalte dental</h2>
                            <p className="contenido-publicacion-blog"> La prótesis dental (o estomatológica) removible es un tratamiento dirigido a reemplazar dientes ausentes y las estructuras óseas que se van atrofiando a lo largo del tiempo 
                                tras la pérdida de aquéllos, mediante unos aparatos bucales, portadores de dientes artificiales, que se pueden y deben extraer de la boca para facilitar la limpieza de ésta y de aquéllos. 
                            </p>
                        </section>
                      
                    </NavLink>

                    <NavLink className="publicacion-blog arcoiris">
                        <img 
                            src="https://biosmile.uy/wp-content/uploads/2021/03/295-Sedacion-consciente-adios-al-dolor-Biosmile-Excelencia-Carrasco-Uruguay-1.jpg" 
                            className="img-publicacion-blog"
                            alt="" />
                        <section className="contenido-publicacion-blog"> 
                            <h2 className="h2-publicacion-blog"> Tratamiento odontológico sin dolor</h2>
                            <p className="contenido-publicacion-blog"> La prótesis dental (o estomatológica) removible es un tratamiento dirigido a reemplazar dientes ausentes y las estructuras óseas que se van atrofiando a lo largo del tiempo 
                                tras la pérdida de aquéllos, mediante unos aparatos bucales, portadores de dientes artificiales, que se pueden y deben extraer de la boca para facilitar la limpieza de ésta y de aquéllos. 
                            </p>
                        </section>
                    </NavLink>

                    <NavLink className="publicacion-blog arcoiris">
                        <img 
                            src="https://centrovillanueva.com/wp-content/uploads/2017/11/alimentos-que-ti%C3%B1en-dientes.jpg" 
                            className="img-publicacion-blog"
                            alt="" />
                        <section className="contenido-publicacion-blog"> 
                            <h2 className="h2-publicacion-blog">  Principales alimentos que tiñen los dientes </h2>
                            <p className="contenido-publicacion-blog"> 
                
                            El vino tinto y blanco es uno de los grandes enemigos de la estética de los dientes.

                            El tinto es sin duda el que más daño ocasiona a la apariencia de la dentadura debido a su composición de pigmentos naturales, especialmente las antocianinas. Estas sustancias son compuestos orgánicos responsables del color rojo, azul o morado que se encuentran en muchas frutas, verduras y plantas, incluyendo las uvas utilizadas para hacer vino tinto. Cuando consumes vino tinto, se adhieren al esmalte dental, que es la capa externa protectora de los dientes. 

                            </p>
                        </section>

                    </NavLink>

                    <NavLink className="publicacion-blog arcoiris">
                        <img 
                            src="https://www.implantadental.es/images/noticias/1485195650salud-dental-ninos.jpg" 
                            className="img-publicacion-blog"
                            alt="" />
                        <section className="contenido-publicacion-blog"> 
                            <h2 className="h2-publicacion-blog"> Salud Bucal Niños </h2>
                            <p className="contenido-publicacion-blog"> 
                            La mejor manera de proteger los dientes de su hijo es enseñarle buenos hábitos dentales. Con la orientación adecuada, adoptará rápidamente buena higiene oral como parte de su rutina diaria. Sin embargo, aunque es posible que sea un participante entusiasta, no tendrá el control ni la concentración para lavar sus dientes por sí mismo. Será necesario que lo supervise y le ayude a que el cepillo retire toda la placa, las bacterias suaves y pegajosas, que contienen depósitos que se acumulan

                                                            </p>
                        </section>

                    </NavLink>

                    <NavLink className="publicacion-blog arcoiris">
                        <img 
                            src="https://www.clinicasgallut.com/wp-content/uploads/2022/07/Razones-por-las-que-enferman-las-encias.jpg" 
                            className="img-publicacion-blog"
                            alt="" />
                        <section className="contenido-publicacion-blog"> 
                            <h2 className="h2-publicacion-blog"> La importancia de la salud en las encías </h2>
                            <p className="contenido-publicacion-blog">
                                La salud de nuestros dientes depende en gran parte de la salud de las encías.

                                Cuidar tus encías es fundamental para evitar problemas periodontales, entre las que se incluyen enfermedades como la gingivitis y la periodontitis, o incluso la pérdida de los dientes.




                                El principal síntoma de una mala salud en las encías es que tu boca muestra hipersensibilidad a tomar cosas frías o calientes. También pueden llegar a tener mal aliento o una movilidad excesiva de los dientes más o menos 1 milímetro.  
                            </p>
                        </section>

                    </NavLink>
                </main>
           </section>

            <Footer> </Footer>
        
        </>
    )
}

export default Blog