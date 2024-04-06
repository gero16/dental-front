import { Link as Navigate, NavLink,} from "react-router-dom";
import "./Panel.css"
import Navbar from "../../Navbar/Navbar";

const Panel = () => {
    return (
        <> 
        <Navbar> </Navbar>

        <section className="section-panel-big fondo-blanco-img flex-center-center">

            <section className="section-panel-small flex-center-center">

                <NavLink to={`/admin/panel/administrar-publicaciones`} className="div-panel text-center" > 
                    <h2 className="h2-panel h2-panel-1"> Administrar Publicaciones </h2>
                    <img 
                        src="https://uem.edu.mx/wp-content/uploads/2021/01/6909-scaled-1024x732.jpg" 
                        alt="" 
                        className="img-panel"
                        />
                </NavLink> 

                <NavLink to={`/admin/panel/horas-disponibles`} className="div-panel text-center" > 
                    <h2 className="h2-panel h2-panel-2"> Administrar Horas Disponibles  </h2>
                    <img 
                        src="https://carrerasymas.com/wp-content/uploads/2022/05/20945988-scaled-1.jpg" 
                        alt="" 
                        className="img-panel"
                        />
                </NavLink> 
            </section>

        </section>
        </>
    )
}


export default Panel