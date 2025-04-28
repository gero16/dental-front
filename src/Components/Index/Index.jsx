import "./Index.css"

import Footer from "../Footer/Footer.jsx"
import IndexSaludDental from "./Contenidos/IndexSaludDental.jsx"
import IndexServicios from "./Contenidos/IndexServicios.jsx"
import IndexHeader from "./IndexHeader/IndexHeader.jsx"
import IndexInfoConsulta from "./IndexInfoConsulta/IndexInfoConsulta.jsx"

import IndexOpinionCliente from "./IndexOpinionCliente/IndexOpinionCliente.jsx"
import Ubicacion from "../Ubicacion/Ubicacion.jsx"
import Ubicaciones from "../Ubicacion/Ubicaciones.jsx"

import whatsapp from "../../../public/whatsapp.png"
import { Link as Navigate, NavLink, useLocation ,} from "react-router-dom";
import Whatsapp from "../Whatsapp/Whatsapp.jsx"


const Index = () => {


    return (
        <> 

        <section className="fondo-blanco-img">
            <IndexHeader> </IndexHeader>

        
            <IndexServicios> </IndexServicios> 
        {
            /* 
             <IndexSaludDental> </IndexSaludDental>

            <IndexInfoConsulta> </IndexInfoConsulta>

            
            <IndexOpinionCliente> </IndexOpinionCliente>
            */
        }
           


            <article className="article-info-consulta2 flex-column-center gap-20 text-center">

                <section className="flex-column gap-30"> 
                    <section className="sections-info-consulta2 br p-20"> 
                        <h2 className="info-consulta2-h2"> LLámenos </h2> 
                        <h2 className="h2-numero info-consulta2-h2"> (598) 94 484 397 </h2>
                        <p> ¡Estamos listos para ayudarlo a lograr una salud bucal increíble! </p>
                    </section>

                    <section className="sections-info-consulta2 br p-20"> 
                        <h2 className="info-consulta2-h2"> Solicite su cita hoy </h2>
                        <p> Por dudas o consultas </p>
                        <p className="btn-consultar"> <a href="/contacto"> Consultar </a> </p>
                    </section>

                </section>

                <Ubicaciones> </Ubicaciones>
            </article>


            <Whatsapp> </Whatsapp>

            <Footer> </Footer>
        </section>
      
        </>
    )
}

export default Index