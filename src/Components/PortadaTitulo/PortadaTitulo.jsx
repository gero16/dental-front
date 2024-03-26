const PortadaTitulo = ({titulo, subtitulo, color }) => {

    return (
        <> 
           <section className="portada-noticias flex" >
                <section className="noticias-portada-texto flex-column-center" style={{backgroundColor: color}}>
                    <h1 className="h1-noticias"> {titulo} </h1>
                    <p> {subtitulo} </p>
                </section>
            </section>
        </>
    )
}

export default PortadaTitulo