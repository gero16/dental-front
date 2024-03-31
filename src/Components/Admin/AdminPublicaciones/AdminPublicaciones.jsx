import { useState } from "react";
import Navbar from "../../Navbar/Navbar"

import { Link as Navigate, NavLink,} from "react-router-dom";
import { useEffect } from "react";

import "./AdminPublicaciones.css"
import { FaEdit  } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";



const AdminPublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([])

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

                <NavLink to={`/admin/panel/crear-publicacion`} > 
                  <span className="span-link "> Crear Publicacion </span>
                </NavLink>



            <section className="fondo-blanco-img">
              <main className="publicaciones-blog flex">
                { publicaciones.length > 0 
                  ? publicaciones.map((element, key) => {
                    console.log(element)
                    const tituloURL = formatearTitulo(element.titulo)
                    console.log(tituloURL)
                    return (
                    
      
                        <NavLink to={`/blog/publicaciones/${ tituloURL }`} className="publicacion-blog arcoiris" >  
                            <img 
                                src={element.imagen} 
                                className="img-publicacion-blog"
                                alt="" />
                            <section className="contenido-publicacion-blog">

                                <h2 className="h2-publicacion-blog"> { element.titulo }</h2>
                              
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
                                      <p className="contenido-publicacion-blog">{element.contenido[0].texto}</p>
                                  )
                              }
                                
                               
                            <section className="eventos-publicacion flex-around">

                          
                             
                              <NavLink 
                                to={`/admin/panel/admin-publicaciones/editar-publicacion/${ tituloURL }`} 
                                className="btn-eventos-publicacion btn-editar-publi flex-center-center gap-5 " >  
                              
                                <span> Editar</span> 
                                <FaEdit size={20} /> 
                           
                     
                              </NavLink>
                    
                              <NavLink 
                                to={`/admin/panel/admin-publicaciones/eliminar-publicacion/${ tituloURL }`}
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
                  
                : <> </> 
              
              }
            
              </main>
            </section>
                        
                        
         
        </>
    )
}

export default AdminPublicaciones