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

    const [publicacion, setPublicacion] = useState({
        titulo : "Titulo Momentaneamente Provisorio",

    })

    const [content, setContent] = useState([]);

    const addParagraph = () => {
        setContent([...content, { type: 'parrafo', text: '' }]);
      };
    
      const addSubtitle = () => {
        setContent([...content, { type: 'subtitulo', text: '' }]);
      };



    const agregarInputContenido = (tipo) => {
        setContent(
            [...content, 
                { 
                    id: inputs.length, 
                    type: tipo, 
                    text : ""
                }
        ]);
        console.log(content)
      };


      const cambioEnContenido = (id, tipo, texto) => {
        setContent(
            [...content, 
                { 
                    id: id,
                    type: tipo, 
                    text : texto
                }
        ]);
        console.log(content)
      }


      const handleTextChange = (index, newText) => {
        setContent(prevContent => {
          const updatedContent = [...prevContent];
          updatedContent[index].text = newText;
          return updatedContent;
        });

        console.log(content)
      };

      const handleColor = (event) => {
        setSelectedColor(event.target.value);
      };

   

      const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
          setListItems([...listItems, inputValue]);
          setInputValue('');
        }
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
                                    <input type="text" name="titulo" id="titulo-post" className="vacio input-crear" />
                                </li>

                                <li>
                                    <label htmlFor="text" className="label-crear">Color Portada</label>
                                    <div className="flex-center-center gap-20">
                                        <input type="color" name="color" id="titulo-post" className="vacio input-crear"  onChange={ handleColor } />
                                        <div style={{ backgroundColor: selectedColor, width: '25px', height: '25px' }}></div>
                                    </div>
                                    
                                </li>
                    
                    
                                <li>
                                    <label htmlFor="text" className="label-crear">Fecha</label>
                                    <input type="date" name="fecha" id="fecha-post" className="vacio input-crear"  />
                                </li>
                                <div className="div-li-contenido">

                                    <li id="li-agregar">
                                        <label htmlFor="text" className="btn-agregar agregar-parrafo label-crear" onClick={ (e) => { agregarInputContenido("parrafo")} }> *Agregar Párrafo </label>
                                        <label htmlFor="text" className="btn-agregar agregar-subtitulo label-crear" onClick={ (e) => { agregarInputContenido("subtitulo")} }>Agregar Subtítulo</label>
                                       
                                    </li>

                                    <li> 
                                        { content.map((element, index) => (
                                            <div key={index}>
                                            { element.type === 'parrafo' ? (
                                                <textarea
                                                value={element.text}
                                                onChange={(e) => handleTextChange(index, e.target.value)}
                                                placeholder="Ingrese el párrafo"
                                                />
                                            ) : (
                                                <textarea
                                                    type="text"
                                                    value={element.text}
                                                    onChange={(e) => handleTextChange(index, e.target.value)}
                                                    placeholder="Ingrese el subtítulo"
                                                    
                                                />
                                            )}
                                            <button onClick={() => handleRemoveElement(index)}>Eliminar</button>
                                            </div>
                                        ))}
                                    </li>
                                    {
                                        
                                        <li className="agregar-texto">
                                            <span>Previsualizar el Contenido</span>
                                            <span data-id="agregar" id="agregar-texto-crear">Previsualizar Publicación</span>
                                            <span className="span-enter">Presionar Enter</span>
                                        </li>
                                        
                                    }
                                   
                                    <li className="li-button">
                                        <label>Terminar Publicación</label>
                                        <input id="enviar-post" type="submit" value="Finalizar" disabled />
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
                                    src={selectedImage}
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
                     
                            {content ?  content.map((item, index) => (
                             
                                item.type === "parrafo" 
                                    ? <p className="texto-pre"> {item.text} </p>
                                    : <h2 className="h2-pre"> {item.text} </h2>
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