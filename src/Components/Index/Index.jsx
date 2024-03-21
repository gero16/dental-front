import "./Index.css"

import Footer from "../Footer/Footer.jsx"
import ContenidoSaludDental from "./Contenidos/ContenidoSaludDental.jsx"
import ContenidoServicios from "./Contenidos/ContenidoServicios.jsx"
import ContenidoPortada from "./ContenidoPortada/ContenidoPortada.jsx"
import ContenidoInfoConsulta from "./ContenidoInfoConsulta/ContenidoInfoConsulta.jsx"

import ContenidoCliente from "./ContenidoCliente/ContenidoCliente.jsx"
import Ubicacion from "../Ubicacion/Ubicacion.jsx"


const Index = () => {


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

            <Ubicacion> </Ubicacion>

            <Footer> </Footer>
        </>
    )
}

export default Index