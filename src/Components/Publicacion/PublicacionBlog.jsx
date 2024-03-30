import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./Publicacion.css"

import { Link as Navigate, NavLink,} from "react-router-dom";

const PublicacionBlog = ({data}) => {
    console.log(data.contenido)
    return (
        <> 
           <NavLink className="publicacion-blog arcoiris">
                <img 
                    src={data.imagen} 
                    className="img-publicacion-blog"
                    alt="" />
                <section className="contenido-publicacion-blog"> 
                    <h2 className="h2-publicacion-blog">  { data.titulo } </h2>
                     <p> {data.contenido[0].texto}</p>
                </section>

            </NavLink>
        </>
    )
}


export default PublicacionBlog 
