import { Link as Navigate, NavLink,} from "react-router-dom";
import "./Panel.css"
import Navbar from "../../Navbar/Navbar";
import Imagen1 from "../../../../public/campana.png"
import Imagen2 from "../../../../public/calendario.png"
import Imagen3 from "../../../../public/reloj.png"

const Panel = () => {
    return (
        <> 
        <Navbar> </Navbar>

        <section className="section-panel-big fondo-blanco-img flex-column-center text-center gap-30">

            <h1 className="h1-panel verde-principal">Panel de Administración </h1>

            <section className="section-panel-small flex-center-center text-center">

                <NavLink to={`/admin/panel/administrar-publicaciones`} className="div-panel div-panel-1" > 
                    <h2 className="h2-panel h2-panel-1"> Publicaciones </h2>
                    <img src={Imagen1} alt=""  className="img-panel" />
                </NavLink> 

                <NavLink to={`/admin/panel/horas-disponibles`} className="div-panel div-panel-2 text-center" > 
                    <h2 className="h2-panel h2-panel-2">  Horarios </h2>
                    <img src={Imagen3} alt=""  className="img-panel"  />
                </NavLink> 

                <NavLink to={`/admin/panel/agendados`} className="div-panel div-panel-2 text-center" > 
                    <h2 className="h2-panel h2-panel-2"> Agendados  </h2>
                    <img src={Imagen2} alt=""  className="img-panel"  />
                </NavLink> 
            </section>

        </section>
        </>
    )
}


export default Panel