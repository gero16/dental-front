import { useState } from "react"
import Icono1 from "../../../../public/icono-1.png"
import Icono2 from "../../../../public/icono-2.png"
import Icono3 from "../../../../public/icono-3.png"
import Icono4 from "../../../../public/icono1.jpg"
import Icono5 from "../../../../public/icono2.jpg"
import Icono6 from "../../../../public/icono3.jpg"

import "./IndexServicios.css"


const IndexServicios = () => {

    return (
        <>
          
          <article className="contenido-servicios container">

                <section className="titulo-servicio"> 
                    <h2>  En un ambiente cómodo y relajante, puede aprovechar una gran cantidad de servicios </h2> 
                </section>

                <section  className="contenido-servicio flex arcoiris"> 
                    <img src={Icono4} className="icono-servicio" alt="" />  
                    <section className="texto-servicio"> 
                        <h3> General </h3>
                        <p> Optimice la salud de todo su cuerpo con nuestro exclusivo examen dental holístico. Otras opciones de tratamiento de odontología general incluyen… </p>
                    </section> 
                </section>

                <section  className="contenido-servicio flex arcoiris"> 
                    <img src={Icono5} className="icono-servicio" alt="" />  
                    <section className="texto-servicio"> 
                        <h3> Cosmético </h3>
                        <p> ¡Te mereces una sonrisa que te encanta presumir! Nuestros servicios de odontología cosmética mínimamente invasivos producen resultados sorprendentes. Escoge de… </p>
                    </section> 
                </section>

                <section  className="contenido-servicio flex arcoiris"> 
                    <img src={Icono6} className="icono-servicio" alt="" />  
                    <section className="texto-servicio"> 
                        <h3> Periodontal </h3>
                        <p> ¡Tu cuerpo está diseñado para la salud! Podemos ayudarlo a revertir la enfermedad de las encías y lograr resultados sin cirugía invasiva o tratamientos dolorosos... </p>
                    </section> 
                </section>

            </article>


        </>
    )
}

export default IndexServicios