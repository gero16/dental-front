import "./ContenidoCliente.css"

const ContenidoCliente = () => {

    return (
        <>
          <article className="contenido-clientes container">
                <h3> ¡Esto es lo que los pacientes tienen que decir sobre la Clínica! </h3>
                <section className="contenido-cliente">
                    <p> “Siempre es una sensación cálida y cómoda cuando entro en la oficina del Dr. ¡No solo tiene conocimientos de odontología, sino que también es una 
                        persona increíble para conocer!” 
                    </p>
                    <p> -Christie S. </p>
                </section>

                
                
                <section className="contenido-cliente none">
                    <p> “Es el mejor dentista al que he ido, se preocupa por sus pacientes.”  </p>
                    <p> -Laura M. </p>
                </section>

                <section className="contenido-cliente none">
                    <p> Los dientes de Jennifer estaban rotos, tenían esmalte defectuoso y estaban muy torcidos. Los frenos se los enderezaron, luego se colocaron 2 carillas para 
                        darle la sonrisa que siempre quiso para ella. </p>
                    <p> -Laura M. </p>
                </section>

                 
                <ul class="menu ">
                    <li>
                    <a href="#slide1"> </a>
                    </li>
                    <li>
                    <a href="#slide2"> </a>
                    </li>
                    <li>
                    <a href="#slide3"> </a>
                    </li>
                </ul>

                <section className="portada-color"> </section>
            </article>


        </>
    )
}

export default ContenidoCliente