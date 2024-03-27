import "./IndexHeader.css"
import Portada1 from "../../../../public/portada.png"
import Portada2 from "../../../../public/portada-2.jpg"
import Portada3 from "../../../../public/portada-3.jpg"

import logo2 from "../../../../public/logo-2.png"

import Slider from "../../Slider/Slider"

const images = [
    {
      imgUrl: Portada1,
      parrafo: "Bienvenido a la Clinica Odontologica Integral",
      subtitulo: "Agendate con nosotros"
    },
    {
      imgUrl: Portada2,
      parrafo: "Un dentista llega a la raiz del problema",
      subtitulo: "Agendate con nosotros"
    },
    {
        imgUrl: Portada3,
        parrafo: "Sonrie, deja que tus dientes respiren",
        subtitulo: "Atencion Personalizada para cada sonrisa"
      },
  
  ];

const IndexHeader = () => {
    return (
        <> 



                <Slider images={images} autoplayInterval={5000} />

           
        
        </>
    )
}

export default IndexHeader