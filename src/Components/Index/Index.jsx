import "./Index.css"

import Footer from "../Footer/Footer.jsx"
import ContenidoSaludDental from "./Contenidos/ContenidoSaludDental.jsx"
import ContenidoServicios from "./Contenidos/ContenidoServicios.jsx"
import ContenidoPortada from "./ContenidoPortada/ContenidoPortada.jsx"
import ContenidoInfoConsulta from "./ContenidoInfoConsulta/ContenidoInfoConsulta.jsx"
import Mapa from "../Mapa/Mapa.jsx"
import ContenidoCliente from "./ContenidoCliente/ContenidoCliente.jsx"


const Index = () => {
    const ubiTresCruces = [-34.89578868112877, -56.16680986705166]
    const ubiLasPiedras = [-34.7277481203798, -56.21380023171297]

    return (
        <> 
           <ContenidoPortada> </ContenidoPortada>

            <ContenidoServicios> </ContenidoServicios>

            <ContenidoSaludDental> </ContenidoSaludDental>

            <ContenidoInfoConsulta> </ContenidoInfoConsulta>

            <ContenidoCliente> </ContenidoCliente>

            <article className="article-info-consulta2">
                <section> 
                    <h2> LLámenos </h2> 
                    <h2 className="h2-numero"> (598) 94 484 397 </h2>
                    <p> ¡Estamos listos para ayudarlo a lograr una salud bucal increíble! </p>
                </section>
                <section> 
                    <h2> Solicite su cita hoy </h2>
                    <p> Por dudas o consultas </p>
                    <p className="btn-consultar"> <a href="/contacto"> Consultar </a> </p>
                </section>
            </article>


           <section className="section-ubicacion flex-center">
             <article className="flex-column-center">
                <h2 className="h2-clinica"> Clinica - Las Piedras </h2>
                <Mapa ubicacion={ubiLasPiedras} style={[350, 550, 0]}> </Mapa>
             </article>

            <article className="flex-column-center">
                <h2 className="h2-clinica"> Clinica - Tres Cruces </h2>
                <Mapa ubicacion={ubiTresCruces} style={[350, 550, 0]} > </Mapa>

            </article>

            </section>

            <Footer> </Footer>
        </>
    )
}

export default Index