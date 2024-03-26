import Navbar from "../../Navbar/Navbar"

import { Link as Navigate, NavLink,} from "react-router-dom";

const AdminPublicaciones = () => {
    return (

        <> 

            <Navbar> </Navbar>

            <h1> Admin Publicaciones </h1> 

            <NavLink to={`/admin/panel/crear-publicacion`} > 
                <span className="span-link "> Crear Publicacion </span>
            </NavLink>
        </>
    )
}

export default AdminPublicaciones