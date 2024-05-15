import "./IndexHeader.css"
import Portada1 from "../../../../public/108313.jpg"
import Portada2 from "../../../../public/portada-2.jpg"
import Portada3 from "../../../../public/portada-3.jpg"
import Slider from "../../Slider/Slider"

import { Fade, Slide } from "react-awesome-reveal";
import { useState } from "react"


 
const IndexHeader = () => {

  const images = [
    {
      numero : 1,
      imgUrl: Portada1,
      imgMid: "",
      imgBig: "",
      subtitulo: "Agendate hoy con nosotros!",
      parrafo: "Bienvenido a la Clinica Odontologica Integral",
      id: "",
      className : "img-portada-1",
      logo: "logo-portada-1"
    },
    {
      numero: 2,
      imgUrl: Portada2,
      imgMid: "",
      imgBig: "",
      subtitulo: "Agendate hoy con nosotros!",
      parrafo: "Un dentista llega a la raiz del problema",
      id: "",
      logo: "logo-portada-2"
    },
    {
        numero: 3,
        imgUrl: Portada3,
        imgMid: "",
        imgBig: "",
        subtitulo: "Atencion Personalizada para cada sonrisa",
        parrafo: "Sonrie, deja que tus dientes respiren",
        id: "",
        logo: "logo-portada-3"
      },
      {
        numero: 4,
        imgUrl: "https://res.cloudinary.com/geronicola/image/upload/v1711325178/general-it/gtwqyvbfzlmdmt33r3tz.png",
        imgMid: "",
        imgBig: "",
        subtitulo: "Atencion Personalizada para cada sonrisa",
        parrafo: "Sonrie, deja que tus dientes respiren",
        id: "portada-4",
        logo: "logo-portada-4"
      },
  
    ];
    
    const valor1 = images[0]
    const valor2 = images[1]
    const valor3 = images[2]
    const valor4 = images[3]

    let newArray = []

    const [listaImagenes, setListaImagenes] = useState(images)
    const [seleccionar, setSeleccionar] = useState(false)
    
    const cambiarOrdenImages = (numeroElegido) => {
      if(numeroElegido === 0 ) {
        newArray[0] = valor1
        newArray[1] = valor2
        newArray[2] = valor3 
        newArray[3] = valor4  
        setListaImagenes(newArray) 
        setSeleccionar(!seleccionar)
      } 
      if(numeroElegido === 1 ) {
        newArray[0] = valor2
        newArray[1] = valor3
        newArray[2] = valor4
        newArray[3] = valor1      
        setListaImagenes(newArray) 
      
      } 
      if(numeroElegido === 2) {
        newArray[0] = valor3
        newArray[1] = valor4
        newArray[2] = valor1 
        newArray[3] = valor2     
        setListaImagenes(newArray) 
      } 
      if(numeroElegido === 3) {
        newArray[0] = valor4
        newArray[1] = valor1
        newArray[2] = valor2 
        newArray[3] = valor3     
  
        setListaImagenes(newArray) 
      } 

    }
    return (
        <> 

          <ul className="menu menu-portada gap-5">
              <li onClick={(e) => cambiarOrdenImages(0) }>
                <a> </a>
              </li>
              <li onClick={(e) => cambiarOrdenImages(1) }>
                <a> </a>
              </li>
              <li onClick={(e) => cambiarOrdenImages(2) }>
                <a> </a>
              </li>
              <li onClick={(e) => cambiarOrdenImages(3) }>
                <a> </a>
              </li>
          </ul>
         
          <Slider listaImagenes={listaImagenes} fraction={0.5} autoplayInterval={100000} />  
              
        </>
    )
}

export default IndexHeader