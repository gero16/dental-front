import { useState } from "react";
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Publicacion from "./Publicacion";
import "./Publicacion.css"
import { Link as Navigate, NavLink, useNavigate,} from "react-router-dom";

const PublicacionBlog = ({data}) => {
    
    const claseCSS = data.titulo.length < 24 ? 'h2-publicacion-blog' : 'h2-publicacion-blog medium';
    const [width, setWidth] = useState(window.innerWidth);
    
    function limiteTexto(numero) {
            if (data.contenido.length < 2) {
                return 'La lista debe tener al menos dos elementos';
              }
            
              const primerElemento = data.contenido[0].texto
              let segundoElemento = data.contenido[1].texto
              let contenidoCompleto = '';

              if (primerElemento.length > numero) {
                const textoLimitado = primerElemento.substring(0, numero);
                contenidoCompleto = textoLimitado;
                return contenidoCompleto;
              }
 
              if (primerElemento.length < numero) {
                const caracteresRestantes = numero - primerElemento.length;
            
                if (segundoElemento.length < caracteresRestantes && data.contenido.length > 2) {
                  const tercerElemento = data.contenido[1].texto;
                  segundoElemento += tercerElemento.substring(0, caracteresRestantes - segundoElemento.length);
                }
            
                contenidoCompleto = primerElemento + segundoElemento.substring(0, caracteresRestantes);
              } else {
                contenidoCompleto = primerElemento;
              }

              contenidoCompleto = contenidoCompleto.trim() + '...';
            
              return contenidoCompleto;
    }

    return (
        <> 

      
       <NavLink to={`/blog/publicaciones/${data.id}`} className="publicacion-blog arcoiris">
          <img  src={ data.imagen } className="img-publicacion-blog" alt="" />
          <section className="contenido-publicacion-blog"> 
            <h2 className={ claseCSS }>  { data.titulo } </h2>
      
            <p> { width < 1550 ? limiteTexto(450) :  limiteTexto(600) }</p>
         </section>

      </NavLink>
      
        
        </>
    )
}


export default PublicacionBlog 
