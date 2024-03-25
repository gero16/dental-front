import React from 'react'
import './main.css'

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import imagen from "../public/global.fw.png"

import Navbar from "./Components/Navbar/Navbar.jsx"
import Index from "./Components/Index/Index.jsx"
import Contacto from './Components/Contacto/Contacto';
import ReservaHora from './Components/ReservaHora/ReservaHora';
import Nosotros from './Components/Nosotros/Nosotros.jsx';
import Galeria from './Components/Galeria/Galeria.jsx';
import Servicios from './Components/Servicios/Servicios.jsx';
import IniciarSesion from './Components/IniciarSesion/IniciarSesion.jsx';
import Registro from './Components/Registro/Registro.jsx';
import Blog from './Components/Contacto/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Navbar> </Navbar>
      <Index> </Index>
    </>
    
  },
  {
    path: "/nosotros",
    element: <Nosotros> </Nosotros>
  },
  {
    path: "/galeria",
    element: <Galeria> </Galeria>,
  },

  {
    path: "/contacto",
    element:  <Contacto> </Contacto>

  },
  {
    path: "/servicios/:servicio",
    element: <Servicios> </Servicios>
  },
  {
    path: "/blog",
    element: <Blog> </Blog>
  },
  {
    path: "/reservar-hora",
    element: <ReservaHora> </ReservaHora>,
  },
  {
    path: "/iniciar-sesion",
    element: <IniciarSesion> </IniciarSesion>,
  },
  {
    path: "/registrarse",
    element: <Registro> </Registro>,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
