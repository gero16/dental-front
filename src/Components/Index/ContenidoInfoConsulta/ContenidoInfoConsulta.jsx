import { useState } from "react"

import Imagen from "../../../../public/borde.jpg"
import "./ContenidoInfoConsulta.css"
import logo2 from "../../../../public/logo-2.png"

import Icono from "../../../../public/diente-t.webp"

const ContenidoInfoConsulta = () => {

    return (
        <>
           <article className="article-info-consulta">

            <section className="contenido-info-consulta">  
                <div className="container">
                    <span className="white consulta-gratis">CONSULTA GRATUITA DE 15 MINUTOS </span> 
                    <h2 className="white h2-contenido-consulta"> Cada nueva paciente recibe chequeo y limpieza </h2>
                    <ul className="lista-info-consulta flex-column">
                        <li> Evaluación de la enfermedad de las encías </li>
                        <li> Evaluación del riesgo de caries dental </li>
                        <li> Evaluación de su mordida y equilibrio esquelético </li>
                        <li> Blanqueamientos </li> 
                        <li> Limpieza </li> 
                        <li> Implantes </li> 
                    </ul>  

                    {
                       /*  <img src={logo2} className="logo-2 logo-der" alt="" />  */
                    }
              
                </div>
            </section>
        
            <section className="imagen-info-consulta">
            </section>
       
           
        </article>

        </>
    )
}

export default ContenidoInfoConsulta