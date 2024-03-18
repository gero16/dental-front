import "./ContenidoPortada.css"
import Imagen from "../../../../public/portada.png"
const ContenidoPortada = () => {
    return (
        <> 
         <article className="article-portada"> 

                <img src={Imagen} className="portada-img" alt="" />
                <section className="portada-border"></section>
                <section className="portada-texto">
                    <h2 className="width-70"> Un dentista llega a la raiz del problema </h2>
                    <p className="width-70"> Atención personalizada para cada sonrisa </p>
                    <ul className="lista-portada width-70" >
                        <li className="white"> Martes y Jueves 13:00 - 20:00 (Las Piedras) </li>
                        <li className="white"> Sabados 09:00 - 14:00 (Las Piedras) </li>
                        <li className="white"> Miercoles 13:00 - 20:00 (Montevideo) </li>
                    </ul>
                </section>
            </article>
        </>
    )
}

export default ContenidoPortada