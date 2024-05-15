import React, { useState, useEffect } from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal'; // Solo necesitamos Slide de react-awesome-reveal
import '../Index/IndexHeader/IndexHeader.css';
import logo from "../../../public/logo-2.png"

const Slider = ({ listaImagenes, autoplayInterval = 1000 }) => {
  console.log(listaImagenes)
  const [indexActual, setIndexActual] = useState(0);
  const [slideKey, setSlideKey] = useState(0); // Clave única para forzar la recreación del componente Slide
 
  
  useEffect(() => {
      const intervalId = setInterval(() => {
        setIndexActual((prevIndex) =>
          prevIndex === listaImagenes.length - 1 ? 0 : prevIndex + 1
        );
        setSlideKey((prevKey) => prevKey + 1); // Actualiza la clave única para reiniciar la animación
      }, autoplayInterval);

      return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    }, [listaImagenes.length, autoplayInterval]);


    const imgBanner = "https://res.cloudinary.com/geronicola/image/upload/v1711566365/to1utgnyqwaxdl6ztfqv.png"

  return (
    <> 

    
    <article 
      className={ listaImagenes[indexActual].id === "portada-4"  ? "article-portada article-portada-banner" : "article-portada"} 
      id={ listaImagenes[indexActual].id === "portada-4"  ? "article-banner" : ""}
    >

      <Slide key={slideKey} > {/* Utiliza la clave única para forzar la recreación del componente Slide */}
        
        <img src={ listaImagenes[indexActual].imgUrl }
             alt="slide"
             id={ listaImagenes[indexActual].id === "portada-4" ? "img-banner" : ""}
             className={listaImagenes[indexActual].className ? `${ listaImagenes[indexActual].className } portada-img display-none`: "portada-img display-none"}
        />

        {
          listaImagenes[indexActual].id === "portada-4" 
          ? <> </>
          :  <section className="portada-texto">
          
              <h2 className="width-70 h2-portada-texto ml-15">
                {listaImagenes[indexActual].subtitulo}
              </h2>
              

              <p className="width-70 p-portada-texto ml-15">
                {listaImagenes[indexActual].parrafo}
              </p>

              <ul className="lista-portada width-70 ml-15">
                <li className="flex-center-v lista-numero">
                  <FaPhoneSquareAlt size={19} />
                  <span className="span-portada-numero"> (598) 94 484 397 </span>
                </li>
              </ul>


                <ul className="lista-portada lista-portada-2 width-70 small ml-15">
                  <li className="white li-portada-texto">
                    Martes y Jueves 13:00 - 20:00 (Las Piedras)
                  </li>
                  <li className="white li-portada-texto">
                    Miercoles 13:00 - 20:00 (Montevideo)
                  </li>
                  <li className="white li-portada-texto">
                    Sabados 09:00 - 14:00 (Las Piedras)
                  </li>
                </ul>
       
                <picture className={`logo-portada`} alt="" /> 
         
          </section>
        }
       

      </Slide>

      
    </article>
    </>
  );
};

export default Slider;
