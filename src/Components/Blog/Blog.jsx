import "./Blog.css"
import Footer from "../Footer/Footer.jsx"
import Navbar from "../Navbar/Navbar.jsx"
import { Link as Navigate, NavLink,} from "react-router-dom";
import Publicacion from "../Publicacion/Publicacion.jsx";
import { useEffect, useState } from "react";
import PublicacionBlog from "../Publicacion/PublicacionBlog.jsx";
import Loader from "../Loader/Loader.jsx"
//import "../../Loader/Loader.css"

const Blog = () => {
    const [publicaciones, setPublicaciones] = useState([])

    
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

    

    return (
        <> 
            <Navbar> </Navbar>
            
            <section className="portada-noticias flex">
                <section className="noticias-portada-texto flex-column-center">
                    <h1 className="h1-noticias"> Noticias </h1>
                    <p> Lea nuestras publicaciones y únase a la conversación. </p>
                </section>
           
            </section>
           
           <section className="fondo-blanco-img">
                <main className="flex-column publicaciones-blog">

                { publicaciones.length > 0 
                    ? publicaciones.map((element, index) => (
                    
                        <PublicacionBlog data={element}> </PublicacionBlog>
                     
                        ))
                    : <section className="flex-column-center container"> 
                        <Loader> </Loader>
                    </section>
                }
 

                </main>
           </section>

            <Footer> </Footer>
        
        </>
    )
}

export default Blog