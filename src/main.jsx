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

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <div> 

      <Navbar> </Navbar>
      <Index> </Index>

    </div>,
  },
  {
    path: "/nosotros",
    element: <Nosotros> </Nosotros>
  },
  {
    path: "/galeria",
    element: <div>Hello world!</div>,
  },
  {
    path: "/iniciar-sesion",
    element: <div>Hello world!</div>,
  },
  {
    path: "/registrarse",
    element: <div>Hello world!</div>,
  },
  {
    path: "/contacto",
    element:  <Contacto> </Contacto>

  },
  {
    path: "/servicios/:servicio",
    element: <div>Hello world!</div>,
  },
  {
    path: "/blog",
    element: <div>Hello world!</div>,
  },
  {
    path: "/reservar-hora",
    element: <ReservaHora> </ReservaHora>,
  },
 

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
