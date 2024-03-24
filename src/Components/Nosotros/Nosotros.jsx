import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Nosotros.css"
import FondoBlanco from "/fondo-blanco.jpg"

const Nosotros = () => {
    return (
        <> 
            <Navbar> </Navbar>

            <main className="main-nosotros">

                <section className="flex-center section-portada-nosotros">
                    <img src="https://res.cloudinary.com/geronicola/image/upload/v1711304193/general-it/o2bkoy9n2g2uvt1xcnc2.png" className="portada-nosotros" alt="" />
                </section>

                <section className="section-nosotros-texto m-auto flex-column">
              
                    <h1 className="h1-nosotros width-70 m-auto"> Nosotros </h1> 
                     <p className="width-70 m-auto"> En Global System Dental brindamos`una atención odontológica integral, priorizando la salud y el bienestar de nuestros pacientes, desde niños hasta adultos mayores.
                    Con 40 años de experiencia profesional, el Dr Rafael Pérez ofrece una atención personalizada desde el inicio hasta el final de tratamiento, abarcando todas las áreas que comprende un tratamiento odontológico. Además, contamos con tecnología de última generación
                    Ahora lo sabes, si estás en busca de mejorar tu sonrisa, ¡no dudes en contactarnos! </p>
                </section>


            
                <section className="tecnologias-nosotros m-auto flex-column">
                    <h2 className="h2-tecnologias-utilizadas width-70 m-auto"> Tecnologias que utilizamos </h2>
                    <ul className="width-70 m-auto flex-column ul-nosotros">
                        <li className="li-nosotros flex-column">
                            <h3> 3D Computerizado CAD/CAM </h3>
                            <p> Se toma una impresión digital de sus dientes. Con la tecnología de diseño asistido por computadora creamos la nueva restauración en menos de 2 horas </p>
                        </li>
                        <li className="li-nosotros flex-column">
                            <h3> Cámaras intraorales </h3>
                            <p> Una cámara intraoral nos permite investigar tu boca y mostrarte exactamente lo que está pasando </p>
                        </li>
                        <li className="li-nosotros flex-column">
                            <h3> Implantes digitales </h3>
                            <p> determinar la ubicación de su tejido óseo y nervios para que podamos completar el procedimiento de manera más efectiva y eficiente. </p>
                        </li>
              

               
                        <li className="li-nosotros flex-column">
                            <h3> ¡Zoom! Blanqueamiento dental </h3>
                            <p> Puede blanquear tus dientes hasta ocho tonos en una sola aplicación. </p>
                        </li>
                        <li className="li-nosotros flex-column">
                            <h3> Láseres dentales </h3>
                            <p> Un haz de luz concentrado corta, coagula y vaporiza simultáneamente el tejido con total exactitud y precisión. </p>
                        </li>
                        <li className="li-nosotros flex-column">
                            <h3> Radiografías digitales </h3>
                            <p> Estas unidades son más seguras que las unidades de rayos X tradicionales ya que utilizan menos radiación. </p>
                        </li>
                    </ul>
                </section>

            </main>

            <Footer> </Footer>

        </>
    )
}

export default Nosotros