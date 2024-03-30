import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Publicacion from "./Publicacion";
import "./Publicacion.css"

import { Link as Navigate, NavLink,} from "react-router-dom";

const PublicacionBlog = ({data}) => {
    console.log(data.url)
    
    console.log(data.contenido[0].texto.length)

    const claseCSS = data.titulo.length < 24 ? 'h2-publicacion-blog' : 'h2-publicacion-blog medium';

   
    const limiteTexto = (texto, longitudMaxima) => {
        // Verificar si el texto es más largo que la longitud máxima
        if (texto.length > longitudMaxima) {
          // Cortar el texto hasta la longitud máxima y agregar puntos suspensivos
          return texto.substring(0, longitudMaxima) + '...';
        } else {
          // Si el texto no es más largo que la longitud máxima, devolver el texto original
          return texto;
        }
    }

    const textoPubli = data.contenido[0].texto

    return (
        <> 
           <NavLink to={`/blog/publicaciones/${ data.url }`}  className="publicacion-blog arcoiris">
                <img  src={ data.imagen } className="img-publicacion-blog" alt="" />
                <section className="contenido-publicacion-blog"> 
                    <h2 className={ claseCSS }>  { data.titulo } </h2>
                     <p> { limiteTexto(textoPubli, 380)}</p>
                </section>

            </NavLink>
        </>
    )
}


export default PublicacionBlog 
