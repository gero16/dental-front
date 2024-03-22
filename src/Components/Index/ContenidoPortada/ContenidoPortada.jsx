import "./ContenidoPortada.css"
import Portada1 from "../../../../public/portada.png"
import Portada2 from "../../../../public/portada-2.jpg"
import logo2 from "../../../../public/logo-2.png"

const ContenidoPortada = () => {
    return (
        <> 

         <article className="article-portada"> 

                <img src={Portada2} className="portada-img" alt="" />
                {
                    /*  
                    Portada1 Usa este imagen con un borde
                    <section className="portada-border"></section> 
                    */ 
                }
              
                <section className="portada-texto">
                    <h2 className="h2-portada-texto width-70"> Un dentista llega a la raiz del problema </h2>
                    <p className="width-70 p-portada-texto"> Atención personalizada para cada sonrisa </p>
                    <ul className="lista-portada width-70" >
                        <li className="white li-portada-texto"> Martes y Jueves 13:00 - 20:00 (Las Piedras) </li>
                        <li className="white  li-portada-texto"> Miercoles 13:00 - 20:00 (Montevideo) </li>
                        <li className="white  li-portada-texto"> Sabados 09:00 - 14:00 (Las Piedras) </li>
                    </ul>
                <img src={logo2} className="logo-2-portada" alt="" />
                </section>
            </article>
        </>
    )
}

export default ContenidoPortada