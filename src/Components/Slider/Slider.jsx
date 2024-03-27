import React, { useState, useEffect } from 'react';
import { FaPhoneSquareAlt  } from 'react-icons/fa';
import "../Index/IndexHeader/IndexHeader.css"

const Slider = ({ images, autoplayInterval = 3000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, autoplayInterval);
  
      return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    }, [images.length, autoplayInterval]);
  
    const nextSlide = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <article className="article-portada">
        {/* <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Siguiente</button> */}
  
        <img
          src={images[currentImageIndex].imgUrl}
          className="portada-img"
          alt="slide"
        />
  
        <section className="portada-texto">
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
      </article>
    );
};

export default Slider;
