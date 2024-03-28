import React, { useState, useEffect } from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal'; // Solo necesitamos Slide de react-awesome-reveal
import '../Index/IndexHeader/IndexHeader.css';

const Slider = ({ images, autoplayInterval = 1000 }) => {
  console.log(images)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideKey, setSlideKey] = useState(0); // Clave única para forzar la recreación del componente Slide
 
  
  useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setSlideKey((prevKey) => prevKey + 1); // Actualiza la clave única para reiniciar la animación
      }, autoplayInterval);

      return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    }, [images.length, autoplayInterval]);

    const nextSlide = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setSlideKey((prevKey) => prevKey + 1); // Actualiza la clave única para reiniciar la animación
    };

    const prevSlide = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setSlideKey((prevKey) => prevKey + 1); // Actualiza la clave única para reiniciar la animación
    };

  return (
    <> 
    
    <article className={images[currentImageIndex].id   ? "article-portada article-portada-banner" : "article-portada"}>

      <Slide key={slideKey} > {/* Utiliza la clave única para forzar la recreación del componente Slide */}
        
        <img src={images[currentImageIndex].imgUrl}
             className="portada-img"
             alt="slide"
             id={ images[currentImageIndex].id ?  images[currentImageIndex].id : ""}
        />

        { images[currentImageIndex].numero == 111
          ? <section className='portada-border'> </section>
          : <> </>
        }

        {
          images[currentImageIndex].id  
            ? <> </>
            :  <section className="portada-texto">
              
              <h2 className="h2-portada-texto width-70">
                {images[currentImageIndex].subtitulo}
              </h2>

              <p className="width-70 p-portada-texto">
                {images[currentImageIndex].parrafo}
              </p>

              <ul className="lista-portada width-70">
                <li className="flex-center-v lista-numero">
                  <FaPhoneSquareAlt size={19} />
                  <span className="span-portada-numero"> (598) 94 484 397 </span>
                </li>
              </ul>

              <ul className="lista-portada lista-portada-2 width-70 small">
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
          </section>
        }
       

      </Slide>

      
    </article>
    </>
  );
};

export default Slider;
