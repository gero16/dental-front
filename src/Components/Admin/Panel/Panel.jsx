import { Link as Navigate, NavLink,} from "react-router-dom";
import "./Panel.css"
import Navbar from "../../Navbar/Navbar";

const Panel = () => {
    return (
        <> 
        <Navbar> </Navbar>
         <section className="section-panel flex-center-center fondo-blanco-img">

            <NavLink to={`/admin/panel/administrar-publicaciones`} className="div-panel text-center" > 
                <h2 className="h2-panel"> Administrar Publicaciones </h2>
                <img 
                    src="https://uem.edu.mx/wp-content/uploads/2021/01/6909-scaled-1024x732.jpg" 
                    alt="" 
                    className="img-panel"
                    />
            </NavLink> 

            <NavLink to={`/admin/panel/horas-disponibles`} className="div-panel text-center" > 
                <h2 className="h2-panel"> Administrar Horas Disponibles  </h2>
                <img 
                    src="https://carrerasymas.com/wp-content/uploads/2022/05/20945988-scaled-1.jpg" 
                    alt="" 
                    className="img-panel"
                    />
            </NavLink> 
         </section>
        </>
    )
}


export default Panel