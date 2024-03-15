import { useState } from "react"


const ContenidoConsulta = () => {

    return (
        <>
           <article className="article-info-consulta">
            
            <section className="contenido-info-consulta ">  
                <span className="container">CONSULTA GRATUITA DE 15 MINUTOS </span> 
                <h2 className="container"> Cada nueva paciente recibe chequeo y limpieza </h2>
                <ul className="lista-info-consulta flex-column container">
                    <li> Evaluación de la enfermedad de las encías </li>
                    <li> Evaluación del riesgo de caries dental </li>
                    <li> Evaluación de su mordida y equilibrio esquelético </li>
                    <li> Blanqueamientos </li> 
                    <li> Limpieza </li> 
                    <li> Implantes </li> 
                </ul>   
            </section>
        
            <section className="imagen-info-consulta">
                
            </section>
       
           
        </article>

        </>
    )
}

export default ContenidoConsulta