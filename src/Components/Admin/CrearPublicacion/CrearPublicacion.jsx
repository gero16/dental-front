import { useState } from "react";
import "./CrearPublicacion.css"
import Navbar from "../../Navbar/Navbar";

const CrearPublicacion = () => {
    
    const [inputs, setInputs] = useState([]);

    const [inputValue, setInputValue] = useState('');
    const [listItems, setListItems] = useState([]);
    const [selectedImage, setSelectedImage] = useState("https://st2.depositphotos.com/1371678/9634/i/450/depositphotos_96346704-stock-photo-dentist-examining-a-patients-teeth.jpg");


    const [selectedColor, setSelectedColor] = useState('#0FA89D');
    const recommendedColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

    // Por ahora tengo los estados separados - Pero la idea es unirlos luego
    const [publicacion, setPublicacion] = useState({
        titulo : "",
        fecha : "",
        color: "#0FA89D",
        contenido: [],

    })

    const agregarContenido = (tipo) => {
        setPublicacion(prevPublicacion => {
            const nuevoContenido = {
                id: prevPublicacion.contenido.length,
                tipo: tipo,
                texto: ""
            };
    
            return {
                ...prevPublicacion,
                contenido: [...prevPublicacion.contenido, nuevoContenido]
            };
        });
    };
    
    const handleRemoveElement = (index) => {
        setContent(prevContent => {
          const updatedContent = [...prevContent];
          updatedContent.splice(index, 1);
          return updatedContent;
        });
      };

    const handleTextChange = (index, newText) => {
        setPublicacion(prevPublicacion => {
            const updatedContenido = [...prevPublicacion.contenido];
            updatedContenido[index].texto = newText;
            
            return {
                ...prevPublicacion,
                contenido: updatedContenido
            };
        });
        console.log(publicacion)
    };
    

    const handleColor = (event) => {
    setSelectedColor(event.target.value);
    };


    const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
        setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
    };

      
    const agregarPublicacion = async (data) => {
        let response = await fetch(`http://localhost:3000/publicaciones/agregar-publicacion`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
          });
          
          let result = await response.json();
          if(result) {
              console.log(result)

          }
    }


    return (
        <> 
            <Navbar> </Navbar>
            <div className="fondo-blanco-img">

                <main className="principal container">

                    <article className="crear-post">
                        <h1>Crear Publicacion</h1>

                        <form className="formulario" action={`/`} method="POST" encType="multipart/form-data">
                            <ul>
                                <li style={{display: "none"}}>
                                    <label htmlFor="">Token</label>
                                    <input type="text" className="token" name="token" />
                                </li>
                                <li>
                                    <label htmlFor="" className="label-crear">*Imagen</label>
                                    <div className="grid-input-img">
                                        <input 
                                            type="file" 
                                            name="imagen" 
                                            id="imagen-post" 
                                            style={{display: "none"}} 
                                            className="vacio input-crear" 
                                            onChange={ handleImageChange }
                                        />
                                        <label htmlFor="imagen-post" className="label-imagen">Seleccionar Archivo</label>
                                        <span className="span-foto">Ningun archivo Seleccionado.</span>
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="text" className="label-crear">*Titulo</label>
                                    <input 
                                        type="text" 
                                        name="titulo" 
                                        id="titulo-post" 
                                        className="vacio input-crear" 
                                        onChange={ (e) => setPublicacion({ ...publicacion, titulo: e.target.value }) }  />
                                </li>

                                <li>
                                    <label htmlFor="text" className="label-crear">Color Portada</label>
                                    <div className="flex-center-center gap-20">
                                        <input type="color" name="color" id="titulo-post" className="vacio input-crear"  onChange={ handleColor } />
                                        <div style={{ backgroundColor: selectedColor, width: '25px', height: '25px' }}> </div>
                                    </div>
                                    
                                </li>
                    
                                <li>
                                    <label htmlFor="text" className="label-crear">Fecha</label>
                                    <input type="date" name="fecha" id="fecha-post" className="vacio input-crear"  />
                                </li>

                                <div className="div-li-contenido">

                                    <li id="li-agregar">
                                        <label htmlFor="text" className="btn-agregar agregar-parrafo label-crear" onClick={ (e) => { agregarContenido("parrafo")} }> *Agregar Párrafo </label>
                                        <label htmlFor="text" className="btn-agregar agregar-subtitulo label-crear" onClick={ (e) => { agregarContenido("subtitulo")} }>Agregar Subtítulo</label>
                                       
                                    </li>

                                    <li> 
                                        { publicacion.contenido.map((element, index) => (
                                            <div key={index}>
                                            { element.tipo === 'parrafo' ? (
                                                <textarea
                                                value={element.texto}
                                                onChange={(e) => handleTextChange(index, e.target.value)}
                                                placeholder="Ingrese el párrafo"
                                                />
                                            ) : (
                                                <textarea
                                                    type="text"
                                                    value={element.texto}
                                                    onChange={(e) => handleTextChange(index, e.target.value)}
                                                    placeholder="Ingrese el subtítulo"
                                                    
                                                />
                                            )}
                                            <button onClick={() => handleRemoveElement(index)}>Eliminar</button>
                                            </div>
                                        ))}
                                    </li>
                                         
                                    <li className="li-button text-center">
                                        <label>Terminar Publicación</label>
                                        <span id="enviar-post" value="Finalizar"  onClick={() => agregarPublicacion(publicacion) } > Finalizar </span> 
                                    </li>
                                </div>
                            </ul>
                        </form>
                        
                        <div className="flex-center div-alert"></div>
                        <div className="campos-obligatorios">* Campos obligatorios</div>
                    </article>


                    {/*****  PREVIEWWWWW *****/}
                    <article className="preview">
                        <section className="flex header-publicacion" style={{ backgroundColor : selectedColor}}>
                            { selectedImage && (
                                <img
                                    src={ selectedImage }
                                    alt="Vista previa de la imagen"
                                    style={{ display: 'block', maxWidth: '100%', maxHeight: '200px' }}
                                    className="pre-img"
                                />
                            )}

                            <section className="flex-column-center section-titulo-pre">
                                <h2 className="pre-titulo titulo-post white"> { publicacion.titulo }</h2>
                            </section>

                        </section>
                        

                        <div className="pre-contenido width-70 flex-column gap-10">
                     
                            { publicacion.contenido ?  publicacion.contenido.map((item, index) => (
                                
                                item.tipo === "parrafo" 
                                    ? <p className="texto-pre"> { item.texto } </p>
                                    : <h2 className="h2-pre"> { item.texto } </h2>
                                ))
                                : <p> Parrafo de relleno </p>
                            }
                    
                        </div>
                    </article>
                        
                        
                    
                 
                </main>
            </div>

                     
        </>
    )
}


export default CrearPublicacion