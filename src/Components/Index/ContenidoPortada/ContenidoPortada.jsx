import "./ContenidoPortada.css"
import Imagen from "../../../../public/portada.png"
const ContenidoPortada = () => {
    return (
        <> 
         <article className="article-portada"> 

                <img src={Imagen} className="portada" alt="" />
                <section className="portada-border"></section>
                <section className="portada-texto">
                    <h2> Un dentista llega a la raiz del problema </h2>
                    <p> Atención personalizada para cada sonrisa hermosas </p>
                    <ul className="lista-portada" >
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