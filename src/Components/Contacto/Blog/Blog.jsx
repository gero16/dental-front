import Footer from "../../Footer/Footer"
import Navbar from "../../Navbar/Navbar"
import "./Blog.css"

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
                <main className="publicaciones flex">
                    <article className="publicacion arcoiris">
                        <img 
                            src="https://clinicajuliansaiz.com/wp-content/uploads/2021/05/protesis-dental-clinica-dental-julian-saiz-01.jpg" 
                            className="img-publicacion"
                            alt="" />
                        <section className="contenido-publicacion">
                            <h2 className="h2-publicacion"> Uso de protesis removibles </h2>
                            <p> La prótesis dental (o estomatológica) removible es un tratamiento dirigido a reemplazar dientes ausentes y las estructuras óseas que se van atrofiando a lo largo del tiempo 
                                tras la pérdida de aquéllos, mediante unos aparatos bucales, portadores de dientes artificiales, que se pueden y deben extraer de la boca para facilitar la limpieza de ésta y de aquéllos. 
                            </p>
                        </section>
                    </article>
                    <article className="publicacion arcoiris">
                        <img 
                            src="https://clinica-udaberri.com/wp-content/uploads/shutterstock_76874668-1.jpg" 
                            className="img-publicacion"
                            alt="" />

                        <section className="contenido-publicacion">
                            <h2 className="h2-publicacion"> Recuperación esmalte dental</h2>
                            <p> La prótesis dental (o estomatológica) removible es un tratamiento dirigido a reemplazar dientes ausentes y las estructuras óseas que se van atrofiando a lo largo del tiempo 
                                tras la pérdida de aquéllos, mediante unos aparatos bucales, portadores de dientes artificiales, que se pueden y deben extraer de la boca para facilitar la limpieza de ésta y de aquéllos. 
                            </p>
                        </section>
                      
                    </article>
                    <article className="publicacion arcoiris">
                        <img 
                            src="https://biosmile.uy/wp-content/uploads/2021/03/295-Sedacion-consciente-adios-al-dolor-Biosmile-Excelencia-Carrasco-Uruguay-1.jpg" 
                            className="img-publicacion"
                            alt="" />
                        <section className="contenido-publicacion"> 
                            <h2 className="h2-publicacion"> Tratamiento odontológico sin dolor</h2>
                            <p> La prótesis dental (o estomatológica) removible es un tratamiento dirigido a reemplazar dientes ausentes y las estructuras óseas que se van atrofiando a lo largo del tiempo 
                                tras la pérdida de aquéllos, mediante unos aparatos bucales, portadores de dientes artificiales, que se pueden y deben extraer de la boca para facilitar la limpieza de ésta y de aquéllos. 
                            </p>
                        </section>

                    </article>

                    <article className="publicacion arcoiris">
                        <img 
                            src="https://centrovillanueva.com/wp-content/uploads/2017/11/alimentos-que-ti%C3%B1en-dientes.jpg" 
                            className="img-publicacion"
                            alt="" />
                        <section className="contenido-publicacion"> 
                            <h2 className="h2-publicacion">  Principales alimentos que tiñen los dientes </h2>
                            <p> El vino tinto y blanco es uno de los grandes enemigos de la estética de los dientes.

                                El tinto es sin duda el que más daño ocasiona a la apariencia de la dentadura debido a su composición de pigmentos naturales, especialmente las antocianinas. Estas sustancias son compuestos orgánicos 
                            </p>
                        </section>

                    </article>

                    <article className="publicacion arcoiris">
                        <img 
                            src="https://www.implantadental.es/images/noticias/1485195650salud-dental-ninos.jpg" 
                            className="img-publicacion"
                            alt="" />
                        <section className="contenido-publicacion"> 
                            <h2 className="h2-publicacion"> Salud Bucal Niños </h2>
                            <p> 
                                Dentición e higiene dental de los niños pequeños

                                Uno de cada 10 niños de 2 años de edad ya tiene una o más caries dentales.

                                A los 3 años de edad, 28 % de los niños tienen una o más caries dentales.

                                A los 5 años de edad, 50 % de los niños tienen una o más caries dentales.
                                                            </p>
                        </section>

                    </article>

                    <article className="publicacion arcoiris">
                        <img 
                            src="https://www.clinicasgallut.com/wp-content/uploads/2022/07/Razones-por-las-que-enferman-las-encias.jpg" 
                            className="img-publicacion"
                            alt="" />
                        <section className="contenido-publicacion"> 
                            <h2 className="h2-publicacion"> La importancia de la salud en las encías </h2>
                            <p>
                                La salud de nuestros dientes depende en gran parte de la salud de las encías.

                                Cuidar tus encías es fundamental para evitar problemas periodontales, entre las que se incluyen enfermedades como la gingivitis y la periodontitis, o incluso la pérdida de los dientes.




                                El principal síntoma de una mala salud en las encías es que tu boca muestra hipersensibilidad a tomar cosas frías o calientes. También pueden llegar a tener mal aliento o una movilidad excesiva de los dientes más o menos 1 milímetro.  
                            </p>
                        </section>

                    </article>
                </main>
           </section>

            <Footer> </Footer>
        
        </>
    )
}

export default Blog