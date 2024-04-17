import { useContext, useEffect, useState } from "react";
import "./CrearPublicacion.css";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { Context } from "../../../Context/Context";


const EditarPublicacion = ({data}) => {
    const { urlBackend_Produccion, urlBackend_Desarrollo } = useContext(Context)

    const { idPublicacion } = useParams()


    const [selectedImage, setSelectedImage] = useState("https://st2.depositphotos.com/1371678/9634/i/450/depositphotos_96346704-stock-photo-dentist-examining-a-patients-teeth.jpg");
    const [selectedColor, setSelectedColor] = useState('#0FA89D');
    const recommendedColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

  

    const [publicacion, setPublicacion] = useState({contenido: []});
    
    async function fetchPublicacion() {
    try {
        const response = await fetch(`${ urlBackend_Produccion }/publicaciones/traer-publicacion/${ idPublicacion }`); // Cambia la URL según la ruta de tu backend
        if (!response.ok) {
        throw new Error('Error al obtener las publicaciones');
        }
        const data = await response.json();
        console.log(data)
        setPublicacion(data)
        console.log(publicacion)
        return publicacion; // Devuelve los datos de las publicaciones
    } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
        return null; // Devuelve null si hay un error
    }
    }

      useEffect(() => {
        fetchPublicacion()

        console.log(publicacion)
  }, [])

    const [listas, setListas] = useState([]);

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
        setPublicacion(prevPublicacion => {
            const updatedContenido = [...prevPublicacion.contenido];
            updatedContenido.splice(index, 1);
            return {
                ...prevPublicacion,
                contenido: updatedContenido
            };
        });
    };

    const separarElementosLista = (lista) => {
        return lista.split('\n');
    }
    
    const handleTextChange = (index, newText, clase) => {
        setPublicacion(prevPublicacion => {
            const updatedContenido = [...prevPublicacion.contenido];
            updatedContenido[index].texto = newText;
            return {
                ...prevPublicacion,
                contenido: updatedContenido
            };
        });

        if (clase === "input-lista") {
            const nuevaLista = separarElementosLista(newText);
            // Actualizar la lista en la posición correspondiente o agregar una nueva lista
            setListas(prevListas => {
                const nuevasListas = [...prevListas];
                if (nuevasListas[index]) {
                    nuevasListas[index] = nuevaLista;
                } else {
                    nuevasListas.push(nuevaLista);
                }
                return nuevasListas;
            });
        }
    };
    

    const handleColor = (event) => {
        setSelectedColor(event.target.value);
        setPublicacion({...publicacion, color : selectedColor});
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPublicacion({...publicacion, imagen : reader.result});
            };
            reader.readAsDataURL(file);
        }
    };
 
    const editarPublicacion = async (data) => {
        console.log(data)
        const archivos = document.querySelector("#imagen-post").files
        const rutaImagen = archivos[0];

        const formData = new FormData();
        formData.append('titulo', JSON.stringify(data.titulo));
        formData.append('color', JSON.stringify(data.color));
        formData.append('contenido', JSON.stringify(data.contenido));
        formData.append('imagen', rutaImagen);

        let response = await fetch(`${ urlBackend_Produccion }/publicaciones/editar-publicacion/${ idPublicacion }`, {
            method: 'PUT',
            body: formData
        });
          
        let result = await response.json();
        if(result) {
            console.log(result);
        }
        
    }

    return (
        <> 
            <Navbar />
            <div className="fondo-blanco-img">
                <main className="principal container">
                    <article className="crear-post">
                        <h1>Crear Publicacion</h1>
                        <form>
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
                                            onChange={handleImageChange}
                                        />
                                        <label htmlFor="imagen-post" className="label-imagen">Seleccionar Archivo</label>
                                        <span className="span-foto">Ningun archivo Seleccionado.</span>
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="text" className="label-crear">*Titulo</label>
                                    <input 
                                       value={publicacion.titulo}
                                        type="text" 
                                        name="titulo" 
                                        id="titulo-post" 
                                        className="vacio input-crear" 
                                        onChange={(e) => setPublicacion({ ...publicacion, titulo: e.target.value })}
                                    />
                                </li>
                                <li>
                                    <label htmlFor="text" className="label-crear">Color Portada</label>
                                    <div className="flex-center-center gap-20">
                                        <input 
                                            type="color" 
                                            name="color" 
                                            id="titulo-post" 
                                            className="vacio input-crear"  
                                            onChange={handleColor}
                                        />
                                        <div style={{ backgroundColor: selectedColor, width: '25px', height: '25px' }}> </div>
                                    </div>
                                </li>
                              
                                <div className="div-li-contenido">
                                    <li className="gap-10"> 
                                        { publicacion.contenido && publicacion.contenido.map((element, index) => (
                                            <div key={index} className="text-center">
                                                { element.tipo === 'parrafo' ? (
                                                    <> 
                                                        <span> Parrafo </span>
                                                        <textarea
                                                            value={element.texto}
                                                            onChange={(e) => handleTextChange(index, e.target.value)}
                                                            placeholder="Ingrese el párrafo"
                                                        />
                                                        <span onClick={() => handleRemoveElement() }> Eliminar </span>
                                                    </>
                                                ) : element.tipo === 'subtitulo' ? (
                                                    <> 
                                                        <span> Subtitulo </span>
                                                        <textarea
                                                            type="text"
                                                            value={element.texto}
                                                            onChange={(e) => handleTextChange(index, e.target.value)}
                                                            placeholder="Ingrese el subtítulo"
                                                        />
                                                        <span onClick={() => handleRemoveElement() }> Eliminar </span>
                                                    </>
                                                ) : element.tipo === 'lista' ? (
                                                    <> 
                                                        <span> Lista </span>
                                                        <textarea
                                                            className="input-lista"
                                                            value={element.texto}
                                                            onChange={(e) => handleTextChange(index, e.target.value, e.target.className)}
                                                            placeholder="Ingrese el título de la lista"
                                                        />
                                                        <span onClick={() => handleRemoveElement() }> Eliminar </span>
                                                    </>
                                                ) : null}
                                            </div>
                                        ))}
                                    </li>
                                    <li id="li-agregar">
                                        <label htmlFor="text" className="btn-agregar agregar-parrafo label-crear" onClick={(e) => { agregarContenido("parrafo")}}> *Agregar Párrafo </label>
                                        <label htmlFor="text" className="btn-agregar agregar-subtitulo label-crear" onClick={(e) => { agregarContenido("subtitulo")}}>Agregar Subtítulo</label>
                                        <label htmlFor="text" className="btn-agregar agregar-subtitulo label-crear" onClick={(e) => { agregarContenido("lista")}}>Agregar Lista </label>   
                                    </li>
                                    <li className="li-button text-center">
                                        <label>Terminar Publicación</label>                          
                                        <span id="enviar-post" value="Finalizar"  onClick={() => editarPublicacion(publicacion)}> Finalizar </span>
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
                            { publicacion.imagen && (
                                <img
                                    src={publicacion.imagen}
                                    alt="Vista previa de la imagen"
                                    style={{ display: 'block', maxWidth: '100%', maxHeight: '200px' }}
                                    className="pre-img"
                                />
                            )}
                            <section className="flex-column-center section-titulo-pre text-center">
                                <h2 className="pre-titulo titulo-post white"> {publicacion.titulo}</h2>
                            </section>
                        </section>
                        <div className="pre-contenido width-70 flex-column gap-10">

                            { publicacion.contenido.map((element, index) => (
                                <div key={index}>
                                    { element.tipo === 'parrafo' && (
                                        <p className="small">{element.texto}</p>
                                    )}
                                    { element.tipo === 'subtitulo' && (
                                        <h3 className="small">{element.texto}</h3>
                                    )}
                                    { element.tipo === 'lista' && (
                                        listas[index] && (
                                            <ul className="flex-column gap-5 small lista-publicacion">
                                                {listas[index].map((item, itemIndex) => (
                                                    <li key={itemIndex} className="small">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    </article>
                </main>
            </div>
        </>
    )
}

export default EditarPublicacion;
