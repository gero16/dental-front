import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Publicacion from "./Publicacion";
import "./Publicacion.css"

import { Link as Navigate, NavLink,} from "react-router-dom";

const PublicacionBlog = ({data}) => {
    console.log(data.url)
    
    console.log(data.titulo.length)

    const claseCSS = data.titulo.length < 24 ? 'h2-publicacion-blog' : 'h2-publicacion-blog medium';
    
    return (
        <> 
           <NavLink to={`/blog/publicaciones/${ data.url }`}  className="publicacion-blog arcoiris">
                <img  src={ data.imagen } className="img-publicacion-blog" alt="" />
                <section className="contenido-publicacion-blog"> 
                    <h2 className={ claseCSS }>  { data.titulo } </h2>
                     <p> { data.contenido[0].texto }</p>
                </section>

 
            </NavLink>
        </>
    )
}


export default PublicacionBlog 
