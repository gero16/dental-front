import "./Index.css"

import Footer from "../Footer/Footer.jsx"
import ContenidoSaludDental from "./Contenidos/ContenidoSaludDental.jsx"
import ContenidoServicios from "./Contenidos/ContenidoServicios.jsx"
import ContenidoConsulta from "./Contenidos/ContenidoConsulta.jsx"
import ContenidoPortada from "./ContenidoPortada/ContenidoPortada.jsx"



const Index = () => {

    return (
        <> 
           <ContenidoPortada> </ContenidoPortada>

            <ContenidoServicios> </ContenidoServicios>

            <ContenidoSaludDental> </ContenidoSaludDental>

            <ContenidoConsulta> </ContenidoConsulta>

            <article className="contenido-clientes container">
                <h3> ¡Esto es lo que los pacientes tienen que decir sobre la Clínica! </h3>
                <p> “Siempre es una sensación cálida y cómoda cuando entro en la oficina del Dr. ¡No solo tiene conocimientos de odontología, sino que también es una 
                    persona increíble para conocer!” 
                </p>
                <p> -Christie S. </p>

            </article>

            <article className="article-info-consulta2">
                <section> 
                    <h2> LLámenos </h2> 
                    <h2 className="h2-numero"> (598)94484397 </h2>
                    <p> ¡Estamos listos para ayudarlo a lograr una salud bucal increíble! </p>
                </section>
                <section> 
                    <h2> Solicite su cita hoy </h2>
                    <p> Por dudas o consultas </p>
                </section>
            </article>

            <Footer> </Footer>
        </>
    )
}

export default Index