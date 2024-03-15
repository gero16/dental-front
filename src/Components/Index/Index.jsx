import "./Index.css"
import Footer from "../Footer/Footer.jsx"
import Icono1 from "../../../public/icono-1.png"
import Icono2 from "../../../public/icono-2.png"
import Icono3 from "../../../public/icono-3.png"

const Index = () => {
    return (
        <> 
            <article className="portada">
                
            </article>

            <article className="contenido-servicios container">

                <section className="contenido-servicio"> 
                    <h2> En un ambiente Comodo y Relajante, Puede Aprovechar una Gran Cantidad de Servicios </h2> 
                </section>

                <section  className="contenido-servicio flex"> 
                    <img src={Icono1} className="icono-servicio" alt="" />  
                    <section className="contenido-servicios"> 
                        <h3> General </h3>
                        <p> Optimice la salud de todo su cuerpo con nuestro exclusivo examen dental holístico. Otras opciones de tratamiento de odontología general incluyen… </p>
                    </section> 
                </section>

                <section  className="contenido-servicio flex"> 
                    <img src={Icono2} className="icono-servicio" alt="" />  
                    <section className="contenido-servicios"> 
                        <h3> Cosmético </h3>
                        <p> ¡Te mereces una sonrisa que te encanta presumir! Nuestros servicios de odontología cosmética mínimamente invasivos producen resultados sorprendentes. Escoge de… </p>
                    </section> 
                </section>

                <section  className="contenido-servicio flex"> 
                    <img src={Icono3} className="icono-servicio" alt="" />  
                    <section className="contenido-servicios"> 
                        <h3> Periodontal </h3>
                        <p> ¡Tu cuerpo está diseñado para la salud! Podemos ayudarlo a revertir la enfermedad de las encías y lograr resultados sin cirugía invasiva o tratamientos dolorosos... </p>
                    </section> 
                </section>
        
            </article>

            <article className="contenido-salud-dental container">
                <section className=""> 
                    <h2> ¿Por qué es importante la salud dental? </h2>
                    <p> Nuestros dientes tienen un papel tan importante que desempeñar en nuestras vidas. Nos ayudan a masticar y digerir los alimentos, nos ayudan a hablar y hablar con claridad y también le dan forma a nuestra cara. </p>
                </section>
                <section>
                    <div> 
                        <h3> Conservar los dientes de por vida </h3> 
                        <p> Al cepillarnos los dientes dos veces al día, mantener una dieta baja en azúcar y visitar regularmente a nuestro profesional dental, podemos ayudar a reducir el riesgo de enfermedades como la caries dental y la enfermedad de las encías, las cuales pueden provocar la pérdida de dientes. </p> 
                    </div>
                    <div> 
                        <h3> Conservar los dientes de por vida </h3> 
                        <p> Al cepillarnos los dientes dos veces al día, mantener una dieta baja en azúcar y visitar regularmente a nuestro profesional dental, podemos ayudar a reducir el riesgo de enfermedades como la caries dental y la enfermedad de las encías, las cuales pueden provocar la pérdida de dientes. </p> 
                    </div>
                    <div> 
                        <h3> Conservar los dientes de por vida </h3> 
                        <p> Al cepillarnos los dientes dos veces al día, mantener una dieta baja en azúcar y visitar regularmente a nuestro profesional dental, podemos ayudar a reducir el riesgo de enfermedades como la caries dental y la enfermedad de las encías, las cuales pueden provocar la pérdida de dientes. </p> 
                    </div>
                    <div> 
                        <h3> Conservar los dientes de por vida </h3> 
                        <p> Al cepillarnos los dientes dos veces al día, mantener una dieta baja en azúcar y visitar regularmente a nuestro profesional dental, podemos ayudar a reducir el riesgo de enfermedades como la caries dental y la enfermedad de las encías, las cuales pueden provocar la pérdida de dientes. </p> 
                    </div>
                    <div> 
                        <h3> Conservar los dientes de por vida </h3> 
                        <p> Al cepillarnos los dientes dos veces al día, mantener una dieta baja en azúcar y visitar regularmente a nuestro profesional dental, podemos ayudar a reducir el riesgo de enfermedades como la caries dental y la enfermedad de las encías, las cuales pueden provocar la pérdida de dientes. </p> 
                    </div>
                    <div> 
                        <h3> Conservar los dientes de por vida </h3> 
                        <p> Al cepillarnos los dientes dos veces al día, mantener una dieta baja en azúcar y visitar regularmente a nuestro profesional dental, podemos ayudar a reducir el riesgo de enfermedades como la caries dental y la enfermedad de las encías, las cuales pueden provocar la pérdida de dientes. </p> 
                    </div>
                </section>
            </article>

            <article className="article-info-consulta">
            
                <section className="contenido-info-consulta">  
                    <span>CONSULTA GRATUITA DE 15 MINUTOS </span> 
                    <h2> Cada nueva paciente recibe chequeo y limpieza </h2>
                    <ul className="lista-info-consulta flex-column">
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

            <article className="contenido-4">
                
            </article>

            <article className="article-info-consulta2 container">
                <section> 
                    <h2> LLámenos </h2> 
                    <h2> (598)94484397 </h2>
                    <p> ¡Estamos listos para ayudarlo a lograr una salud bucal increíble! </p>
                </section>
                <section> 
                    <h2> Solicite su cita hoy </h2>
                    <p> Por dudas o consultas </p>
                </section>
            </article>

            <Footer> </Footer>
        </>
    )
}

export default Index