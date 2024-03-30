import { useParams } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./Publicacion.css"
import { useEffect, useState } from "react"


const Publicacion = ({data}) => {
 const { titulo } = useParams()
 console.log(titulo)


 const [publicacion, setPublicacion] = useState([])
    
    async function fetchPublicacion() {
    try {
        const response = await fetch(`http://localhost:3000/publicaciones/traer-publicacion/${titulo}`); // Cambia la URL según la ruta de tu backend
        if (!response.ok) {
        throw new Error('Error al obtener las publicaciones');
        }
        const data = await response.json();
        console.log(data)
        setPublicacion(data)
        return publicacion; // Devuelve los datos de las publicaciones
    } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
        return null; // Devuelve null si hay un error
    }
    }

      useEffect(() => {
        fetchPublicacion()

        console.log(publicacion.color)
  }, [])

    return (
        <> 
            <Navbar> </Navbar>


                {
                    publicacion && Object.keys(publicacion).length > 0
                    ? <article className="publicacion">
                
                    <section className="flex"> 
                        <img  
                            src={publicacion.imagen} 
                            className="img-publicacion" 
                            alt="" />
    
                        <section className="section-titulo-contenido flex-column-center" style={{backgroundColor : `${publicacion.color}`}}>
                            <h1 className="h1-publicacion"> {publicacion.titulo} </h1>
                        </section>
                        
                    </section>
    
                    <section className="contenido-publicacion flex-column gap-30">
    
               
                        { 
                            publicacion.contenido.length > 0 
                            ? publicacion.contenido.map((element, index) => (
                                <div key={index}>
                                    { element.tipo === 'parrafo' ? (
                                            <p> { element.texto } </p>
                                    ) : element.tipo === 'subtitulo' ? (
                                            <h3> { element.texto } </h3>
                                    ) : element.tipo === 'lista' ? (
                                            <ul className="flex-column gap-20 lista-publicacion">
                                                { 
                                                    element.texto.map((item, itemIndex) => (
                                                        <li key={itemIndex} className="small">
                                                             {item}  
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                    ) : null}
        
                                </div>
                                ))
                            : <p>Cargando...</p>
                        }
    
                       
                                {
                                    /*
                                      <ul className="flex-column gap-30">
                                        <li className="flex-column gap-20">
                                            <h3> Buena higiene bucal </h3> 
                                            <p> Mantener a diario una correcta higiene dental, es la clave para evitar las enfermedades periodontales. Recomendamos cepillar los dientes y encías de 2 a 3 veces al día como mínimo durante 4 minutos. </p>
                                        </li>
                                        <li className="flex-column gap-20">
                                            <h3> Materiales para la limpieza dental </h3> 
                                            <p> Utiliza un cepillo de dientes adecuado y cámbialo cada 3 meses aproximadamente o cuando notes que las cerdas del cepillo pierdan flexibilidad o se abren. </p>
                                            <p> Te aconsejamos que también hagas uso de la seda dental y los cepillos interdentales para que te ayuden a eliminar los restos de alimentos de entre los dientes. También es muy bueno enjuagarnos con un colutorio recomendado por profesionales.</p>
                                        </li>
                                        <li className="flex-column gap-20">
                                            <h3> Revisiones dentales periódicas</h3> 
                                            <p> Tu visita a nuestra clínica dental va a ser la mejor de tus decisiones si quieres prevenir enfermedades bucodentales. Aconsejamos las revisiones cada 6 meses para valorar el estado de las encías. En caso de que las notes inflamadas durante
                                                dos semanas, no deberías esperar a los 6 meses y llama antes de que la inflamación empeore. </p>
                                            <p> Con estos sencillos consejos reducirás al máximo las posibilidades de padecer una enfermedad en las encías y tendrás siempre tu boca perfecta. Además, gracias a tus visitas semestrales a Global System Dental, será muy fácil adelantarnos a cualquier problema dental. </p>
                                        </li>
                                    </ul>

                                    */ 
                                }
                      
                    </section>
                
                </article>
                : <p> Cargando.... </p>    
                }
            
      

            <Footer> </Footer>
        </>
    )
}


export default Publicacion 
