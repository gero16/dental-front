import { useState } from "react";
import Navbar from "../../Navbar/Navbar"

import { Link as Navigate, NavLink,} from "react-router-dom";
import { useEffect } from "react";

import "./AdminPublicaciones.css"
import { FaEdit  } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import Loader from "../../Loader/Loader";
import Imagen from "../../../../public/sonrisa-3.jpg";



const AdminPublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([])

    const [width, setWidth] = useState(window.innerWidth);

    const formatearTitulo = (titulo) => {
      if(titulo.split(" ")) {
          let tituloURL = titulo.toLowerCase().replaceAll(" ","-")
          console.log(tituloURL)
          return tituloURL
      }
  }
    
    async function fetchPublicaciones() {
        try {
          const response = await fetch('http://localhost:3000/publicaciones/traer-publicaciones'); // Cambia la URL según la ruta de tu backend
          if (!response.ok) {
            throw new Error('Error al obtener las publicaciones');
          }
          const data = await response.json();
          console.log(data.publicaciones)
          setPublicaciones(data.publicaciones)
          return publicaciones; // Devuelve los datos de las publicaciones
        } catch (error) {
          console.error('Error al obtener las publicaciones:', error);
          return null; // Devuelve null si hay un error
        }
      }
      
      useEffect(() => {
            fetchPublicaciones()
            
            console.log(publicaciones)
      }, [])

      function limiteTexto(numero, data) {
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
      
     

    console.log("Publicaciones:", publicaciones);
    return (

        <> 

            <Navbar> </Navbar>

            <section className="portada-noticias flex">
                <section className="noticias-portada-texto flex-column-center">
                    <h1 className="h1-noticias"> Administrar Publicaciones </h1>
                    <p> Lea nuestras publicaciones y únase a la conversación. </p>
                </section>
           
                </section>

            
            <section className="fondo-blanco-img">
              <main className="publicaciones-blog flex">

                <NavLink to={`/admin/panel/crear-publicacion`} className="publicacion-blog arcoiris article-crear" > 
                    <section className="section-admin-crear flex-around gap-10">

                      <div className="bg">
                        <h2 className="brand-logo h2-crear-admin"> Crear Publicación </h2>
                      </div>
                      
                      <section className="flex-column bg gap-5">
                        <p className="brand-logo-2 x-large"> Cree una publicacion para añadir al Blog.</p>
                          <span className="brand-logo-2 bold large"> Requisitos Mínimos : </span>
                        <ul className="small brand-logo-2 ">
                          <li>-  Subir Imagen </li>
                          <li> - Titulo </li>
                          <li> - Un Parrafo  </li>
                        </ul>
                      </section>

                    </section>
            
                

                      
      
                  </NavLink>


                { publicaciones.length > 0 
                  ? publicaciones.map((element, key) => {
                    return (
                    
                        <NavLink to={`/blog/publicaciones/${ element.id }`} className="publicacion-blog arcoiris" >  
                            <img 
                                src={element.imagen} 
                                className="img-publicacion-blog"
                                alt="" />
                            <section className="contenido-publicacion-blog">

                                <h2 className="h2-publicacion-blog medium"> { element.titulo }</h2>
                              
                                {
                                  element.contenido[0].tipo === "lista" ? (
                                      <ul>
                                          { 
                                            element.contenido[0].texto.map((item, index) => (
                                              <li className="small" key={index}>{item}</li>
                                            ))
                                          }
                                      </ul>
                                  ) : (
                                  
                                      <p className="contenido-publicacion-blog"> { width < 1550 ? limiteTexto(200, element) :  limiteTexto(300, element) }</p>
                                  )
                              }
                                
                               
                            <section className="eventos-publicacion flex-around">

                          
                             
                              <NavLink 
                                to={`/admin/panel/admin-publicaciones/editar-publicacion/${ element.id }`} 
                                className="btn-eventos-publicacion btn-editar-publi flex-center-center gap-5 " >  
                              
                                <span> Editar</span> 
                                <FaEdit size={20} /> 
                           
                     
                              </NavLink>
                    
                              <NavLink 
                                to={`/admin/panel/admin-publicaciones/eliminar-publicacion/${ element.id }`}
                              className="btn-eventos-publicacion btn-eliminar-publi flex-center-center"
                              >
                              
                                <span> Borrar </span> 
                                <FaEdit size={28} /> 
                              </NavLink>
                          
                            </section>
                            </section>
                        
                        </NavLink>
                                  
                
                    )
                  })
                  
                : <section className="flex-column-center container"> 
                    <Loader> </Loader>
                </section> 
              
              }
            
              </main>
            </section>
                        
                        
         
        </>
    )
}

export default AdminPublicaciones