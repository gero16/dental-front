import { useState } from "react";
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Publicacion from "./Publicacion";
import "./Publicacion.css"

import { Link as Navigate, NavLink,} from "react-router-dom";

const PublicacionBlog = ({data}) => {
    //console.log(data)
    
    //console.log(data.contenido[0].texto.length)

    const claseCSS = data.titulo.length < 24 ? 'h2-publicacion-blog' : 'h2-publicacion-blog medium';
    const [width, setWidth] = useState(window.innerWidth);

    let textoPubli = data.contenido[0].texto
    console.log(textoPubli)
    let textoPubli2 =  data.contenido[1].texto
    


       

        function limiteTexto(numero) {
            if (data.contenido.length < 2) {
                return 'La lista debe tener al menos dos elementos';
              }
            
              const primerElemento = data.contenido[0].texto
              let segundoElemento = data.contenido[1].texto
              let contenidoCompleto = '';
            
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
           <NavLink to={`/blog/publicaciones/${ data.url }`}  className="publicacion-blog arcoiris">
                <img  src={ data.imagen } className="img-publicacion-blog" alt="" />
                <section className="contenido-publicacion-blog"> 
                    <h2 className={ claseCSS }>  { data.titulo } </h2>
                    
                

                         <p> { width < 1550 ? limiteTexto(400) :  limiteTexto(600) }</p>
                    
                
                    
                </section>

            </NavLink>
        </>
    )
}


export default PublicacionBlog 
