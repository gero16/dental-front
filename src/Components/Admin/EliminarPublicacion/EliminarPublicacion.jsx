import { useEffect, useState } from "react";
import "./EliminarPublicacion.css";
import Navbar from "../../Navbar/Navbar";
import { useParams, useNavigate } from "react-router-dom";


const EliminarPublicacion = () => {

    const [publicacion, setPublicacion] = useState({contenido: []});

    const [width, setWidth] = useState(window.innerWidth);

    const navigate = useNavigate()

    const publicacionEliminar = {
        width : 200,
    }



    async function fetchPublicacion() {
        try {
            const response = await fetch(`http://localhost:3000/publicaciones/traer-publicacion/${ idPublicacion }`); // Cambia la URL según la ruta de tu backend
            if (!response.ok) {
            throw new Error('Error al obtener las publicaciones');
            }
            const data = await response.json();
            console.log(data)
            setPublicacion(data)
            console.log(publicacion)
            return publicacion; // Devuelve los datos de las publicaciones
        } catch (error) {
            console.error('Error al obtener las publicaciones:', error);
            return null; // Devuelve null si hay un error
        }
        }
    
    useEffect(() => {
        fetchPublicacion()

        console.log(publicacion)
    }, [])
    
    
    function limiteTexto(numero) {
        if (publicacion.contenido.length < 2) {
            return 'La lista debe tener al menos dos elementos';
          }
        
          const primerElemento = publicacion.contenido[0].texto
          let segundoElemento = publicacion.contenido[1].texto
          let contenidoCompleto = '';

          if (primerElemento.length > numero) {
            const textoLimitado = primerElemento.substring(0, numero);
            contenidoCompleto = textoLimitado;
            return contenidoCompleto;
          }

          if (primerElemento.length < numero) {
            const caracteresRestantes = numero - primerElemento.length;
        
            if (segundoElemento.length < caracteresRestantes && publicacion.contenido.length > 2) {
              const tercerElemento = publicacion.contenido[1].texto;
              segundoElemento += tercerElemento.substring(0, caracteresRestantes - segundoElemento.length);
            }
        
            contenidoCompleto = primerElemento + segundoElemento.substring(0, caracteresRestantes);
          } else {
            contenidoCompleto = primerElemento;
          }

          contenidoCompleto = contenidoCompleto.trim() + '...';
        
          return contenidoCompleto;
    }

    const { idPublicacion } = useParams()  
 
    const borrarPublicacion = async () => {
        
        let response = await fetch(`http://localhost:3000/publicaciones/eliminar-publicacion/${ idPublicacion }`, {
            method: 'DELETE',
        });
          
        let result = await response.json();
        if(result) {
            console.log(result);
        }
    }



    return (
        <> 
            <Navbar />
            <div className="fondo-blanco-img">
                <main className="flex-column-center gap-10">
                    <h1 className="x-large m-10"> ¿Está seguro que desea eliminar esta publicacion ?</h1>

                    <article className="publicacion-blog arcoiris cursor-default">
                        <img  src={ publicacion.imagen } className="img-publicacion-blog" alt="" />
                        <section className="contenido-publicacion-blog"> 
                            <h2 className="medium">  { publicacion.titulo } </h2>
                    
                            <p> { width < 1550 ? limiteTexto(250) :  limiteTexto(350) }</p>

                            <section className="flex-around m-10">
                                <span className="btns-eliminar btn-eliminar-cancelar" onClick={() => navigate("/admin/panel/administrar-publicaciones")}> Volver </span>
                                <span className="btns-eliminar btn-eliminar-confirmar" onClick={() => borrarPublicacion() }> Confirmar </span>
                            </section>
                        </section>

                    </article>
      
                </main>
            </div>
        </>
    )
}

export default EliminarPublicacion;
