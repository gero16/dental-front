import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./Publicacion.css"

const Publicacion = () => {
    return (
        <> 
            <Navbar> </Navbar>
            <article className="publicacion">
                
                <section className="flex"> 
                    <img  
                        src="https://clinicajuliansaiz.com/wp-content/uploads/2021/05/protesis-dental-clinica-dental-julian-saiz-01.jpg" 
                        className="img-publicacion" 
                        alt="" />

                    <section className="section-titulo-contenido flex-column-center">
                        <h1 className="h1-publicacion"> La importancia de la salud en las encías </h1>
                    </section>
                    
                </section>

                <section className="contenido-publicacion flex-column gap-30">
                    <p> La salud de nuestros dientes depende en gran parte de la salud de las encías. </p>
                    <p> Cuidar tus encías es fundamental para evitar problemas periodontales, entre las que se incluyen enfermedades como la gingivitis y la periodontitis, o incluso la pérdida de los dientes. </p>
                    <p> El principal síntoma de una mala salud en las encías es que tu boca muestra hipersensibilidad a tomar cosas frías o calientes. También pueden llegar a tener mal aliento o una movilidad excesiva de los dientes más o menos 1 milímetro. </p>
                
                    <h3> Razones por las que enferman las encías </h3>
                    <p> La principal razón por lo que tus encías pueden enfermar, es debido a la acumulación de bacterias sobre los dientes, lo que se conoce como placa bacteriana. Esta se empieza a depositar en el espacio que existe entre los dientes y las encías, conocido como surco gingival, provocando sangrado e inflamació</p>
                    <p>  Si no se toman medidas, las propias toxinas de las bacterias siguen su actividad, provocando enfermedades periodontales que, cuando se profundizan, pueden terminar con la salud del hueso de la boca, provocando también la caída de alguna pieza dental.</p>
                    <p> Esta enfermedad tiene daños irreversibles, de ahí la importancia de que sigas leyendo este post para aprender a llevar una correcta salud bucodental. </p>
                
                    <h3> ¿Cuándo se tienen unas encías sanas? </h3>
                
                    <p> Tus encías tienen salud cuando muestran un color rosa pálido, no están inflamadas y su aspecto es parecido al de la piel de una naranja. </p>

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
                </section>
            
            </article>

            <Footer> </Footer>
        </>
    )
}


export default Publicacion 
